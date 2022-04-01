import React from 'react';
import styled from '@emotion/styled';

const InfiniteBand = () => {
  return (
    <Wrapper>
      <span className={`icy-justice-16 animation1`}>
        icy justices &nbsp;icy justices &nbsp;icy justices &nbsp;icy justices
        &nbsp;icy justices &nbsp;icy justices &nbsp;icy justices &nbsp;icy
        justices &nbsp;icy justices &nbsp;icy justices &nbsp;icy justices &nbsp;
      </span>
      <span className={`icy-justice-16 animation1 animation2`}>
        icy justices &nbsp;icy justices &nbsp;icy justices &nbsp;icy justices
        &nbsp;icy justices &nbsp;icy justices &nbsp;icy justices &nbsp;icy
        justices &nbsp;icy justices &nbsp;icy justices &nbsp;icy justices &nbsp;
      </span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  gap: var(--gap-24);
  background: var(--navy);
  border-top: 1px solid var(--white);
  border-bottom: 1px solid var(--white);
  overflow: hidden;
  z-index: 5;

  .animation1 {
    height: fit-content;
    position: absolute;
    display: inline-block;
    -webkit-animation: scrolling-left 30s linear infinite;
    animation: scrolling-left 30s linear infinite;
    text-transform: uppercase;
    white-space: nowrap;
    user-select: none;
  }

  .animation2 {
    display: none;
    animation-delay: 15s;
  }

  @keyframes scrolling-left {
    0% {
      display: inline-block;
      transform: translateX(100%);
      -webkit-transform: translateX(100%);
    }
    100% {
      display: inline-block;
      transform: translateX(-100%);
      -webkit-transform: translateX(-100%);
    }
  }
`;

export default InfiniteBand;
