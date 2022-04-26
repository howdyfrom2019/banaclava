import React, { RefObject, useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { ReactComponent as Twitter } from '../assets/icon/icon_twitter.svg';
import { ReactComponent as Discord } from '../assets/icon/icon_discord.svg';
import { ReactComponent as Github } from '../assets/icon/icon_github.svg';
import { ReactComponent as Instagram } from '../assets/icon/icon_instagram.svg';

interface MoveProp {
  ScrollHeights: number[];
}

const Navigation: React.FC<MoveProp> = ({ ScrollHeights }) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const NavigatorHandler = (index: number) => {
    if (ScrollHeights.length <= index) return;
    let scrollOffset = 0;
    ScrollHeights.forEach((item, i) => {
      if (i <= index) {
        scrollOffset += item;
      }
    });
    window.scrollTo({ top: scrollOffset, behavior: 'smooth' });
  };

  useEffect(() => {
    if (showModal) document.body.style.overflow = 'hidden';
    if (!showModal) document.body.style.overflow = 'unset';
  }, [showModal]);

  return (
    <Wrapper>
      <div className={'contents-wrapper'}>
        <Logo
          className={'logo'}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
        <NavItems>
          <span
            className={'icy-justice-16'}
            onClick={() => NavigatorHandler(0)}
          >
            story
          </span>
          <span
            className={'icy-justice-16'}
            onClick={() => NavigatorHandler(1)}
          >
            collection
          </span>
          <span
            className={'icy-justice-16'}
            onClick={() => NavigatorHandler(2)}
          >
            roadmap
          </span>
          <span
            className={'icy-justice-16'}
            onClick={() => NavigatorHandler(4)}
          >
            team
          </span>
          <span
            className={'icy-justice-16'}
            onClick={() => NavigatorHandler(5)}
          >
            faq
          </span>
        </NavItems>
        <MobileNavItems
          className={'burger'}
          onClick={() => setShowModal((prev) => !prev)}
        >
          <span className={`line ${showModal && `x`}`} />
          <span className={`line ${showModal && `y`}`} />
          <span className={`line ${showModal && `z`}`} />
        </MobileNavItems>
        <MobileNavigation isVisible={showModal}>
          <div className={'left'}>
            <div>
              <Twitter />
              <Discord />
              <Github />
              <Instagram />
            </div>
          </div>
          <div className={'menu'}>
            <MobileText>Story</MobileText>
            <MobileText>Collection</MobileText>
            <MobileText>Roadmap</MobileText>
            <MobileText>Team</MobileText>
          </div>
        </MobileNavigation>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: sticky;
  left: 0;
  top: 0;
  z-index: 10;
  background: rgba(0, 0, 0, 0.8);

  & > div.contents-wrapper {
    width: var(--desktop-content);
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: var(--gap-64);
    padding: 30px 0;
    margin: 0 auto;

    @media screen and (max-width: 1196px) {
      width: auto;
      margin: 0 40px;
    }

    @media screen and (max-width: 768px) {
      margin: 0 20px;
    }
  }

  .logo {
    cursor: pointer;
    z-index: 1001;
  }

  @media screen and (max-width: 768px) {
    .logo {
      fill: var(--white) !important;
    }
  }
`;

const NavItems = styled.div`
  display: flex;
  gap: var(--gap-24);
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const MobileNavItems = styled.div`
  width: 56px;
  display: none;
  flex-direction: column;
  gap: var(--gap-12);
  align-items: center;
  cursor: pointer;
  z-index: 1001;

  .line {
    width: 100%;
    height: 4px;
    background: var(--white);
    border-radius: 2px;
    transition: all 200ms ease-out;
  }

  .x {
    width: 58px;
    transform: rotate(45deg);
  }

  .z {
    width: 58px;
    margin-top: -14px;
    transform: rotate(135deg);
  }

  .y {
    display: none;
  }

  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

const MobileNavigation = styled.div<{ isVisible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: none;
  flex-direction: column;
  z-index: 1000;
  background: var(--light-black);

  @media screen and (max-width: 768px) {
    display: ${(props) => (props.isVisible ? 'flex' : 'none')};
  }

  .menu {
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: var(--gap-24);
    align-self: center;
    justify-content: center;
  }

  .left {
    position: absolute;
    top: 0;
    left: 0;
    width: 16.67%;
    height: 100vh;
    z-index: 1001;
    background: rgba(0, 0, 0, 0.3);

    & > div {
      position: absolute;
      left: 50%;
      bottom: 24px;
      transform: translate(-50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;

      & > svg {
        cursor: pointer;
      }
    }
  }
`;

const MobileText = styled.span`
  font-family: 'Icy Justices', serif;
  color: var(--white);
  font-size: 24px;
  transition: all 400ms ease-out;
  cursor: pointer;

  :hover {
    color: var(--primary);
  }
`;

export default Navigation;
