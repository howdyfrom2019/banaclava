import React from 'react';
import styled from '@emotion/styled';
import ShowBuilding from './fragment/ShowBuilding';
import Navigation from '../../component/Navigation';
import Article from './fragment/Article';
import Collection from './fragment/Collection';

const MainIndex = () => {
  return (
    <Wrapper>
      <Navigation />
      <ShowBuilding />
      <Article />
      <Collection />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
`;

export default MainIndex;
