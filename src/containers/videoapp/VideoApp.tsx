import React from 'react';
import Header from '@components/header/Header';
import usePexels from '@hooks/usePexels';
import TextInput from '@components/textinput/TextInput';
import VideoPlayer from '@components/videoplayer/VideoPlayer';
import Select from '@components/select/Select';

const VideoApp = () => {
  // eslint-disable-next-line no-unused-vars
  const { getVideos } = usePexels();
  const handleSelectChange = (value: number) => {
    console.log(value);
  };
  return (
    <>
      <Header />
      <TextInput id="video-search-input" variant="outlined"  />
      <Select<number>
        onChange={handleSelectChange}
        options={[
          { value: 1, label: 'Ten' },
          { value: 2, label: 'Twenty' },
          { value: 3, label: 'Thirty' },
        ]}
        id="age2"
        helperText="Number of Videos to play"
      />
      <VideoPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" />
    </>
  );
};

export default VideoApp;
