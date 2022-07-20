import React from 'react';
import { Paper, Grid, Typography } from '@material-ui/core';

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <Grid item xs={12}>
      <Paper
        style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
        onClick={() => onVideoSelect(video)}
      >
        <img
          style={{ marginRight: '20px' }}
          alt="thumbnails"
          src={video.snippet.thumbnails.default.url}
        />
        <Typography varient="subtitle1">
          <b>{video.snippet.title}</b>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default VideoItem;
