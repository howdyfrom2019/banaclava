import React from 'react';
import styled from '@emotion/styled';

const ShowBuilding = () => {
  return (
    <Wrapper>
      <span className={'icy-justice-36'}>
        hello bonjour?! 왜 커밋 작성자 이상함!
      </span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  padding-top: var(--gap-64);
  text-align: center;
  background: var(--black);
`;

export default ShowBuilding;
