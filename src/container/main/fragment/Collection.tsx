import React from 'react';
import styled from '@emotion/styled';
import ExamplePic from '../../../assets/blue_rose.png';
import ThreeDCarousel from '../../../component/ThreeDCarousel';

const Collection = () => {
  const Example = (
    <div>
      <img src={ExamplePic} alt={'example'} style={{ objectFit: 'contain' }} />
    </div>
  );
  return (
    <Wrapper>
      <ThreeDCarousel
        itemProps={{ width: 320 }}
        elements={[Example, Example, Example, Example, Example]}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-64);
  width: 100%;
  height: 963px;
  background: linear-gradient(180deg, #5a47a7 0%, #56439f 79.48%, #000000 100%);
`;

export default Collection;
