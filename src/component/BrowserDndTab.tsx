import React, { useEffect, useRef, useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import styled from '@emotion/styled';
import { ReactComponent as Favicon } from '../assets/icon/news_icon.svg';
import { ReactComponent as Close } from '../assets/icon/icon_close.svg';

export const BROWSER_DND_TYPE = 'BROWSER_TAB';

interface DndType {
  indexArray?: number[];
  defaultIndex?: number;
  callback?: (index: number, indexList: number[]) => void;
}

interface TabType {
  index: number;
  text: string;
}

const BrowserDndTab: React.FC<DndType> = ({
  indexArray = [0],
  defaultIndex = 0,
  callback,
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const indexList = useRef<number[]>([]);
  const [render, setRender] = useState<boolean>(false);
  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: BROWSER_DND_TYPE,
      drop: () => {
        console.log('drop');
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
      }),
    }),
    [],
  );
  const reRender = () => setRender((prev) => !prev);

  const BrowserTab: React.FC<TabType> = ({ index, text }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
      type: BROWSER_DND_TYPE,
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
        opacity: monitor.isDragging() ? 0.5 : 1,
      }),
    }));

    const deleteIndex = () => {
      const result: number[] = [];
      indexList.current.forEach((item) => {
        if (item !== index) result.push(item);
      });
      if (selectedIndex === index) setSelectedIndex(index);
      indexList.current = result;
      reRender();
    };

    return (
      <Tab
        ref={drag}
        className={
          selectedIndex === index
            ? 'tab'
            : index === indexList.current[0]
            ? 'false1'
            : index === indexList.current[indexList.current.length - 1]
            ? 'false3'
            : 'false'
        }
        isSelected={selectedIndex === index}
        isShow={indexList.current.includes(index)}
        onClick={(e) => {
          e.stopPropagation();
          changeIndex(index);
        }}
      >
        <Favicon />
        <span className={'sans-regular-8'}>{text}</span>
        {indexList.current.length > 1 && (
          <Close
            className={'close'}
            onClick={(e) => {
              e.stopPropagation();
              deleteIndex();
            }}
          />
        )}
      </Tab>
    );
  };

  const changeIndex = (index: number) => {
    setSelectedIndex(index);
  };

  useEffect(() => {
    callback &&
      indexList.current.length > 0 &&
      callback(selectedIndex, indexList.current);
  }, [selectedIndex]);

  useEffect(() => {
    setSelectedIndex(defaultIndex);
    if (indexArray) {
      indexList.current = indexArray;
      reRender();
    }
  }, [defaultIndex, indexArray]);
  return (
    <NewsBrowserTabWrapper>
      <div className={'tab-wrapper'} ref={drop}>
        <BrowserTab index={0} text={'NFT ??????????????? ????????? ?????? ????????? ??????'} />
        <BrowserTab index={1} text={'????????? ??????... ???????????? ???????????? ???????'} />
        <BrowserTab index={2} text={'????????? ????????? ?????????, ICY JUSTICES!'} />
        <BrowserTab index={3} text={'???????????? ?????????????????? ICY JUSTICES!'} />
      </div>
      <span className={'line'} />
    </NewsBrowserTabWrapper>
  );
};

const NewsBrowserTabWrapper = styled.div`
  position: relative;
  display: flex;
  transition: all 600ms cubic-bezier(0.99, 0.08, 0.17, 1);
  background: var(--dark-purple);

  .tab-wrapper {
    display: flex;
    transition: all 600ms cubic-bezier(0.99, 0.08, 0.17, 1);
    max-width: 80%;
  }

  & > span.line {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: var(--primary);
    z-index: 4;
  }

  .tab:first-of-type {
    margin-left: var(--gap-12);
  }

  .tab:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: -12px;
    height: 12px;
    width: 12px;
    color: var(--white);
    border-bottom-right-radius: 70%;
    //background: var(--primary);
    box-shadow: 7px 0 0 0 var(--primary);
    z-index: 2;
  }

  .tab:after {
    content: '';
    position: absolute;
    bottom: 0;
    right: -12px;
    height: 16px;
    width: 12px;
    border-bottom-left-radius: 70%;
    box-shadow: -7px 0 0 0 var(--primary);
    z-index: 2;
  }

  .false:before {
    position: absolute;
    left: -2px;
    top: 50%;
    transform: translateY(-50%);
    content: '|';
    color: rgba(255, 255, 255, 0.4);
  }

  .false1:first-of-type {
    margin-left: var(--gap-12);
  }
`;

const Tab = styled.div<{ isSelected?: boolean; isShow?: boolean }>`
  max-width: 160px;
  flex: 1;
  min-width: 80px;
  position: relative;
  height: 28px;
  padding: 0 var(--gap-8);
  display: ${(props) => (props.isShow ? 'flex' : 'none')};
  gap: var(--gap-12);
  align-items: center;
  background: ${(props) => (props.isSelected ? 'var(--primary)' : '#502BB8')};
  border-radius: 4px;
  animation-duration: 200ms;
  animation-name: chromeTab;
  cursor: default;
  user-select: none;

  ::-webkit-scrollbar {
    display: none;
  }

  .sans-regular-8 {
    max-width: 65%;
  }

  .close {
    position: absolute;
    right: var(--gap-8);
    top: 50%;
    transform: translateY(-50%);
    border-radius: 50%;
    transition: all ease-in-out 100ms;

    :hover {
      background: rgba(0, 0, 0, 0.2);
    }
  }

  @keyframes chromeTab {
    from {
      width: 0;
      overflow: hidden;
    }
    to {
      width: 84px;
      overflow: auto;
    }
  }
`;

export default BrowserDndTab;
