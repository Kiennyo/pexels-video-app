import { Video } from 'pexels';

import { PEXEL_VIDEOS_MOCK } from '@/utils/__mocks__/Response';
import { findVideoLink } from '@/utils/PexelsUtil';

describe.each([
  [
    0,
    'https://player.vimeo.com/external/291648067.sd.mp4?s=7f9ee1f8ec1e5376027e4a6d1d05d5738b2fbb29&profile_id=165&oauth2_token_id=57447761',
  ],
  [
    1,
    'https://player.vimeo.com/external/336857229.sd.mp4?s=56e01230ffeee62bc90459a1e70b753d51fd066c&profile_id=164&oauth2_token_id=57447761',
  ],
  [
    2,
    'https://player.vimeo.com/external/357396260.sd.mp4?s=7900df824bf68682a805c54fa049cf53db5a49f4&profile_id=164&oauth2_token_id=57447761',
  ],
])('test findVideoLink returns correct video file link by default resolution', (videoMockIdx, expected) => {
  test(`mocked video[${videoMockIdx}] expected file link: ${expected}`, () => {
    expect(findVideoLink(PEXEL_VIDEOS_MOCK[videoMockIdx] as Video)).toBe(expected);
  });
});
