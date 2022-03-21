import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';

import BlueRose from '../assets/blue_rose.png';

interface NewsType {
  index: number;
}

interface NewsUpperType {
  h1: string;
  dateString: string;
  written: string;
}

interface NewsContentType {
  content: string;
}

const NewsBrowser: React.FC<NewsType> = ({ index }) => {
  const NewsTitle: React.FC<NewsUpperType> = ({ h1, dateString, written }) => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <span className={'sans-bold-24'}>{h1}</span>
        <span className={'sans-regular-12'} style={{ marginTop: 12 }}>
          {dateString}
        </span>
        <span className={'sans-medium-14'}>{written}</span>
      </div>
    );
  };

  const NewsContent: React.FC<NewsContentType> = ({ content }) => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <span
          className={'sans-medium-14'}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    );
  };

  return (
    <NewsWrapper>
      {index === 0 && (
        <>
          <NewsTitle
            h1={'NFT 유니버스에서 일어난 지상 최악의 사건'}
            dateString={'Mar 03, 2022 AM 9:17 /Updated Mar 03.2022 AM 10:24'}
            written={'By J.H Edward'}
          />
          <img src={BlueRose} alt={'blue_rose'} className={'thumbnail'} />
          <NewsContent
            content={
              '사라진 재벌들의 NFT, 텅 비어버린 지갑, 그리고 남은 파란 장미 <br /><br />' +
              'BAYC, Doodles, Cryptopunks의 커뮤니티에 오싹한 괴담이 떠돈다. Holder들의 지갑에 값 비싼 NFT들이 모두 사라지고 정체불명의 파란 장미 NFT만 남고 있다는 것! <br /><br />' +
              '과연 이 괴담이 진실일까? 진실이라면 도대체 누가 이런 범행을 저질렀는지 의문이다.<br />'
            }
          />
        </>
      )}
      {index === 1 && (
        <>
          <NewsTitle
            h1={'밝혀진 진실.. 이사건의 주모자는 누구?'}
            dateString={'Mar 08, 2022 AM 11:10 /Updated Mar 08.2022 PM 01:03'}
            written={'By J.H Edward'}
          />
          <img src={BlueRose} alt={'blue_rose'} className={'thumbnail'} />
          <NewsContent
            content={
              'NFT Scene에 의적이 등장했다. <br /><br />' +
              "최근 화두였던 이른바 '장미사건'의 공통점이 하나 둘 드러나기 시작했다. 현재 피해 호소 지갑 주인 대부분이 스캠(Scam)가담과 연관 있다는 것! <br /><br />" +
              '얼마 전 러그 풀(Rug Pull)된 A 프로젝트의 개발자, 소수점 사기 구매자, Opensea 웹사이트 복제 등의 스캠을 일으켰던 당사자들의 지갑이 대상이엇다고 밝혀졌다.<br /><br />' +
              'NFT 유니버스에 갑자기 등장한 의작에 모든 커뮤니티가 뜨겁게 달아오르고 있다.<br />' +
              '많은 스캠 피해에 골머리를 앓던 여러 사람들이 ICY JUSTICES의 행보에 관심을 기울이고 있다.'
            }
          />
        </>
      )}
      {index === 2 && (
        <>
          <NewsTitle
            h1={'정체를 드러낸 의적단, ICY JUSTICES!'}
            dateString={'Mar 16, 2022 PM 10:23 /Updated Mar 17.2022 AM 09:02'}
            written={'By J.H Edward'}
          />
          <img src={BlueRose} alt={'blue_rose'} className={'thumbnail'} />
          <NewsContent
            content={
              '트위터가 시끌시끌하다.<br /><br />' +
              '소문이 무성하던 NFT 의적이 프로젝트를 공개하면서 모습을 드러냈다.<br />' +
              '투명한 네온 가면을 착용한 그들은 <strong>ICY JUSTICES</strong>라고 자신들을 소개하고 있다.<br />' +
              '익명의 사용자는 대한민국을 소재지로 하는 NFT 의적단 ICY JUSTICES의 CAPTAIN이라고 본인을 소개한다.<br /><br />' +
              '그가 밝힌 건 ICY JUSTICES 단원이 전 세계 곳곳에 있으며 Retrieve(NFT를 빼앗는 행위)한 NFT는 NFT 생태계와 구호단체에 기부할 것이라는 계획을 밝혔다.'
            }
          />
        </>
      )}
      {index === 3 && (
        <>
          <NewsTitle
            h1={'신규단원 공개모집하는 ICY JUSTICES!'}
            dateString={'Mar 31, 2022 PM 10:20 /Updated Apr 01.2022 AM 09:01'}
            written={'By J.H Edward'}
          />
          <img src={BlueRose} alt={'blue_rose'} className={'thumbnail'} />
          <NewsContent
            content={
              '순식간에 인기를 끌어낸 ICY JUSTICES<br /><br />' +
              '가짜들을 걸러내는 진짜에 모두가 열광하고 있다. 이에 보답하 듯 ICY JUSTICES의 새로운 단원을 공개모집하기 시작했다.<br />' +
              '새로 ICY JUSTICES에 가입하기 위해서는 그들의 NFT를 소지해야만 한다고 한다.<br />' +
              '과연 어떤 이들이 단원으로 활동할 수 있을 지 시끌시끌하다. 그리고 그들의 새로운 행보가 앞으로도 기대된다.'
            }
          />
        </>
      )}
    </NewsWrapper>
  );
};

const NewsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: var(--gap-36) var(--gap-64);
  gap: var(--gap-36);
  overflow-y: scroll;
  max-height: 476px;
  margin-right: 4px;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    height: 16%;
    background-color: #c6c6c6;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-track {
    background-color: #141414;
  }

  .thumbnail {
    height: 204px;
    object-fit: contain;
    background: var(--black);
  }
`;

export default NewsBrowser;
