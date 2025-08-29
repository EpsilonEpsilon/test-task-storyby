import { IGHRepo } from '@/lib/api/github/types';
import { FC } from 'react';
import Image from 'next/image';
import styles from './RepositoryFullPage.module.css';
import { format } from 'date-fns';

interface IProps {
  repository: IGHRepo;
}

const RepositoryFullPage: FC<IProps> = ({ repository }) => {
  return (
    <div className={styles.root}>
      <Image width={200} height={200} src={repository.owner.avatar_url} alt={repository.name} />
      <h1 className={styles.name}>{repository.name}</h1>
      <span className={styles.description}>{repository.description}</span>
      <div className={styles.body}>
        <div className={styles.item}>
          <span className={styles.title}>Language:</span>
          <span className={styles.value}>{repository.language}</span>
        </div>
        <div className={styles.item}>
          <span className={styles.title}>Created At:</span>
          <span className={styles.value}>
            {format(repository.created_at, 'dd-MM-yyyy HH:mm:ss')}
          </span>
        </div>
        <div className={styles.item}>
          <span className={styles.title}>Last Update:</span>
          <span className={styles.value}>
            {format(repository.updated_at, 'dd-MM-yyyy HH:mm:ss')}
          </span>
        </div>
        <div className={styles.item}>
          <span className={styles.title}>Stars:</span>
          <span className={styles.value}>{repository.stargazers_count}</span>
        </div>
        <div className={styles.item}>
          <span className={styles.title}>Issues:</span>
          <span className={styles.value}>{repository.open_issues}</span>
        </div>
      </div>
    </div>
  );
};

export default RepositoryFullPage;
