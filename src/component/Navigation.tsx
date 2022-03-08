import React from 'react';
import styled from '@emotion/styled';
import { ReactComponent as Logo } from '../assets/logo.svg';

const Navigation = () => {
  return (
    <Wrapper>
      <Logo />
      <NavItems>
        <span className={'icy-justice-16'}>story</span>
        <span className={'icy-justice-16'}>collection</span>
        <span className={'icy-justice-16'}>roadmap</span>
        <span className={'icy-justice-16'}>team</span>
        <span className={'icy-justice-16'}>faq</span>
      </NavItems>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  max-width: 1109px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--gap-64);
  margin: var(--gap-48) auto 0 auto;
  z-index: 5;

  & > svg {
    cursor: pointer;
  }
`;

const NavItems = styled.div`
  display: flex;
  gap: var(--gap-24);
  cursor: pointer;
`;

export default Navigation;
