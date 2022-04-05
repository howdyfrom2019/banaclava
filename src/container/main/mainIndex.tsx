import React, { useState } from 'react';
import styled from '@emotion/styled';
import ShowBuilding from './fragment/ShowBuilding';
import Navigation from '../../component/Navigation';
import Article from './fragment/Article';
import Collection from './fragment/Collection';
import InfiniteBand from '../../component/InfiniteBand';
import RoadMap from '../../component/RoadMap';

const MainIndex = () => {
  const [refHeights, setRefHeights] = useState<number[]>([]);

  const heightManager = (height: number, index: number) => {
    refHeights[index] = height;
    setRefHeights((prev) => [...prev]);
  };

  return (
    <Wrapper>
      <Navigation ScrollHeights={refHeights} />
      <ShowBuilding
        callbackHeight={(height) => {
          heightManager(height, 0);
        }}
      />
      <Article
        callbackHeight={(height) => {
          heightManager(height, 1);
        }}
      />
      <Collection />
      <InfiniteBand />
      <RoadMap />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  background: #000000;
`;

export default MainIndex;
