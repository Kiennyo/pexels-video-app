import { ErrorResponse, Videos } from 'pexels/dist/types';
import { createClient } from 'pexels';
import { useEffect, useState } from 'react';
import useDebounce from '@hooks/useDebounce';

const getApiKey = (): string => {
  const key = process.env.REACT_APP_PEXELS_API_KEY;
  if (!key) {
    throw new Error('Pexels API key not provided');
  }
  return key;
};

type UsePexelsApi = {
  videos: Videos | null;
  isLoading: boolean;
  error: ErrorResponse | null;
  setQuery: (query: string) => void;
};

const usePexelsApi = (): UsePexelsApi => {
  const client = createClient(getApiKey());
  const [videos, setVideos] = useState<Videos | null>(null);
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const [query, _setQuery] = useState<string>('');
  const [error, setError] = useState<ErrorResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const debouncedQuery = useDebounce({ value: query, delay: 1500 });

  useEffect(() => {
    const fetchVideos = async () => {
      setError(null);
      setIsLoading(true);
      try {
        const result = (await client.videos.search({ query })) as Videos;
        setVideos(result);
      } catch (error) {
        setError(error);
      }
    };
    setIsLoading(false);
    debouncedQuery && fetchVideos();
  }, [debouncedQuery]);

  const setQuery = (query: string) => {
    _setQuery(query);
  };

  return { videos, isLoading, error, setQuery };
};

export default usePexelsApi;
