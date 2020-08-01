import React from 'react';
import PropTypes from 'prop-types';
import VideoCardContainer from './styles';

function getYouTubeId(youtubeURL) {
  return youtubeURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    );
}

function VideoCard({
  videoTitle, videoURL, categoryColor, onVideoClick,
}) {
  const image = `https://img.youtube.com/vi/${getYouTubeId(videoURL)}/hqdefault.jpg`;
  return (
    <VideoCardContainer
      url={image}
      style={{ borderColor: categoryColor || 'red' }}
      title={videoTitle}
      onClick={(event) => onVideoClick(event, getYouTubeId(videoURL))}
    />
  );
}

VideoCard.propTypes = {
  videoTitle: PropTypes.string.isRequired,
  videoURL: PropTypes.string.isRequired,
  categoryColor: PropTypes.string.isRequired,
  onVideoClick: PropTypes.func.isRequired,
};

export default VideoCard;
