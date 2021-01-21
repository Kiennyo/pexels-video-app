import React from 'react';

import Select from '@/components/select/Select';
import './VideoAppContainer.css';

type VideoAppContainerVideoCountSelectProps = {
  onChange: (videoCount: number) => void;
  initialVideoCount: number;
};

const options = Array.from(Array(10).keys()).map((_, i) => ({ value: i + 1, label: `${i + 1}` }));

const VideoAppContainerVideoCountSelect = ({ onChange, initialVideoCount }: VideoAppContainerVideoCountSelectProps) => (
  <div className="Control-Element">
    <Select<number>
      className="Control-Element-Select"
      helperText="Number of videos to play"
      id="video-count"
      initialValue={initialVideoCount}
      options={options}
      onChange={onChange}
    />
  </div>
);

export default VideoAppContainerVideoCountSelect;
