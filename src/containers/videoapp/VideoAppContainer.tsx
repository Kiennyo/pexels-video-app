import React, { useEffect, useRef, useState } from 'react';
import { Video } from 'pexels';

import { INITIAL_DURATION, INITIAL_VIDEO_COUNT } from '@/containers/videoapp/constants';
import usePexelsApi from '@/hooks/usePexelsApi';
import VideoPlayer from '@/components/videoplayer/VideoPlayer';
import VideoAppContainerDurationSelect from '@/containers/videoapp/VideoAppContainerDurationSelect';
import VideoAppContainerVideoCountSelect from '@/containers/videoapp/VideoAppContainerVideoCountSelect';
import VideoAppContainerSearch from '@/containers/videoapp/VideoAppContainerSearch';
import './VideoAppContainer.css';

const VideoAppContainer = () => {
  const { videos, error, isLoading, setQuery } = usePexelsApi();
  const [duration, setDuration] = useState<number>(INITIAL_DURATION);
  const [videoCount, setVideoCount] = useState<number>(INITIAL_VIDEO_COUNT);
  const [currentVideo, setCurrentVideo] = useState<Video | null>(null);
  const currentVideoIdx = useRef<number>(0);

  useEffect(() => {
    if (videos && videos?.length > 0) {
      currentVideoIdx.current = 0;
      setCurrentVideo(videos[0]);
      setVideoCount(videos.length + 1 > videoCount ? videos.length + 1 : videoCount);
    }
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
    const nextVideoIdx = currentVideoIdx.current + 1;

    const setNextVideo = () => {
      if (videos) {
        setCurrentVideo(videos[nextVideoIdx]);
        currentVideoIdx.current = nextVideoIdx;
      }
    };

    const setFirstVideo = () => {
      if (videos) {
        setCurrentVideo(videos[0]);
        currentVideoIdx.current = 0;
      }
    };

    if (videos && nextVideoIdx < videos.length) {
      setNextVideo();
    } else if (videos) {
      setFirstVideo();
    }
  };

  return (
    <div className="Row">
      <div className="Controls">
        <VideoAppContainerSearch onChange={handleVideoSearchChange} />
        <VideoAppContainerDurationSelect initialDuration={duration} onChange={handleVideoDurationChange} />
        <VideoAppContainerVideoCountSelect initialVideoCount={videoCount} onChange={handleVideoCountChange} />
      </div>
      <VideoPlayer
        currentVideo={currentVideo}
        duration={duration}
        isLoading={isLoading}
        onProgress={handleProgress}
      />
    </div>
  );
};

export default VideoAppContainer;
