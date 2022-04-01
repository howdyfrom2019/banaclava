import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        flexDirection: 'column',
        gap: 24,
        alignItems: 'center',
      }}
    >
      <span className={'icy-justice-36'} style={{ fontSize: 128 }}>
        404
      </span>
      <span
        className={'icy-justice-36'}
        style={{ fontSize: 64, whiteSpace: 'nowrap' }}
      >
        Hey,
        <br />
        This page is not built yet.
        <br />
        <Link to={'/'} style={{ textDecoration: 'none', cursor: 'pointer' }}>
          Go back to main!
        </Link>
      </span>
    </div>
  );
};

export default NotFoundPage;
