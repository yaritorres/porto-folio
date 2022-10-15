import type { NextPage } from 'next';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import Welcome from './Welcome';
import MainPage from './Main';

// eslint-disable-next-line react/function-component-definition
const Home: NextPage = () => {
  const [hidden, setHidden] = useState(true);
  const [playState, setPlayState] = useState('paused');

  return (
    <div>
      <Head>
        <title>Portal</title>
      </Head>
      <Welcome setHidden={setHidden} hidden={hidden} setPlayState={setPlayState} />
      <MainPage hidden={hidden} playState={playState} />
    </div>
  );
};

export default Home;
