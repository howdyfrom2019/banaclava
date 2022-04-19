import React from 'react';
import styled from '@emotion/styled';
import Example from '../assets/duck.png';

interface BasicInfoType {
  name: string;
  position: string;
  desc: string;
  imgSrc?: string;
}

const TeamCard: React.FC<BasicInfoType> = ({
  name,
  position,
  desc,
  imgSrc,
}) => {
  return (
    <Wrapper>
      <img src={imgSrc ? imgSrc : Example} alt={'profile'} />
      <TextContainer>
        <span
          className={'icy-justice-16'}
          dangerouslySetInnerHTML={{ __html: name }}
        />
        <span
          className={'icy-justice-12'}
          dangerouslySetInnerHTML={{ __html: position }}
          style={{ marginTop: 16 }}
        />
        <span
          className={'sans-regular-12'}
          dangerouslySetInnerHTML={{ __html: desc }}
          style={{ marginTop: 24 }}
        />
      </TextContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 244px;
  display: flex;
  flex-direction: column;
  gap: var(--gap-24);
  align-items: center;
  background: var(--black);
  filter: opacity(0.7);
  transition: all 600ms ease-out;
  padding: 12px 10px;
  border-radius: 6px;

  & > img {
    width: 100%;
    object-fit: contain;
  }

  :hover {
    background: var(--light-black);
    filter: opacity(1);
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

export default TeamCard;
