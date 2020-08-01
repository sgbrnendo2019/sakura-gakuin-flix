import React from 'react';
import { Link } from 'react-router-dom';
import { MenuNav, Logo } from './styles';
import { ButtonLinkNovoVideo } from '../ButtonLink/styles';
import ImgLogo from '../../assets/img/Logo.jpg';
import './Menu.css';

function Menu() {
  return (
    <MenuNav>
      <Link to="/">
        <Logo src={ImgLogo} alt="Sakura Gakuin Flix Logo" />
      </Link>
      <ButtonLinkNovoVideo as={Link} to="/cadastro/video">Novo vídeo</ButtonLinkNovoVideo>
    </MenuNav>
  );
}

export default Menu;
