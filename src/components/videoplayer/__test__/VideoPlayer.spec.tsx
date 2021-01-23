import React from 'react';
import { render, screen } from '@testing-library/react';
import { Video } from 'pexels';

import VideoPlayer, { VideoPlayerProps } from '@/components/videoplayer/VideoPlayer';
import { PEXEL_VIDEOS_MOCK } from '@/utils/__mocks__/Response';

describe('VideoPlayer Test', () => {
  const onProgress = jest.fn();
  const mockedVideo = PEXEL_VIDEOS_MOCK[0] as Video;
  const renderVideoPlayer = (props: VideoPlayerProps) => {
    render(<VideoPlayer {...props} />);
  };

  it('Should display loader when loading', () => {
    // Arrange
    renderVideoPlayer({ currentVideo: null, duration: 10, isLoading: true, onProgress });

    // Assert
    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });

  it('Should display author when not loading', () => {
    // Arrange
    renderVideoPlayer({ currentVideo: mockedVideo, duration: 10, isLoading: false, onProgress });

    // Assert
    expect(screen.getByText('Ruvim Miksanskiy')).toBeInTheDocument();
  });

  it('Should display preview image before playing video', async () => {
    // Arrange
    renderVideoPlayer({ currentVideo: mockedVideo, duration: 10, isLoading: false, onProgress });

    // Assert
    const videoPlayerPreview = screen.getByTestId('video-player-test-id').firstElementChild;
    const previewImageUrl = window.getComputedStyle(videoPlayerPreview as Element).backgroundImage;
    expect(previewImageUrl).toContain(mockedVideo.video_pictures[0].picture);
  });
});
