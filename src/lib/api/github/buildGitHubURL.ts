import { buildApiURL, Options } from '@/lib/api';

const GIT_HUB_BASE_URL = process.env['NEXT_PUBLIC_GITHUB_API_URL']!;
export type URLBuilderFN = (endpoint: string, options?: Options) => string;
export const buildGitHubURL: URLBuilderFN = (endpoint, options) => {
  return buildApiURL(GIT_HUB_BASE_URL, endpoint, options);
};
