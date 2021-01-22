import React, { useEffect, useState } from 'react';

import Select from '@/components/select/Select';
import './VideoAppContainer.css';

type VideoAppContainerVideoCountSelectProps = {
  onChange: (videoCount: number) => void;
  value: number;
  videoCount: number;
};

const initialOptions = Array.from(Array(10).keys()).map((_, i) => ({ value: i + 1, label: `${i + 1}` }));

const VideoAppContainerVideoCountSelect = ({ onChange, value, videoCount }: VideoAppContainerVideoCountSelectProps) => {
  const [options, setOptions] = useState(initialOptions);

  useEffect(() => {
    const mapOptionsWithDisabled = (options: { label: string; value: number }[]) =>
      options.map((option) => ({ ...option, disabled: videoCount < option.value }));

    if (videoCount) {
      setOptions((options) => mapOptionsWithDisabled(options));
    }
  }, [videoCount]);

  return (
    <div className="Control-Element">
      <Select<number>
        className="Control-Element-Select"
        helperText="Number of videos to play"
        id="video-count"
        options={options}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default VideoAppContainerVideoCountSelect;
