import React, { useState } from 'react';
import styled from '@emotion/styled';
import Recruit from '../assets/image/recruit.png';
import Wanted from '../assets/image/wanted.png';
import Dao from '../assets/image/dao.png';
import Profit from '../assets/image/profit.png';
import { ReactComponent as BlueRose } from '../assets/icon/icon_rose.svg';

interface BarProps {
  isSelected?: boolean;
}

const RoadMap = () => {
  const [pageIndex, setPageIndex] = useState<number>(0);

  const RoadMap1 = (
    <RoadMapDesc>
      <span className={'icy-justice-36'}>
        #1.
        <br />
        WHITE LIST RECRUIT
      </span>
      <span className={'icy-justice-24'}>
        조잡한 채팅은 필요없다.
        <br />
        NFT 생태계를 해치는 모든 Scammer를 잡는 것.
        <br />
        ICY JUSTICES 단원이 되기 위한 단 한가지 조건이다.
      </span>
      <BlueRose />
    </RoadMapDesc>
  );

  const RoadMap2 = (
    <RoadMapDesc>
      <span className={'icy-justice-36'}>
        #2.
        <br />
        JUSTICE CRUSH!
      </span>
      <span className={'icy-justice-24'}>
        전 세계 사기꾼을 박제한다.
        <br />
        Twitter, Discord.. 모든 곳에 사기꾼들 정보를 공유한다.
        <br />
        ICY JUSTICES의 채널은 점점 더 늘어날 계획이다!
      </span>
      <BlueRose />
    </RoadMapDesc>
  );

  const RoadMap3 = (
    <RoadMapDesc>
      <span className={'icy-justice-36'}>
        #3.
        <br />
        SUSTAINABLE DAO
      </span>
      <span className={'icy-justice-24'}>
        모든 의사결정은 투표로 진행한다.
        <br />
        심지어 CAPTAIN의 변경도,
        <br />
        새로운 CAPTAIN은 자신이 조직한 팀과 새로운 운영정책을 제시할 수 있다.
      </span>
      <BlueRose />
    </RoadMapDesc>
  );

  const RoadMap4 = (
    <RoadMapDesc>
      <span className={'icy-justice-36'}>
        #4.
        <br />
        INVEST AND DONATE
      </span>
      <span className={'icy-justice-24'}>
        우린 진짜만 취급한다.
        <br />
        NFT 생태계에 긍정적인 프로젝트를 발굴하고 투자한다.
        <br />
        모든 수익은 투명하게 공개되고 Holder들과 배분하고 기부한다.
      </span>
      <BlueRose />
    </RoadMapDesc>
  );
  return (
    <Wrapper>
      <RoadMapContainer>
        {pageIndex === 0 && <img src={Recruit} alt={'roadmap1'} />}
        {pageIndex === 1 && <img src={Wanted} alt={'roadmap2'} />}
        {pageIndex === 2 && <img src={Dao} alt={'roadmap3'} />}
        {pageIndex === 3 && <img src={Profit} alt={'roadmap4'} />}
        <BarContainer>
          <Bar
            isSelected={pageIndex === 0}
            onMouseEnter={() => {
              if (pageIndex !== 0) setPageIndex(0);
            }}
          />
          <Bar
            isSelected={pageIndex === 1}
            onMouseEnter={() => {
              if (pageIndex !== 1) setPageIndex(1);
            }}
          />
          <Bar
            isSelected={pageIndex === 2}
            onMouseEnter={() => {
              if (pageIndex !== 2) setPageIndex(2);
            }}
          />
          <Bar
            isSelected={pageIndex === 3}
            onMouseEnter={() => {
              if (pageIndex !== 3) setPageIndex(3);
            }}
          />
        </BarContainer>
        {pageIndex === 0 && RoadMap1}
        {pageIndex === 1 && RoadMap2}
        {pageIndex === 2 && RoadMap3}
        {pageIndex === 3 && RoadMap4}
      </RoadMapContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 86px;
  text-align: center;
  align-items: center;
  height: 580px;
  transition: all 600ms cubic-bezier(0.99, 0.08, 0.17, 1);
  background: var(--black);
  z-index: 5;
`;

const RoadMapContainer = styled.div`
  width: var(--desktop-content);
  position: relative;
  display: flex;
  gap: var(--gap-64);
  margin: 0 auto;

  & > img {
    width: 588px;
    height: 580px;
    object-fit: contain;
    background: var(--black);
    animation: show-opacity 1s linear;
    user-select: none;
  }
`;

const BarContainer = styled.div`
  width: 588px;
  height: 14px;
  position: absolute;
  top: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--black);
`;

const Bar = styled.span<BarProps>`
  max-width: 214px;
  width: ${(props) => (props.isSelected ? '100%' : '100px')};
  height: ${(props) => (props.isSelected ? '14px' : '4px')};
  background: var(--white);
  border-radius: ${(props) => (props.isSelected ? '2px' : '1px')};
  transition: all 600ms cubic-bezier(0.99, 0.08, 0.17, 1);
  opacity: ${(props) => (props.isSelected ? 1 : 0.6)};
  cursor: pointer;
`;

const RoadMapDesc = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: start;
  gap: var(--gap-64);
  max-width: 480px;
  animation: show-opacity 1s ease-in-out;

  & > svg {
    position: absolute;
    right: var(--gap-24);
    bottom: var(--gap-24);
    animation: glow-effect 4s ease-in-out infinite;
  }

  @keyframes show-opacity {
    0% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes glow-effect {
    0% {
      stroke-opacity: 0.2;
    }
    50% {
      stroke-opacity: 1;
    }
    100% {
      stroke-opacity: 0.2;
    }
  }
`;

export default RoadMap;
