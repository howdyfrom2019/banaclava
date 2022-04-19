import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { ReferenceProp } from './ShowBuilding';
import TeamCard from '../../../component/TeamCard';

const Team: React.FC<ReferenceProp> = ({ callbackHeight }) => {
  const WrapperRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!WrapperRef.current) return;
    callbackHeight(WrapperRef.current.clientHeight);
  }, []);
  return (
    <Wrapper ref={WrapperRef}>
      <span className={'icy-justice-48'}>TEAM</span>
      <div className={'card-container'}>
        <TeamCard
          name={'Russel'}
          position={'Captain'}
          desc={'ICY JUSTICES의<br />제 1대 정책을 결정하고 운영한다.'}
        />
        <TeamCard
          name={'Edward'}
          position={'Commander'}
          desc={'제 1대 Captain의 정책을<br />보좌하고 단원들과 소통한다.'}
        />
        <TeamCard
          name={'Steve'}
          position={'Ig Dod'}
          desc={'모든 단원과<br />조직 구성 및 운영을 결심한다.'}
        />
        <TeamCard
          name={'Ben'}
          position={'USD(I)'}
          desc={'정보를 모두 수집하고<br />내부 단원 기밀유지를 책임진다.'}
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 86px;
  gap: var(--gap-64);
  width: 100%;
  height: 606px;
  text-align: center;
  background: var(--black);
  z-index: 4;

  .card-container {
    width: var(--desktop-content);
    display: flex;
    justify-content: space-between;
    gap: var(--gap-24);
    flex-wrap: wrap;
  }
`;
export default Team;
