import React from 'react';
import ReactPlayer from 'react-player';

type VideoPlayerProps = {
  url: string;
};

const VideoPlayer = ({ url }: VideoPlayerProps) => <ReactPlayer url={url} />;

export default VideoPlayer;
