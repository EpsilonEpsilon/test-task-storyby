import getGHRepoById from '@/lib/api/github/requests/getGHRepoById';
import { FC } from 'react';
import { notFound } from 'next/navigation';
import RepositoryFullPage from '@/app/repository/[id]/components/RepositoryFullPage/RepositoryFullPage';

interface IProps {
  params: {
    id: number;
  };
}
const Page: FC<IProps> = async (props) => {
  const repoId = props.params.id;
  try {
    const repository = await getGHRepoById({ id: repoId });
    return <RepositoryFullPage repository={repository} />;
  } catch (e) {
    return notFound();
  }
};

export default Page;
