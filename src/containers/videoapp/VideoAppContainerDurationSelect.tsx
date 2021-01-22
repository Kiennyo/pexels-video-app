import React from 'react';

import Select from '@/components/select/Select';
import './VideoAppContainer.css';

type VideoAppContainerDurationSelectProps = {
  onChange: (duration: number) => void;
  initialDuration: number;
};

const options = [
  { value: 10, label: '10 s' },
  { value: 20, label: '20 s' },
  { value: 30, label: '30 s' },
];

const VideoAppContainerDurationSelect = ({ onChange, initialDuration }: VideoAppContainerDurationSelectProps) => (
  <div className="Control-Element">
    <Select<number>
      className="Control-Element-Select"
      helperText="Each video plays for up to"
      id="number-of-videos"
      value={initialDuration}
      options={options}
      onChange={onChange}
    />
  </div>
);

export default VideoAppContainerDurationSelect;
