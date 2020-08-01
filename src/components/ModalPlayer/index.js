import React from 'react';
import { Modal, ModalWrapper, Embed } from './styles';

function ModalPlayer({ showModal, onClick, videoId }) {
  console.log('videoId', videoId);
  return (
    <Modal onClick={onClick} showModal={showModal}>
      <ModalWrapper>
        <Embed
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </ModalWrapper>
    </Modal>
  );
}

export default ModalPlayer;
