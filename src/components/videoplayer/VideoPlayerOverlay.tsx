import React from 'react';
import { Typography } from '@material-ui/core';

type VideoPlayerOverlayProps = {
  author: string;
};

const VideoPlayerOverlay = ({ author }: VideoPlayerOverlayProps) => (
  <div className="VideoPlayerOverlay">
    <Typography variant="subtitle1">{author}</Typography>
  </div>
);

export default VideoPlayerOverlay;
