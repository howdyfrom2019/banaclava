import React from 'react';
import styled from '@emotion/styled';
import { ReactComponent as BlurEffect } from '../../../assets/header/blur_effect.svg';
import { ReactComponent as DarkBuilding } from '../../../assets/header/dark buildeing.svg';
import Background from '../../../assets/header/background.png';
import BrightBuilding from '../../../assets/header/bright building.png';

const ShowBuilding = () => {
  return (
    <Wrapper>
      <BuildingWrapper>
        <img src={Background} alt={'img1'} className={'background'} />
        <DarkBuilding className={'dark-building'} />
        <BlurEffect className={'blur-effect'} />
        <img src={BrightBuilding} alt={'img2'} className={'bright-building'} />
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
  & > svg {
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
    z-index: 0;
  }

  .bright-building {
    z-index: 1;
    top: calc(10% + 10px);
    left: calc(50% - 17px);
  }

  .blur-effect {
    z-index: 2;
    top: 10%;
  }

  .dark-building {
    z-index: 3;
  }
`;

export default ShowBuilding;
