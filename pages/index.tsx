import type { NextPage } from 'next';

import { Layout } from '../components/layout/Layout';
import { AreYouReady, HeroSection, Services } from '../components/layout/home';

const Home: NextPage = () => {
  return (
    <Layout>
      <HeroSection />
      <Services />
      <AreYouReady />
    </Layout>
  );
};

export default Home;
