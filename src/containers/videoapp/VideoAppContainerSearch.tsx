import TextInput from '@components/textinput/TextInput';
import React from 'react';
import './VideoAppContainer.css';

type VideoAppContainerSearchProps = {
  onChange: (value: string) => void;
};

const VideoAppContainerSearch = ({ onChange }: VideoAppContainerSearchProps) => (
  <div className="Control-Element">
    <TextInput
      className="Control-Element-Search"
      id="video-search-input"
      label="Video Title"
      variant="outlined"
      onChange={onChange}
    />
  </div>
);

export default VideoAppContainerSearch;
