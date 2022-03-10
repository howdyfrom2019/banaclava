import React from 'react';
import styled from '@emotion/styled';
import NetflixDivider from '../../../assets/divider/netflix-backgorund.png';

const Article = () => {
  return (
    <Wrapper>
      <img src={NetflixDivider} alt={'divider'} />
      <div className={'background'} />
      <NetflixContainer>
        <NetflixEpisode>
          <span className={'icy-justice-16'}>story</span>
          <EpisodeItem>
            <span className={'icy-justice-16'}>1</span>
            <span className={'sans-medium-16'}>
              NFT 유니버스에 일어난 지상 최악의 사건
            </span>
          </EpisodeItem>
        </NetflixEpisode>
        <NetflixEpisode />
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

  .background {
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
`;

const NetflixEpisode = styled.div`
  display: flex;
  flex-direction: column;
  padding: var(--gap-48);
  gap: 28px;
  min-width: 40%;
  min-height: 482px;
  background: var(--black);
`;

const EpisodeItem = styled.div`
  display: flex;
  gap: var(--gap-64);
  padding: 30px 40px;
  align-items: center;
  background: #141414;
  cursor: pointer;
`;

export default Article;
