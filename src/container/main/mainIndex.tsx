import React from 'react';
import styled from '@emotion/styled';
import ShowBuilding from './fragment/ShowBuilding';
import Navigation from '../../component/Navigation';

const MainIndex = () => {
  //something changed.
  return (
    <Wrapper>
      <Navigation />
      <ShowBuilding />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
`;

export default MainIndex;
