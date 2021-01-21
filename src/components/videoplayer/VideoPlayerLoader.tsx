import React from 'react';

import './VideoPlayer.css';
import Loader from '@/components/loader/Loader';

// Default fixed values by react-player, used for wrapper which is a loader
// TODO figure out how to make it dynamic
const DEFAULT_WIDTH = 640;
const DEFAULT_HEIGHT = 360;

const VideoPlayerLoader = () => (
  <div
    className="VideoPlayerLoader"
    style={{
      width: `${DEFAULT_WIDTH}px`,
      height: `${DEFAULT_HEIGHT}px`,
    }}
  >
    <Loader />
  </div>
);

export default VideoPlayerLoader;
