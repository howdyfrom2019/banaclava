import React, { useRef, useState } from 'react';
import styled from '@emotion/styled';
import NetflixDivider from '../../../assets/divider/netflix-backgorund.png';
import BrowserDndTab from '../../../component/BrowserDndTab';
import NewsBrowser from '../../../component/NewsBrowser';

interface EpisodeType {
  isSelected: boolean;
}

const Article = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const selectedIndexList = useRef<number[]>([0]);
  const [render, setRender] = useState<boolean>(false);
  const reRender = () => setRender((prev) => !prev);
  //TODO: Extract IndexList from NetflixEpisode Container and join with newsBrowser. adjust DND effect.

  const changeIndex = (index: number) => {
    setSelectedIndex(index);
    if (!selectedIndexList.current.includes(index)) {
      selectedIndexList.current.push(index);
      reRender();
    }
  };

  return (
    <Wrapper>
      <img src={NetflixDivider} alt={'divider'} />
      <div className={'background'} />
      <NetflixContainer>
        <NetflixEpisode>
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
              드디어 드러나다! Icy Justices
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
              Icy Justices 열풍! 어디까지 흘러가나..?
            </span>
          </EpisodeItem>
        </NetflixEpisode>
        <NetflixEpisode
          style={{
            border: '1px solid var(--white)',
            padding: 0,
            width: '100%',
          }}
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
  display: flex;
  flex-direction: column;
  padding-top: var(--gap-64);
  z-index: 2;

  .background {
    width: 100%;
    height: 963px;
    background: linear-gradient(
      180deg,
      #5a47a7 0%,
      #56439f 79.48%,
      #000000 100%
    );
  }
`;

const NetflixContainer = styled.div`
  position: absolute;
  top: calc(10% + var(--gap-64));
  left: 50%;
  transform: translateX(-50%);
  width: var(--desktop-content);
  display: flex;
  justify-content: space-between;
  gap: var(--gap-24);
  z-index: 1;
  max-height: 580px;
`;

const NetflixEpisode = styled.div`
  display: flex;
  flex-direction: column;
  padding: var(--gap-48);
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
`;

const NewsBrowserWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Article;
