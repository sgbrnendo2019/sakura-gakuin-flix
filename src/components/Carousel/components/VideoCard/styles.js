import styled from 'styled-components';

export const VideoCardContainer = styled.div`
  border: 2px solid;
  border-radius: 4px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 197px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;

  &:not(:first-child) {
    margin-left: 20px;
  }
`;

export const VideoCardOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .8;
  }
`;

export const PlayButton = styled.img`
  height: 45%;
`;
