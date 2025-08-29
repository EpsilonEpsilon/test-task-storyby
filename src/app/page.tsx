import styles from './page.module.css';
import RepositorySearcher from '@/app/components/RepositorySearcher/RepositorySearcher';

export default function Page() {
  return (
    <main className={styles.root}>
      <div className={styles.headerWrapper}>
        <h1 className={styles.header}>Search GitHub Repositories</h1>
        <p className={styles.subheader}>Find any repository by name, description, or owner.</p>
      </div>
      <RepositorySearcher />
    </main>
  );
}
