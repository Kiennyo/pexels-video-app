import { createClient, Videos } from 'pexels';

import React, { ChangeEvent, useEffect, useState } from 'react';
import { ErrorResponse } from 'pexels/dist/types';

const App = () => {
  const [title, setTitle] = useState<string>('');
  const client = createClient('API_KEYU');

  const getVideosByTitle = (title: string) => {
    client.videos
      .search({ query: title })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getVideosByTitle(title);
  }, [title]);

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.target.value);
  };

  return (
    <>
      <div>Video App</div>
      <input type="text" placeholder="Video Title" onChange={handleTitleChange} />
    </>
  );
};

export default App;
