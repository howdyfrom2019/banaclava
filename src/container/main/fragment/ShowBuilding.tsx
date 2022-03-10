import React from 'react';
import styled from '@emotion/styled';
import { ReactComponent as BlurEffect } from '../../../assets/header/blur_effect.svg';
import { ReactComponent as DarkBuilding } from '../../../assets/header/dark buildeing.svg';
import { ReactComponent as Logo } from '../../../assets/logo.svg';
import Background from '../../../assets/header/background.png';
import BrightBuilding from '../../../assets/header/bright building.png';

const ShowBuilding = () => {
  return (
    <Wrapper>
      <BuildingWrapper>
        <img src={Background} alt={'img1'} className={`background`} />
        <DarkBuilding className={`header-image dark-building`} />
        <BlurEffect className={`header-image blur-effect`} />
        <img src={BrightBuilding} alt={'img2'} className={'bright-building'} />
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
  min-height: 720px;
  position: relative;
  top: 0;
  left: 0;
`;

const BuildingWrapper = styled.div`
  & > svg.header-image {
    position: absolute;
    user-select: none;
    left: 50%;
    transform: translate(-50%);
  }

  & > img {
    position: absolute;
    user-select: none;
    left: 50%;
    transform: translate(-50%);
  }

  .background {
    width: 1183px;
    z-index: 0;
  }

  .bright-building {
    width: 242px;
    z-index: 1;
    top: calc(26% - 20px);
    left: calc(50% - 13px);
  }

  .blur-effect {
    z-index: 2;
    top: 10%;
  }

  .dark-building {
    width: 1183px;
    z-index: 3;
  }

  .logo {
    position: absolute;
    bottom: calc(-20% - var(--gap-16));
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
