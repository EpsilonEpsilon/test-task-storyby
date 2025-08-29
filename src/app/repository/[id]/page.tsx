import getGHRepoById from '@/lib/api/github/requests/getGHRepoById';
import { notFound } from 'next/navigation';
import RepositoryFullPage from '@/app/repository/[id]/components/RepositoryFullPage/RepositoryFullPage';

interface IProps {
  params: Promise<{
    id: number;
  }>;
}
const Page = async (props: IProps) => {
  const repoId = (await props.params).id;
  try {
    const repository = await getGHRepoById({ id: repoId });
    return <RepositoryFullPage repository={repository} />;
  } catch (e) {
    console.log(e);
    return notFound();
  }
};

export default Page;
