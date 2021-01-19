import React from 'react';
import Header from '@components/header/Header';
import usePexels from '@hooks/usePexels';
import TextInput from '@components/textinput/TextInput';
import VideoPlayer from '@components/videoplayer/VideoPlayer';
import Select from '@components/select/Select';
import AccountCircle from '@material-ui/icons/AccountCircle';

const VideoApp = () => {
  // eslint-disable-next-line no-unused-vars
  const { getVideos } = usePexels();
  const handleSelectChange = (value: string) => {
    console.log(value);
  };
  return (
    <>
      <Header />
      <TextInput id="video-search-input" variant="outlined" label="Video Title" />
      <Select
        onChange={handleSelectChange}
        options={[
          { value: '10', label: 'Ten' },
          { value: '20', label: 'Twenty' },
          { value: '30', label: 'Thirty' },
        ]}
        id="age"
        label="Age"
      />
      <Select
        onChange={handleSelectChange}
        options={[
          { value: '10', label: 'Ten' },
          { value: '20', label: 'Twenty' },
          { value: '30', label: 'Thirty' },
        ]}
        id="age2"
        label="Age"
        helperText="Number of Videos to play"
      />
      <VideoPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
    </>
  );
};

export default VideoApp;
