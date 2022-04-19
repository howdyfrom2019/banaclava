import React from 'react';
import styled from '@emotion/styled';
import ModalPortal from './ModalPortal';

interface ModalProps {
  close: () => void;
}

const ModalContainer: React.FC<ModalProps> = ({ close, children }) => {
  return (
    <ModalPortal>
      <ModalOverlay
        onClick={(e) => {
          e.stopPropagation();
          close();
        }}
      >
        <ModalContents>{children}</ModalContents>
      </ModalOverlay>
    </ModalPortal>
  );
};

const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.4);
`;

const ModalContents = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: var(--max-modal);
  min-height: 680px;
  background: var(--light-black);
  z-index: 1001;
`;

export default ModalContainer;
