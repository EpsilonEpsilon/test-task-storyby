'use client';
import styles from './Pagination.module.css';
import { FC } from 'react';
import getPageNumbers from '@/lib/utils/getPageNumbers';

interface IProps {
  total: number;
  currentPage: number;
  handlePaginate: (page: number) => void;
}
const Pagination: FC<IProps> = ({ currentPage, total, handlePaginate }) => {
  const onChangePagination = async (page: number) => {
    handlePaginate(page);
  };
  return (
    <div className={styles['container']}>
      {getPageNumbers(currentPage, total).map((page) => (
        <button
          disabled={currentPage === page}
          onClick={() => onChangePagination(page)}
          key={page}
          className={styles['button']}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
