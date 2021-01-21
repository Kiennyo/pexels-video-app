import React, { useEffect, useState } from 'react';

import usePexelsApi from '@/hooks/usePexelsApi';
import VideoPlayer from '@/components/videoplayer/VideoPlayer';
import VideoAppContainerDurationSelect from '@/containers/videoapp/VideoAppContainerDurationSelect';
import VideoAppContainerVideoCountSelect from '@/containers/videoapp/VideoAppContainerVideoCountSelect';
import VideoAppContainerSearch from '@/containers/videoapp/VideoAppContainerSearch';
import './VideoAppContainer.css';

const VideoAppContainer = () => {
  // eslint-disable-next-line no-unused-vars
  const { videos, error, isLoading, setQuery } = usePexelsApi();
  const [searchInput, setSearchInput] = useState<string>('');
  const [duration, setDuration] = useState<number | null>(null);

  useEffect(() => {
    setQuery(searchInput);
  }, [searchInput]);

  useEffect(() => {
    console.log(videos);
  }, [videos]);

  useEffect(() => {
    console.log(error);
  }, [error]);

  const handleVideoDurationChange = (duration: number) => {
    console.log(duration);
  };

  const handleVideoCountChange = (count: number) => {
    console.log(`video count ${count}`);
  };

  const handleVideoSearchChange = (searchInput: string) => {
    setSearchInput(searchInput);
  };

  return (
    <div className="Row">
      <div className="Controls">
        <VideoAppContainerSearch onChange={handleVideoSearchChange} />
        <VideoAppContainerDurationSelect onChange={handleVideoDurationChange} />
        <VideoAppContainerVideoCountSelect onChange={handleVideoCountChange} />
      </div>
      <VideoPlayer
        author="John Doe"
        isLoading={isLoading}
        pictureUrl="https://images.pexels.com/videos/1448735/pictures/preview-0.jpg"
        url="https://player.vimeo.com/external/291648067.hd.mp4?s=94998971682c6a3267e4cbd19d16a7b6c720f345&profile_id=175&oauth2_token_id=57447761"
      />
    </div>
  );
};

export default VideoAppContainer;
