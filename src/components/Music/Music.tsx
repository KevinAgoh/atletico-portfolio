import React, { lazy, Suspense } from 'react';
import { PulseLoader } from 'react-spinners';
import './music.css';

const Music = () => {
  const Content = lazy(() => import('./Content.tsx'));

  return (
    <div id='music' className='music-container'>
      <h1 className='padding-top'> Music </h1>
      <Suspense fallback={<PulseLoader color={'#fff'} />}>
        <Content />
      </Suspense>
    </div>
  );
};

export default Music;
