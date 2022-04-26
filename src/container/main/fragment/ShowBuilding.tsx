import React, { RefObject, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { ReactComponent as BlurEffect } from '../../../assets/header/blur_effect.svg';
import { ReactComponent as DarkBuilding } from '../../../assets/header/dark buildeing.svg';
import { ReactComponent as Ground } from '../../../assets/header/ground.svg';
import { ReactComponent as Logo } from '../../../assets/logo.svg';
import Background from '../../../assets/header/background.png';
import BrightBuilding from '../../../assets/header/bright building.png';

export interface ReferenceProp {
  callbackHeight: (height: number) => void;
}

const ShowBuilding: React.FC<ReferenceProp> = ({ callbackHeight }) => {
  const darkBuildingRef = useRef<SVGSVGElement>(null);
  const brightBuildingRef = useRef<HTMLImageElement>(null);
  const starsRef = useRef<HTMLImageElement>(null);
  const groundRef = useRef<SVGSVGElement>(null);

  const WrapperRef = useRef<HTMLDivElement>(null);

  const scrollHandler = () => {
    if (
      !darkBuildingRef.current ||
      !brightBuildingRef.current ||
      !starsRef.current ||
      !groundRef.current
    )
      return;
    const scrollTop: number = document.documentElement.scrollTop;
    groundRef.current.style.transform = `translate3d(-50%, ${
      -scrollTop * 0.3
    }px, 0px)`;
    brightBuildingRef.current.style.filter = `blur(${scrollTop * 0.01}px)`;
    darkBuildingRef.current.style.transform = `translate3d(-50%, ${
      -scrollTop * 0.3
    }px, 0px)`;
    darkBuildingRef.current.style.filter = `blur(${scrollTop * 0.008}px)`;
    brightBuildingRef.current.style.transform = `translate3d(-50%, ${
      -scrollTop * 0.12
    }px, 0px)`;
    starsRef.current.style.transform = `translate3d(-50%, ${
      -scrollTop * 0.01
    }px, 0px)`;
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  useEffect(() => {
    if (!WrapperRef.current) return;
    callbackHeight(WrapperRef.current.clientHeight);
  }, []);

  return (
    <Wrapper ref={WrapperRef}>
      <BuildingWrapper>
        <img
          src={Background}
          alt={'img1'}
          className={`background`}
          ref={starsRef}
        />
        <DarkBuilding className={`dark-building`} ref={darkBuildingRef} />
        <BlurEffect className={`header-image blur-effect`} />
        <img
          src={BrightBuilding}
          alt={'img2'}
          className={`bright-building`}
          ref={brightBuildingRef}
        />
        <Ground className={`ground`} ref={groundRef} />
        <div className={'logo'}>
          <Logo />
          <span
            className={'sans-regular-12'}
            style={{ color: 'var(--primary)', textAlign: 'center' }}
          >
            ICY JUSTICES는 2D NFT PFP입니다.
            <br />
            우리는 모든 NFT 사기 행위를 바로잡고 생태계 부흥을 위해 헌신합니다.
          </span>
        </div>
      </BuildingWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: var(--desktop-content);
  position: relative;
  margin: -66px auto;

  @media screen and (max-width: 1196px) {
    width: 100%;
  }
`;

const BuildingWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 720px;
  display: flex;
  justify-content: center;

  & > svg.header-image {
    position: fixed;
    user-select: none;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    margin: 0 auto;
  }

  & > img {
    position: fixed;
    user-select: none;
  }

  .background {
    max-width: 1436px;
    max-height: 1138px;
    height: 100vh;
    z-index: 0;
    left: 50%;
    transform: translate(-50%);
  }

  .bright-building {
    max-width: 500px;
    max-height: 1138px;
    height: 100vh;
    z-index: 1;
    top: 0;
    left: 50%;
    transform: translate(-50%);
  }

  .ground {
    width: 100vw;
    position: fixed;
    top: 80%;
    z-index: 2;
    left: 50%;
    transform: translate(-50%);
  }

  .blur-effect.header-image {
    height: 100vw;
    z-index: 2;
    top: 10%;

    @media screen and (max-width: 904px) {
      width: 100%;
      top: calc(20%);
    }
  }

  .dark-building {
    max-width: 100%;
    min-width: 904px;
    height: 100vh;
    position: fixed;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 3;
  }

  .logo {
    position: absolute;
    top: calc(100% + var(--gap-16));
    left: 50%;
    transform: translateX(-50%);
    z-index: 4;

    display: flex;
    flex-direction: column;
    gap: var(--gap-24);
    align-items: center;
  }
`;

export default ShowBuilding;
