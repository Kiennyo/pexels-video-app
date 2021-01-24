import React from 'react';
import { render, screen } from '@testing-library/react';

import usePexelsApi, { UsePexelsApi } from '@/hooks/usePexelsApi';
import VideoAppContainer from '@/containers/videoapp/VideoAppContainer';
import { PEXEL_VIDEOS_MOCK } from '@/utils/__mocks__/Response';

jest.mock('@/hooks/usePexelsApi');
describe('VideoAppContainer Test', () => {
  const renderVideoAppContainer = () => {
    render(<VideoAppContainer />);
  };

  const usePexelsApiMock = (videoCount?: number, isLoading?: boolean) => {
    (usePexelsApi as jest.Mock).mockReturnValue({
      videos: PEXEL_VIDEOS_MOCK.slice(0, videoCount).map((video) => ({ ...video, duration: 1 })),
      isLoading: isLoading || false,
      setQuery: jest.fn(),
      error: null,
    } as UsePexelsApi);
  };

  it('Video count should be same when video count is not lesser than selected', () => {
    // Arrange
    usePexelsApiMock();
    renderVideoAppContainer();

    // Assert
    expect(screen.getByTestId('video-count-test-id').textContent?.replace(/\u200B/g, '')).toBe('10');
  });

  it("Video count should be same like response video count when it's lesser than currently selected", () => {
    // Arrange
    usePexelsApiMock(5);
    renderVideoAppContainer();

    // Assert
    expect(screen.getByTestId('video-count-test-id').textContent?.replace(/\u200B/g, '')).toBe('5');
  });

  it('Should render loader when data is being loaded', () => {
    // Arrange
    usePexelsApiMock(0, true);
    renderVideoAppContainer();

    // Assert
    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });
});
