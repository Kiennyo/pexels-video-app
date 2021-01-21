import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

import VideoPlayerOverlay from '@/components/videoplayer/VideoPlayerOverlay';
import VideoPlayerLoader from '@/components/videoplayer/VideoPlayerLoader';
import './VideoPlayer.css';

type VideoPlayerProps = {
  url: string;
  isLoading: boolean;
  author: string;
  pictureUrl: string;
  duration: number;
  onProgress: () => void;
};

const VideoPlayer = ({ url, isLoading, author, pictureUrl, duration, onProgress }: VideoPlayerProps) => {
  const [playing, setPlaying] = useState<boolean>(false);
  const [light, setLight] = useState<string | boolean>(pictureUrl);
  const progressIntervalInSeconds = duration * 1000;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setPlaying(true);
      setLight(false);
    }, 1500);

    return () => {
      clearTimeout(timeout);
    };
  }, [url]);

  return (
    <div className="Player">
      <ReactPlayer
        controls={false}
        light={light}
        muted={true}
        playIcon={<></>}
        playing={playing}
        progressInterval={progressIntervalInSeconds}
        url={url}
        wrapper={isLoading ? VideoPlayerLoader : undefined}
        onProgress={onProgress}
      />
      {!isLoading && <VideoPlayerOverlay author={author} />}
    </div>
  );
};

export default VideoPlayer;
