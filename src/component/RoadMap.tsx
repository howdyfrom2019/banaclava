import React, { useState } from 'react';
import styled from '@emotion/styled';

interface BarProps {
  isSelected?: boolean;
}

const RoadMap = () => {
  const [pageIndex, setPageIndex] = useState<number>(0);
  return (
    <Wrapper>
      <RoadMapContainer></RoadMapContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 86px;
  text-align: center;
  align-items: center;
`;

const RoadMapContainer = styled.div`
  width: var(--desktop-content);
  position: relative;
  display: flex;
  gap: var(--gap-64);
  margin: 0 auto;

  .img {
    width: 50%;
    object-fit: contain;
  }
`;

const BarContainer = styled.div`
  position: absolute;
  top: calc(100% + var(--gap-24));
  display: flex;
  justify-content: space-between;
`;

const Bar = styled.span<BarProps>`
  max-width: 214px;
  width: ${(props) => (props.isSelected ? '100%' : '100px')};
  height: ${(props) => (props.isSelected ? '14px' : '4px')};
  background: var(--white);
  border-radius: ${(props) => (props.isSelected ? '2px' : '1px')}; ;
`;

export default RoadMap;
