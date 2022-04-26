import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import NetflixDivider from '../../../assets/divider/netflix-backgorund.png';
import BrowserDndTab from '../../../component/BrowserDndTab';
import NewsBrowser from '../../../component/NewsBrowser';
import { ReferenceProp } from './ShowBuilding';

interface EpisodeType {
  isSelected: boolean;
}

const Article: React.FC<ReferenceProp> = ({ callbackHeight }) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const selectedIndexList = useRef<number[]>([0]);
  const [render, setRender] = useState<boolean>(false);

  const ref = useRef<HTMLDivElement>(null);
  const reRender = () => setRender((prev) => !prev);
  //TODO: Extract IndexList from NetflixEpisode Container and join with newsBrowser. adjust DND effect.

  const changeIndex = (index: number) => {
    setSelectedIndex(index);
    if (!selectedIndexList.current.includes(index)) {
      selectedIndexList.current.push(index);
      reRender();
    }
  };

  useEffect(() => {
    if (!ref.current) return;
    callbackHeight(ref.current.clientHeight);
  }, []);

  return (
    <Wrapper ref={ref}>
      <img src={NetflixDivider} alt={'divider'} />
      <div className={'background'} />
      <NetflixContainer>
        <NetflixEpisode className={'left'}>
          <span className={'icy-justice-16'}>story</span>
          <EpisodeItem
            isSelected={selectedIndex === 0}
            onClick={(e) => {
              e.stopPropagation();
              changeIndex(0);
            }}
          >
            <span className={'icy-justice-16'}>1</span>
            <span className={'sans-medium-16'}>
              NFT 유니버스에 일어난 지상 최악의 사건
            </span>
          </EpisodeItem>
          <EpisodeItem
            isSelected={selectedIndex === 1}
            onClick={(e) => {
              e.stopPropagation();
              changeIndex(1);
            }}
          >
            <span className={'icy-justice-16'}>2</span>
            <span className={'sans-medium-16'}>
              밝혀진 진실... 이 사건의 주모자는 누구?
            </span>
          </EpisodeItem>
          <EpisodeItem
            isSelected={selectedIndex === 2}
            onClick={(e) => {
              e.stopPropagation();
              changeIndex(2);
            }}
          >
            <span className={'icy-justice-16'}>3</span>
            <span className={'sans-medium-16'}>
              정체를 드러낸 의적단, ICY JUSTICES!
            </span>
          </EpisodeItem>
          <EpisodeItem
            isSelected={selectedIndex === 3}
            onClick={(e) => {
              e.stopPropagation();
              changeIndex(3);
            }}
          >
            <span className={'icy-justice-16'}>4</span>
            <span className={'sans-medium-16'}>
              신규단원 공개모집하는 ICY JUSTICES!
            </span>
          </EpisodeItem>
        </NetflixEpisode>
        <NetflixEpisode
          style={{
            border: '1px solid var(--white)',
            padding: 0,
            width: '100%',
          }}
          className={'right'}
        >
          <NewsBrowserWrapper>
            <BrowserDndTab
              indexArray={selectedIndexList.current}
              defaultIndex={selectedIndex}
              callback={(index, indexList) => {
                setSelectedIndex(index);
                selectedIndexList.current = indexList;
                reRender();
              }}
            />
            <NewsBrowser index={selectedIndex} />
          </NewsBrowserWrapper>
        </NetflixEpisode>
      </NetflixContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 900px;
  min-height: 964px;
  display: flex;
  flex-direction: column;
  padding-top: var(--gap-64);
  z-index: 6;

  .background {
    width: 100%;
    height: 100%;
    background: #5a47a7;
  }
`;

const NetflixContainer = styled.div`
  position: absolute;
  top: calc(20% + var(--gap-64));
  left: 50%;
  transform: translateX(-50%);
  width: var(--desktop-content);
  display: flex;
  justify-content: space-between;
  gap: var(--gap-24);
  z-index: 5;
  max-height: 580px;

  @media screen and (max-width: 1194px) {
    width: 100%;
  }

  .left {
    @media screen and (max-width: 1194px) {
      width: 100%;
    }
  }

  .right {
    @media screen and (max-width: 1194px) {
      display: none;
    }
  }
`;

const NetflixEpisode = styled.div`
  display: flex;
  flex-direction: column;
  padding: var(--gap-48) 40px;
  gap: 28px;
  min-width: 40%;
  min-height: 482px;
  background: var(--black);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
`;

const EpisodeItem = styled.div<EpisodeType>`
  display: flex;
  gap: var(--gap-64);
  padding: 30px 40px;
  align-items: center;
  background: ${(props) => (props.isSelected ? '#141414' : 'transparent')};
  filter: ${(props) => (props.isSelected ? 'opacity(1)' : 'opacity(0.4)')};
  transition: all 600ms cubic-bezier(0.99, 0.08, 0.17, 1);
  cursor: pointer;

  @media screen and (max-width: 768px) {
    //padding: 12px 16px;
    gap: var(--gap-36);
  }

  .sans-medium-16 {
    @media screen and (max-width: 768px) {
      font-size: 12px;
    }
  }
`;

const NewsBrowserWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Article;
