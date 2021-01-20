import React, { useEffect, useState } from 'react';
import usePexelsApi from '@hooks/usePexelsApi';
import VideoPlayer from '@components/videoplayer/VideoPlayer';
import './VideoAppContainer.css';
import VideoAppContainerDurationSelect from '@containers/videoapp/VideoAppContainerDurationSelect';
import VideoAppContainerVideoCountSelect from '@containers/videoapp/VideoAppContainerVideoCountSelect';
import VideoAppContainerSearch from '@containers/videoapp/VideoAppContainerSearch';

const VideoAppContainer = () => {
  // eslint-disable-next-line no-unused-vars
  const { videos, error, isLoading, setQuery } = usePexelsApi();
  const [searchInput, setSearchInput] = useState<string>('');

  useEffect(() => {
    setQuery(searchInput);
  }, [searchInput]);

  useEffect(() => {
    console.log(videos);
  }, [videos]);

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
      <VideoPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" />
    </div>
  );
};

export default VideoAppContainer;
