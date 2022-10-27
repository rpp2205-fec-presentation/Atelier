import React, { useState } from 'react';
import styled from 'styled-components';
import atelierlogo from '../../dist/images/atelierlogo.png';
import { BsToggleOn } from 'react-icons/bs';

const Header = () => {

  return (
    <HeaderCont>
      <LogoCont>
        <Logo src={atelierlogo} alt="logo"></Logo>
      </LogoCont>
    </HeaderCont>
  );
}

export default Header;

const HeaderCont = styled.div`
  height: 100px;
  margin-bottom: 25px;
  width: 100%;
  display: flex;
  background-color: #D9D8D8;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 1;
`;

export const LogoCont = styled.div`
  display: flex;
  width: 80%;
`;

const Logo = styled.img`
  max-width: 150px;
  margin: auto 25px;
`;

