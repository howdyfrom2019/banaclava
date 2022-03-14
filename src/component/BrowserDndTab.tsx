import React, { useState } from 'react';
import { useDrag } from 'react-dnd';
import styled from '@emotion/styled';
import { ReactComponent as Favicon } from '../assets/icon/news_icon.svg';
import { ReactComponent as Close } from '../assets/icon/icon_close.svg';

export const BROWSER_DND_TYPE = 'BROWSER_TAB';

interface DndType {
  text?: string;
  callback?: (index: number) => void;
}

const BrowserDndTab: React.FC<DndType> = ({ text, callback }) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [{ isDragging }, drag] = useDrag(() => ({
    type: BROWSER_DND_TYPE,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const changeIndex = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <NewsBrowserTabWrapper>
      <Tab
        ref={drag}
        className={selectedIndex === 0 ? 'tab' : 'false'}
        isSelected={selectedIndex === 0}
        onClick={() => changeIndex(0)}
      >
        <Favicon />
        <span className={'sans-regular-8'}>
          에피소드 1편입니다. 내용이 상당히 길죠?
        </span>
        <Close className={'close'} />
      </Tab>
      <Tab
        ref={drag}
        className={selectedIndex === 1 ? 'tab' : 'false'}
        isSelected={selectedIndex === 1}
        onClick={() => changeIndex(1)}
      >
        <Favicon />
        <span className={'sans-regular-8'}>
          에피소드 2편입니다. 내용이 상당히 길죠?
        </span>
        <Close className={'close'} />
      </Tab>
      <Tab
        ref={drag}
        className={selectedIndex === 2 ? 'tab' : 'false'}
        isSelected={selectedIndex === 2}
        onClick={() => changeIndex(2)}
      >
        <Favicon />
        <span className={'sans-regular-8'}>
          에피소드 3편입니다. 내용이 상당히 길죠?
        </span>
        <Close className={'close'} />
      </Tab>
      <span className={'line'} />
    </NewsBrowserTabWrapper>
  );
};

const NewsBrowserTabWrapper = styled.div`
  position: relative;
  display: flex;
  transition: all 600ms cubic-bezier(0.99, 0.08, 0.17, 1);
  background: var(--dark-purple);

  & > span.line {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: var(--primary);
    z-index: 4;
  }

  .tab:first-child {
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

  .false:first-child {
    content: '';
    margin-left: var(--gap-12);
  }
`;

const Tab = styled.div<{ isSelected?: boolean }>`
  max-width: 120px;
  position: relative;
  height: 28px;
  padding: 0 var(--gap-8);
  display: flex;
  gap: var(--gap-12);
  align-items: center;
  background: ${(props) => (props.isSelected ? 'var(--primary)' : '#502BB8')};
  border-radius: 4px;
  animation-duration: 200ms;
  animation-name: chromeTab;
  cursor: default;
  user-select: none;

  .sans-regular-8 {
    max-width: 70%;
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
