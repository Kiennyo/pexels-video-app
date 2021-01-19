import React, { ChangeEvent, useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import usePexels from './hooks/usePexels';

const App = () => {
  const { getVideos } = usePexels();
  const [title, setTitle] = useState<string>('forest');
  const [video, setVideo] = useState<string>();
  useEffect(() => {
    if (!title) {
      return;
    }
    // TODO improve types
    getVideos(title).then((result) => {
      // @ts-ignore
      setVideo(result?.videos[0]);
    });
  }, [title, getVideos]);

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.target.value);
  };

  return (
    <>
      <div>Video App</div>
      <input type="text" placeholder="Video Title" onChange={handleTitleChange} />
      <ReactPlayer url={video} />
    </>
  );
};

export default App;
