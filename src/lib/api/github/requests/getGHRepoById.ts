import ResponseError from '@/lib/errors/ResponseError';
import { githubReqHeaders } from '@/lib/api/github/headers';
import { buildGitHubURL } from '@/lib/api/github/buildGitHubURL';
import { IGHRepo } from '@/lib/api/github/types';

interface Params {
  id: number;
}
const getGHRepoById = async (params: Params) => {
  const req = await fetch(buildGitHubURL(`/repositories/${params.id}`), {
    headers: githubReqHeaders,
  });
  if (!req.ok) {
    throw new ResponseError(req.status, req.statusText);
  }
  return (await req.json()) as Promise<IGHRepo>;
};

export default getGHRepoById;
