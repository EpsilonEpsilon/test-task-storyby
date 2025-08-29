export interface Options {
  params: Record<string, string | number>;
}
export type URLBuilderFN = (baseUrl: string, url: string, options?: Options) => string;

export const buildApiURL: URLBuilderFN = (baseUrl, endpoint, options) => {
  const normalizedBase = baseUrl.replace(/\/+$/, '');
  const normalizedEndpoint = endpoint.replace(/^\/+/, '');
  const url = new URL(`${normalizedBase}/${normalizedEndpoint}`);
  if (options?.params) {
    Object.entries(options.params).forEach(([key, value]) => {
      url.searchParams.append(key, value.toString());
    });
  }

  return url.toString();
};
