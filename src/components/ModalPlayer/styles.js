import styled from 'styled-components';

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 200;
  display: ${({ showModal }) => (showModal ? 'block' : 'none')} 
`;

export const ModalWrapper = styled.div`
  position: absolute;
  top: 15vh;
  width: 100%;
  z-index: 100;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Embed = styled.iframe`
  border: 0;
  width: 50vw;
  height: 28.12vw;

  @media (max-width: 800px) {
    width: 100vw; 
    height: 56.25vw;
  }
`;
