import { useEffect, useState } from 'react';
import { ErrorResponse, Video, Videos } from 'pexels/dist/types';
import { createClient } from 'pexels';

import useDebounce from '@/hooks/useDebounce';

const getApiKey = (): string => {
  const key = process.env.REACT_APP_PEXELS_API_KEY;
  if (!key) {
    throw new Error('Pexels API key not provided');
  }
  return key;
};

type UsePexelsApi = {
  videos: Video[] | null;
  isLoading: boolean;
  error: ErrorResponse | null;
  setQuery: (query: string) => void;
};

const usePexelsApi = (): UsePexelsApi => {
  const client = createClient(getApiKey());
  const [videos, setVideos] = useState<Video[] | null>(null);
  const [query, _setQuery] = useState<string>('');
  const [error, setError] = useState<ErrorResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const debouncedQuery = useDebounce({ value: query });

  useEffect(() => {
    if (!debouncedQuery) {
      setVideos(null);
      return;
    }

    const fetchVideos = async () => {
      setError(null);
      setIsLoading(true);
      try {
        const result = (await client.videos.search({ query: debouncedQuery })) as Videos;
        setVideos(() => result.videos.slice(0, 5));
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    debouncedQuery && fetchVideos();
  }, [debouncedQuery]);

  const setQuery = (query: string) => {
    _setQuery(query);
  };

  return { videos, isLoading, error, setQuery };
};

export default usePexelsApi;
