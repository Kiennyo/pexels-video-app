import React from 'react';

import Typography from '@/components/typography/Typography';

type VideoPlayerOverlayProps = {
  author: string;
};

const VideoPlayerOverlay = ({ author }: VideoPlayerOverlayProps) => (
  <div className="VideoPlayerOverlay">
    <Typography variant="subtitle1">{author}</Typography>
  </div>
);

export default VideoPlayerOverlay;
