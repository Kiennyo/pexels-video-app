import React from 'react';
import SearchIcon from '@material-ui/icons/Search';

import TextInput from '@/components/textinput/TextInput';

import './VideoAppContainer.css';

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
