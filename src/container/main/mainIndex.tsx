import React from 'react';
import styled from '@emotion/styled';
import ThreeDCarousel from '../../component/ThreeDCarousel';
import Bunny from '../../assets/bunny.png';
import Cat from '../../assets/cat.png';
import Duck from '../../assets/duck.png';
import Mouse from '../../assets/mouse.png';
import Puppy from '../../assets/puppy.png';

const MainIndex = () => {
  const NFTBunny = (
    <div>
      <img
        src={Bunny}
        alt={'example'}
        style={{ objectFit: 'contain', width: 320 }}
      />
    </div>
  );

  const NFTCat = (
    <div>
      <img
        src={Cat}
        alt={'example'}
        style={{ objectFit: 'contain', width: 320 }}
      />
    </div>
  );

  const NFTDuck = (
    <div>
      <img
        src={Duck}
        alt={'example'}
        style={{ objectFit: 'contain', width: 320 }}
      />
    </div>
  );

  const NFTMouse = (
    <div>
      <img
        src={Mouse}
        alt={'example'}
        style={{ objectFit: 'contain', width: 320 }}
      />
    </div>
  );

  const NFTPuppy = (
    <div>
      <img
        src={Puppy}
        alt={'example'}
        style={{ objectFit: 'contain', width: 320 }}
      />
    </div>
  );
  return (
    <Wrapper>
      <span className={`icy-justice-36`}>Coming Soon!</span>
      <ThreeDCarousel
        itemProps={{ width: 320 }}
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
    position: absolute;
    top: calc(150% + 48px);
    left: 50%;
    transform: translate(-50%);
  }

  .icy-justice-36 {
    padding-bottom: 48px;
  }
`;

export default MainIndex;
