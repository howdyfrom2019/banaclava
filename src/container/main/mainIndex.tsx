import React, { useState } from 'react';
import styled from '@emotion/styled';
import ShowBuilding from './fragment/ShowBuilding';
import Navigation from '../../component/Navigation';
import Article from './fragment/Article';
import Collection from './fragment/Collection';
import InfiniteBand from '../../component/InfiniteBand';
import RoadMap from '../../component/RoadMap';
import Team from './fragment/Team';

const MainIndex = () => {
  const [refHeights, setRefHeights] = useState<number[]>([]);

  const heightManager = (height: number, index: number) => {
    console.log(height, index);
    console.log(refHeights);
    refHeights[index] = height;
    index === 5 && setRefHeights((prev) => [...prev]);
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
      <Collection
        callbackHeight={(height) => {
          heightManager(height, 2);
        }}
      />
      <InfiniteBand
        callbackHeight={(height) => {
          heightManager(height, 3);
        }}
      />
      <RoadMap
        callbackHeight={(height) => {
          heightManager(height, 4);
        }}
      />
      <Team
        callbackHeight={(height) => {
          heightManager(height, 5);
        }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  background: #000000;

  //@media screen and (max-width: 768px) {
  //  overflow-x: hidden;
  //}
`;

export default MainIndex;
