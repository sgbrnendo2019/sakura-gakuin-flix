import React from 'react';
import { LoadingWrapper, LoadingMessage } from './styles';
import MomoeWait from '../../assets/img/T0B2Hiu.gif';

function Loading() {
  return (
    <LoadingWrapper>
      <LoadingMessage>Loading...</LoadingMessage>
      <img src={MomoeWait} alt="Loading..." />
    </LoadingWrapper>
  );
}

export default Loading;
