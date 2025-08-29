import { IGHRepo } from '@/lib/api/github/types';
import { FC } from 'react';
import styles from './RepositoryList.module.css';
import Repository from '@/app/components/Repository/Repository';

interface IProps {
  repositories: IGHRepo[];
}

const RepositoryList: FC<IProps> = ({ repositories }) => {
  return (
    <div className={styles.list}>
      {repositories.map((repo) => (
        <Repository key={repo.id} repository={repo} />
      ))}
    </div>
  );
};

export default RepositoryList;
