import React, { RefObject } from 'react';
import styled from '@emotion/styled';
import { ReactComponent as Logo } from '../assets/logo.svg';

interface MoveProp {
  ScrollHeights: number[];
}

const Navigation: React.FC<MoveProp> = ({ ScrollHeights }) => {
  const NavigatorHandler = (index: number) => {
    console.log(ScrollHeights);
    if (ScrollHeights.length <= index) return;
    let scrollOffset = 0;
    ScrollHeights.forEach((item, i) => {
      if (i <= index) {
        scrollOffset += item;
      }
    });
    window.scrollTo({ top: scrollOffset, behavior: 'smooth' });
  };
  return (
    <Wrapper>
      <Logo
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
      <NavItems>
        <span className={'icy-justice-16'} onClick={() => NavigatorHandler(0)}>
          story
        </span>
        <span className={'icy-justice-16'} onClick={() => NavigatorHandler(1)}>
          collection
        </span>
        <span className={'icy-justice-16'} onClick={() => NavigatorHandler(2)}>
          roadmap
        </span>
        <span className={'icy-justice-16'} onClick={() => NavigatorHandler(3)}>
          team
        </span>
        <span className={'icy-justice-16'} onClick={() => NavigatorHandler(4)}>
          faq
        </span>
      </NavItems>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: sticky;
  left: 0;
  top: var(--gap-48);
  max-width: 100vw;
  width: var(--desktop-content);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--gap-64);
  margin: 0 auto;
  z-index: 10;

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
