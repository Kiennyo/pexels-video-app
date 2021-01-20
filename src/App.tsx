import React from 'react';
import Header from '@components/header/Header';
import VideoAppContainer from '@containers/videoapp/VideoAppContainer';
import './App.css';

const App = () => (
  <>
    <div className="HeaderWrapper">
      <Header />
    </div>

    <VideoAppContainer />
  </>
);

export default App;
