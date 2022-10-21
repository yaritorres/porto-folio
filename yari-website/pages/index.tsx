import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import Welcome from './Welcome';
import MainPage from './Main';
import Showcase from '../components/Showcase';

// eslint-disable-next-line react/function-component-definition
const Home: NextPage = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [showMain, setShowMain] = useState(false);
  const [showCase, setShowCase] = useState(false);

  return (
    <div>
      <Head>
        <title>Portal</title>
      </Head>
      <Welcome
        setShowWelcome={setShowWelcome}
        showWelcome={showWelcome}
        setShowMain={setShowMain}
      />
      <MainPage showMain={showMain} setShowMain={setShowMain} />
      <Showcase showCase={showCase} />
    </div>
  );
};

export default Home;
