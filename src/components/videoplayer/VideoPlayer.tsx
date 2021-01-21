import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { Video } from 'pexels';

import VideoPlayerOverlay from '@/components/videoplayer/VideoPlayerOverlay';
import VideoPlayerLoader from '@/components/videoplayer/VideoPlayerLoader';

import './VideoPlayer.css';

type VideoPlayerProps = {
  isLoading: boolean;
  duration: number;
  onProgress: () => void;
  currentVideo: Video | null;
};

const getPicture = (currentVideo: Video | null) => (currentVideo ? currentVideo.video_pictures[0].picture : undefined);

const getDuration = (currentVideo: Video | null, duration: number) => {
  if (currentVideo) {
    return (currentVideo.duration < duration ? currentVideo?.duration : duration) * 1000;
  }
  return undefined;
};

const getAuthor = (currentVideo: Video | null) => currentVideo?.user.name || '';

const VideoPlayer = ({ isLoading, duration, onProgress, currentVideo }: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [light, setLight] = useState<string | boolean | undefined>(getPicture(currentVideo));
  const [author, setAuthor] = useState<string>(getAuthor(currentVideo));
  const [progressIntervalInSeconds, setProgressIntervalInSeconds] = useState(getDuration(currentVideo, duration));

  useEffect(() => {
    setProgressIntervalInSeconds(getDuration(currentVideo, duration));
  }, [currentVideo, duration]);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (currentVideo) {
      setIsPlaying(false);
      setAuthor(getAuthor(currentVideo));
      setLight(getPicture(currentVideo));
      timeout = setTimeout(() => {
        setLight(false);
        setIsPlaying(true);
      }, 1500);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [currentVideo]);

  return (
    <div className="Player">
      <ReactPlayer
        controls={false}
        light={light}
        muted={true}
        playIcon={<></>}
        playing={isPlaying}
        progressInterval={progressIntervalInSeconds}
        url={currentVideo?.video_files[0].link}
        wrapper={isLoading ? VideoPlayerLoader : undefined}
        onProgress={onProgress}
      />
      {!isLoading && author && <VideoPlayerOverlay author={author} />}
    </div>
  );
};

export default VideoPlayer;
