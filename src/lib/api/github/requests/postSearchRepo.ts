import { buildGitHubURL } from '@/lib/api/github/buildGitHubURL';
import { githubReqHeaders } from '@/lib/api/github/headers';
import ResponseError from '@/lib/errors/ResponseError';
import { IGHRepo } from '@/lib/api/github/types';

export interface SearchRepoParams {
  q: string;
  lang?: string;
  sort?: 'stars' | 'forks' | 'updated';
  order?: 'asc' | 'desc';
  per_page: number;
  page: number;
}
type IResponseData = IResponseDataComplete;

interface IResponseDataComplete {
  incomplete_results: false;
  total_count: number;
  items: IGHRepo[];
}

async function postSearchRepo(params: SearchRepoParams, signal: AbortSignal) {
  const req = await fetch(buildGitHubURL('/search/repositories', { params: { ...params } }), {
    headers: githubReqHeaders,
    signal: signal,
  });
  console.log(req, 'RESS??');
  const data = await req.json();

  if (!req.ok) {
    throw new ResponseError(req.status, req.statusText || data.message);
  }
  return data as Promise<IResponseData>;
}

export default postSearchRepo;
