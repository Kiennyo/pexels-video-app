import React from 'react';

import Select from '@/components/select/Select';
import './VideoAppContainer.css';

type VideoAppContainerDurationSelectProps = {
  onChange: (duration: number) => void;
};

const options = [
  { value: 10, label: '10 s' },
  { value: 20, label: '20 s' },
  { value: 30, label: '30 s' },
];

const VideoAppContainerDurationSelect = ({ onChange }: VideoAppContainerDurationSelectProps) => (
  <div className="Control-Element">
    <Select<number>
      className="Control-Element-Select"
      helperText="Each video plays for up to"
      id="number-of-videos"
      options={options}
      onChange={onChange}
    />
  </div>
);

export default VideoAppContainerDurationSelect;
