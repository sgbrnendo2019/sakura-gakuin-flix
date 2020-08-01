import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';
import Img404 from '../../assets/img/HyJP6HP.gif';

const NotFoundContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
`;

export default () => (
  <PageDefault>
    <NotFoundContainer>
      <h1>Página não encontrada</h1>
      <div>
        <img src={Img404} alt="Desculpe, página não encontrada" />
      </div>
      <Link to="/" style={{ paddingTop: '40px' }}>Ir para home</Link>
    </NotFoundContainer>
  </PageDefault>
);
