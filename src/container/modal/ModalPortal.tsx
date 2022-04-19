import React from 'react';
import reactDom from 'react-dom';

const ModalPortal: React.FC = ({ children }) => {
  const el = document.getElementById('modal');
  if (el) {
    return reactDom.createPortal(children, el);
  } else {
    return null;
  }
};

export default ModalPortal;
