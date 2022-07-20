import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Grid } from '@material-ui/core';
import youtube from './api/youtube';
import { Searchbar, VideoList, VideoDetails } from './components';

function App() {
  const [video, setVideo] = React.useState([
    { videos: [], selectedVideo: null },
  ]);

  React.useEffect(() => {
    return () => handleSubmit('creta');
  }, []);

  async function handleSubmit(serachTerm) {
    const response = await youtube.get('search', { params: { q: serachTerm } });
    setVideo({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  }

  function selectVideo(video) {
    setVideo((prevVideo) => ({ ...prevVideo, selectedVideo: video }));
  }

  return (
    <Grid justifyContent="center" container spacing={1}>
      <Grid item xs={12}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Searchbar onFormSubmit={handleSubmit} />
          </Grid>
          <Grid item xs={8}>
            <VideoDetails video={video.selectedVideo} />
          </Grid>
          <Grid item xs={4}>
            {video.videos && (
              <VideoList videos={video.videos} onVideoSelect={selectVideo} />
            )}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
