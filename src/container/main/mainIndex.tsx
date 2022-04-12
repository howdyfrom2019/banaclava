import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import ThreeDCarousel from '../../component/ThreeDCarousel';
import Bunny from '../../assets/bunny.png';
import Cat from '../../assets/cat.png';
import Duck from '../../assets/duck.png';
import Mouse from '../../assets/mouse.png';
import Puppy from '../../assets/puppy.png';

const MainIndex = () => {
  const [picWidth, setPicWidth] = useState<number>(320);
  const NFTBunny = (
    <div>
      <img
        src={Bunny}
        alt={'example'}
        style={{ objectFit: 'contain', width: '100%' }}
      />
    </div>
  );

  const NFTCat = (
    <div>
      <img
        src={Cat}
        alt={'example'}
        style={{ objectFit: 'contain', width: '100%' }}
      />
    </div>
  );

  const NFTDuck = (
    <div>
      <img
        src={Duck}
        alt={'example'}
        style={{ objectFit: 'contain', width: '100%' }}
      />
    </div>
  );

  const NFTMouse = (
    <div>
      <img
        src={Mouse}
        alt={'example'}
        style={{ objectFit: 'contain', width: '100%' }}
      />
    </div>
  );

  const NFTPuppy = (
    <div>
      <img
        src={Puppy}
        alt={'example'}
        style={{ objectFit: 'contain', width: '100%' }}
      />
    </div>
  );

  const getBrowserWidth = () => {
    const picsWidth: number = (320 / 1440) * window.innerWidth;
    setPicWidth(picsWidth < 160 ? 160 : picsWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', getBrowserWidth);
    return () => {
      window.removeEventListener('resize', getBrowserWidth);
    };
  }, []);
  return (
    <Wrapper>
      <span className={`icy-justice-36`}>Coming Soon!</span>
      <ThreeDCarousel
        width={picWidth}
        elements={[NFTBunny, NFTCat, NFTDuck, NFTMouse, NFTPuppy]}
      />
      <span className={`sans-medium-16`}>
        우리는 모든 NFT 사기 행위를 바로잡고 생태계 부흥을 위해 헌신합니다.
      </span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;

  position: relative;
  justify-content: center;
  align-items: center;
  padding: 10%;

  .sans-medium-16 {
    width: 80%;
    text-align: center;
    position: absolute;
    top: calc(100% + 96px);
    left: 50%;
    transform: translate(-50%);
  }

  .icy-justice-36 {
    padding-bottom: 48px;
  }
`;

export default MainIndex;
