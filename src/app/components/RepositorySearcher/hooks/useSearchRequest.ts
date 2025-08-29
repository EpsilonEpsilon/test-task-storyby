import { useEffect, useRef } from 'react';
import useCreateRequest from '@/lib/hooks/useRequest';
import postSearchRepo, { SearchRepoParams } from '@/lib/api/github/requests/postSearchRepo';
import toast from 'react-hot-toast';
import useDebounceEffect from '@/lib/hooks/useDebounceEffect';

interface Args{
  searchValue:string;
  page:number
}

const PER_PAGE = 10;
const MIN_CHARS = 3;

const useSearchRequest = ({searchValue, page}:Args)=>{
  const initialRequest = useRef<boolean>(false);
  const controller = useRef(new AbortController());
  const [handleRequest, { loading, data, reqCount, setData }] = useCreateRequest<
    Awaited<ReturnType<typeof postSearchRepo>>,
    SearchRepoParams
  >((data) => postSearchRepo(data, controller.current.signal), {
    onError: (e) => {
      toast.error(e?.reason || 'Internal Server Error');
    },
  });

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
      handleRequest({ q: searchValue, per_page: PER_PAGE, page: page });
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
    handleRequest({ q: searchValue, per_page: PER_PAGE, page: page });
  }, [searchValue, reqCount]);

  const getError = ()=>{
    if(reqCount.current < 1) return
    if(searchValue.length < MIN_CHARS) return "Please enter at least 3 characters to start searching."
  }

  return {data, perPage:PER_PAGE, getError, loading, handleRequest }
}

export default useSearchRequest;
