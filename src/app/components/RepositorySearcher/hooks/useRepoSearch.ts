import { useEffect, useState } from 'react';
import useSearchRequest from '@/app/components/RepositorySearcher/hooks/useSearchRequest';

const useRepoSearch = () => {
  const [page, setPage] = useState<number>(1);
  const [searchValue, setSearchValue] = useState<string>('');
  const { data, perPage, getError, loading, handleRequest } = useSearchRequest({ searchValue, page });

  const getTotalPages = () => {
    if (!data) return 0;
    return Math.ceil(data?.total_count / perPage);
  };
  const onSearchValueChange = (value: string) => {
    setSearchValue(value);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  const handlePaginate = async (page: number) => {
    await handleRequest({ q: searchValue, per_page: perPage, page: page }).then(() => {
      setPage(page);
    })
  };

  return {
    onSearchValueChange,
    searchValue,
    loading,
    data,
    handlePaginate,
    page,
    getTotalPages,
    getError,
  };
};

export default useRepoSearch;
