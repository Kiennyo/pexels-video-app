import React from 'react';
import usePexelsApi from '@hooks/usePexelsApi';
import TextInput from '@components/textinput/TextInput';
import VideoPlayer from '@components/videoplayer/VideoPlayer';
import './VideoAppContainer.css';
import VideoAppContainerDurationSelect from '@containers/videoapp/VideoAppContainerDurationSelect';
import VideoAppContainerVideoCountSelect from '@containers/videoapp/VideoAppContainerVideoCountSelect';
import VideoAppContainerSearch from '@containers/videoapp/VideoAppContainerSearch';

const VideoAppContainer = () => {
  // eslint-disable-next-line no-unused-vars
  const { getVideos } = usePexelsApi();
  const handleSelectChange = (value: number) => {
    console.log(value);
  };

  const handleVideoDurationChange = (duration: number) => {
    console.log(duration);
  };

  const handleVideoCountChange = (count: number) => {
    console.log(`video count ${count}`);
  };

  const handleVideoSearchChange = (searchInput: string) => {
    console.log(`search input ${searchInput}`);
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
