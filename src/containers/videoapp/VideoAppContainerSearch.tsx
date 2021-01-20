import TextInput from '@components/textinput/TextInput';
import React from 'react';
import './VideoAppContainer.css';
import SearchIcon from '@material-ui/icons/Search';

type VideoAppContainerSearchProps = {
  onChange: (value: string) => void;
};

const VideoAppContainerSearch = ({ onChange }: VideoAppContainerSearchProps) => (
  <div className="Control-Element">
    <TextInput
      className="Control-Element-Search"
      icon={<SearchIcon style={{ color: 'silver' }} />}
      id="video-search-input"
      placeHolder="Video Title"
      variant="outlined"
      onChange={onChange}
    />
  </div>
);

export default VideoAppContainerSearch;
