import { useEffect, useRef, useState } from 'react';
import { useDebounceEffect } from '@/lib/hooks/useDebounceEffect';
import useCreateRequest from '@/lib/hooks/useRequest';
import postSearchRepo, { SearchRepoParams } from '@/lib/api/github/requests/postSearchRepo';
import toast from 'react-hot-toast';
const PER_PAGE = 10;
const MIN_CHARS = 3;
const useRepoSearch = () => {
  const initialRequest = useRef<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [searchValue, setSearchValue] = useState<string>('');
  const controller = useRef(new AbortController());
  const [handleRequestRepos, { loading, data, reqCount, setData }] = useCreateRequest<
    Awaited<ReturnType<typeof postSearchRepo>>,
    SearchRepoParams
  >((data) => postSearchRepo(data, controller.current.signal), {
    onError: (e) => {
      toast.error(e?.reason || 'Internal Server Error');
    },
  });
  const getTotalPages = () => {
    if (!data) return 0;
    return Math.ceil(data?.total_count / PER_PAGE);
  };
  const onSearchValueChange = (value: string) => {
    setSearchValue(value);
  };

  useDebounceEffect(
    () => {
      if (initialRequest.current) {
        initialRequest.current = false;
        return;
      }
      if (!searchValue || searchValue.length < MIN_CHARS) return;
      if (loading) {
        controller.current.abort();
        controller.current = new AbortController();
      }
      handleRequestRepos({ q: searchValue, per_page: PER_PAGE, page: page });
    },
    300,
    [searchValue],
  );

  useEffect(() => {
    if (!searchValue || searchValue.length < MIN_CHARS){
      initialRequest.current = true;
      setData(undefined);
      return;
    }

    if (data && data.total_count) return;
    initialRequest.current = true;
    handleRequestRepos({ q: searchValue, per_page: PER_PAGE, page: page });
  }, [searchValue, reqCount, data, handleRequestRepos, page, setData]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  const handlePaginate = async (page: number) => {
    setPage(page);
    await handleRequestRepos({ q: searchValue, per_page: PER_PAGE, page: page }).then();
  };

  const getError = ()=>{
    if(reqCount.current < 1) return
    if(searchValue.length < MIN_CHARS) return "Please enter at least 3 characters to start searching."
  }
  return { onSearchValueChange, searchValue, loading, data, handlePaginate, page, getTotalPages, getError };
};

export default useRepoSearch;
