'use client';

import Input from '@/components/Input/Input';
import { IoMdSearch } from 'react-icons/io';
import RepositoryList from '@/app/components/RepositoryList/RepositoryList';
import styles from './RepositorySearcher.module.css';
import useRepoSearch from '@/app/components/RepositorySearcher/hooks/useRepoSearch';
import Loader from '@/components/Loader/Loader';
import Pagination from '@/components/Pagination/Pagination';
import FormItem from '@/components/FormItem/FormItem';

const RepositorySearcher = () => {
  const { searchValue, onSearchValueChange, loading, data, page, handlePaginate, getTotalPages ,getError } =
    useRepoSearch();
  return (
    <div className={styles.root}>
          <FormItem className={styles.searchWrapper} error={getError()}>
            <Input
              value={searchValue}
              onChange={(e) => onSearchValueChange(e.target.value)}
              before={<IoMdSearch size={16} />}
              placeholder={'Search GitHub Repositories...'}
              rootClassName={styles.input}
            />
          </FormItem>
      {loading && <Loader />}
      {data && <RepositoryList repositories={data.items} />}
      {data && data.total_count > 0 && (
        <Pagination
          total={getTotalPages()}
          currentPage={page}
          handlePaginate={(page) => {
            handlePaginate(page);
          }}
        />
      )}
    </div>
  );
};

export default RepositorySearcher;
