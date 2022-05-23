import type { NextPage } from 'next';

import { Layout } from '../components/layout/Layout';
import { AreYouReady } from '../components/layout/home/AreYouReady';
import { HeroSection } from '../components/layout/home/HeroSection';
import { Services } from '../components/layout/home/Services';

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
