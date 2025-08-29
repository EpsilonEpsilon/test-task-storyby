import { IGHRepo } from '@/lib/api/github/types';
import { FC } from 'react';
import styles from './Repository.module.css';
import Image from 'next/image';
import { CiStar } from 'react-icons/ci';
import Link from 'next/link';

interface IProps {
  repository: IGHRepo;
}

const Repository: FC<IProps> = ({ repository }) => {
  return (
    <Link className={styles.root} target={'_blank'} href={`/repository/${repository.id}`}>
      <div className={styles.imageContainer}>
        <Image width={50} height={50} src={repository.owner.avatar_url} alt={repository.name} />
        <div className={styles.namesContainer}>
          <span className={styles.name}>{repository.name}</span>
          <span className={styles.login}>{repository.owner.login}</span>
        </div>
      </div>
      <span className={styles.description}>{repository.description}</span>
      <div className={styles.stars}>
        <CiStar size={30} />{' '}
        <span className={styles.starsCount}>{repository.stargazers_count}</span>
      </div>
    </Link>
  );
};

export default Repository;
