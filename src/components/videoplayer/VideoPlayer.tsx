import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

import VideoPlayerOverlay from '@/components/videoplayer/VideoPlayerOverlay';
import './VideoPlayer.css';

type VideoPlayerProps = {
  url: string;
  isLoading: boolean;
  author: string;
  pictureUrl: string;
};

const VideoPlayer = ({ url, isLoading, author, pictureUrl }: VideoPlayerProps) => {
  const [playing, setPlaying] = useState<boolean>(false);
  const [light, setLight] = useState<string | boolean>(pictureUrl);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setPlaying(true);
      setLight(false);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [url]);

  return (
    <div className="Player">
      <ReactPlayer controls={false} light={light} muted={true} playIcon={<></>} playing={playing} url={url} />
      <VideoPlayerOverlay author={author} />
    </div>
  );
};

export default VideoPlayer;
