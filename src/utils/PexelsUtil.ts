import { Video } from 'pexels';

const DEFAULT_HEIGHT = 360;
const TARGET_ASPECT_RATIO_OF_VIDEO = 16 / 9;

type Unpacked<T> = T extends (infer U)[] ? U : T; // https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html
type VideoFile = Unpacked<Video['video_files']>;

export const findVideoLink = (video: Video): string => {
  const videoHeightFilter = ({ height }: VideoFile) => height && height >= DEFAULT_HEIGHT;
  const videoAspectRatioFilter = ({ width, height }: VideoFile) =>
    width && height && TARGET_ASPECT_RATIO_OF_VIDEO === width / height;

  const orderByHeight = (a: VideoFile, b: VideoFile) => (a.height && b.height ? a.height - b.height : 0);

  const filteredVideosByHeight = video.video_files.filter(videoHeightFilter).sort(orderByHeight);
  const videoWithTargetAspectRatio = filteredVideosByHeight.find(videoAspectRatioFilter);

  if (videoWithTargetAspectRatio) {
    return videoWithTargetAspectRatio.link;
  }
  if (filteredVideosByHeight[0]) {
    return filteredVideosByHeight[0].link;
  }

  return video.video_files[0].link;
};
