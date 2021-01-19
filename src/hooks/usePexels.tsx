import { ErrorResponse, Videos } from 'pexels/dist/types';
import { createClient } from 'pexels';

const getApiKey = (): string => {
  const key = process.env.REACT_APP_PEXELS_API_KEY;
  if (!key) {
    throw new Error('Pexels API key not provided');
  }
  return key;
};

const usePexels = (): { getVideos: (title: string) => Promise<ErrorResponse | Videos> } => {
  const client = createClient(getApiKey());
  const getVideos = (title: string): Promise<ErrorResponse | Videos> => client.videos.search({ query: title });

  return {
    getVideos,
  };
};

export default usePexels;
