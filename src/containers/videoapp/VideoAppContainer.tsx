import React, { useEffect, useState } from 'react';

import usePexelsApi from '@/hooks/usePexelsApi';
import VideoPlayer from '@/components/videoplayer/VideoPlayer';
import VideoAppContainerDurationSelect from '@/containers/videoapp/VideoAppContainerDurationSelect';
import VideoAppContainerVideoCountSelect from '@/containers/videoapp/VideoAppContainerVideoCountSelect';
import VideoAppContainerSearch from '@/containers/videoapp/VideoAppContainerSearch';
import './VideoAppContainer.css';
import { INITIAL_DURATION, INITIAL_VIDEO_COUNT } from '@/containers/videoapp/constants';

const VideoAppContainer = () => {
  const { videos, error, isLoading, setQuery } = usePexelsApi();
  const [duration, setDuration] = useState<number>(INITIAL_DURATION);
  const [videoCount, setVideoCount] = useState<number>(INITIAL_VIDEO_COUNT);

  useEffect(() => {
    console.log(videos);
  }, [videos]);

  useEffect(() => {
    console.log(error);
  }, [error]);

  const handleVideoDurationChange = (duration: number) => {
    setDuration(duration);
  };

  const handleVideoCountChange = (count: number) => {
    setVideoCount(count);
  };

  const handleVideoSearchChange = (searchInput: string) => {
    setQuery(searchInput.replaceAll(' ', ''));
  };

  const handleProgress = () => {
    console.log('progress');
  };

  return (
    <div className="Row">
      <div className="Controls">
        <VideoAppContainerSearch onChange={handleVideoSearchChange} />
        <VideoAppContainerDurationSelect initialDuration={INITIAL_DURATION} onChange={handleVideoDurationChange} />
        <VideoAppContainerVideoCountSelect initialVideoCount={INITIAL_VIDEO_COUNT} onChange={handleVideoCountChange} />
      </div>
      <VideoPlayer
        author="John Doe"
        duration={duration}
        isLoading={isLoading}
        pictureUrl="https://images.pexels.com/videos/1448735/pictures/preview-0.jpg"
        url="https://player.vimeo.com/external/291648067.hd.mp4?s=94998971682c6a3267e4cbd19d16a7b6c720f345&profile_id=175&oauth2_token_id=57447761"
        onProgress={handleProgress}
      />
    </div>
  );
};

export default VideoAppContainer;
