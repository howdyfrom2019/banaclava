import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import Bunny from '../../../assets/bunny.png';
import Cat from '../../../assets/cat.png';
import Duck from '../../../assets/duck.png';
import Mouse from '../../../assets/mouse.png';
import Puppy from '../../../assets/puppy.png';

import ThreeDCarousel from '../../../component/ThreeDCarousel';
import { ReferenceProp } from './ShowBuilding';

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
const Collection: React.FC<ReferenceProp> = ({ callbackHeight }) => {
  const WrapperRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!WrapperRef.current) return;
    callbackHeight(WrapperRef.current.clientHeight);
  }, []);

  return (
    <Wrapper ref={WrapperRef}>
      <span className={'icy-justice-48'}>COLLECTION</span>
      <ThreeDCarousel
        itemProps={{ width: 320 }}
        elements={[NFTBunny, NFTCat, NFTDuck, NFTMouse, NFTPuppy]}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-64);
  width: 100%;
  height: 606px;
  background: linear-gradient(180deg, #5a47a7 0%, #56439f 79.48%, #000000 100%);
  text-align: center;
  z-index: 5;
`;

export default Collection;
