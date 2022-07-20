import React from 'react';
import VideoItem from './VideoItem';
import { Grid } from '@material-ui/core';

const VideoList = ({ videos, onVideoSelect }) => {
  console.log(videos);
  const listOfVideos = videos.map((video) => (
    <VideoItem
      key={video.id.videoId}
      video={video}
      onVideoSelect={onVideoSelect}
    />
  ));
  return (
    <Grid container spacing={10}>
      {listOfVideos}
    </Grid>
  );
};

export default VideoList;
