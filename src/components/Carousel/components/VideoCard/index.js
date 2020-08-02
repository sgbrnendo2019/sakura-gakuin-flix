import React from 'react';
import PropTypes from 'prop-types';
import { VideoCardContainer, VideoCardOverlay, PlayButton } from './styles';
import playButtonIcon from '../../../../assets/img/play-button.svg';

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
      className="img-video"
      url={image}
      style={{ borderColor: categoryColor || 'red' }}
      title={videoTitle}
      onClick={(event) => onVideoClick(event, getYouTubeId(videoURL))}
    >

      <VideoCardOverlay>
        <PlayButton src={playButtonIcon} />
      </VideoCardOverlay>

    </VideoCardContainer>
  );
}

VideoCard.propTypes = {
  videoTitle: PropTypes.string.isRequired,
  videoURL: PropTypes.string.isRequired,
  categoryColor: PropTypes.string.isRequired,
  onVideoClick: PropTypes.func.isRequired,
};

export default VideoCard;
