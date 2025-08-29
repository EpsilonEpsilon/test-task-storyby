'use client';
import { RefObject, useRef, useState } from 'react';
import ResponseError from '@/lib/errors/ResponseError';

type CreateHookType<R, T> = [
  (data: T) => Promise<R | undefined>,
  { loading: boolean; data: R | undefined; reqCount: RefObject<number> },
];
interface Options {
  onError: (e: ResponseError) => void;
}
function useCreateRequest<R, T = {}>(
  request: (data: T) => Promise<R>,
  options?: Options,
): CreateHookType<R, T> {
  const requestsCount = useRef<number>(0);
  const [loading, setLoading] = useState(false);

  const [response, setResponse] = useState<R | undefined>(undefined);
  const handleRequest = async (data: T) => {
    try {
      setLoading(true);
      requestsCount.current += 1;
      const response = await request(data);
      setResponse(response);

      return response;
    } catch (e) {
      if (e instanceof ResponseError) {
        options?.onError(e);
      }
    } finally {
      setLoading(false);
    }
  };

  return [handleRequest, { loading, data: response!, reqCount: requestsCount }];
}

export default useCreateRequest;
