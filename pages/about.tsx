import type { NextPage } from 'next';

import { Layout } from '../components/layout/Layout';
import { Founders } from '../components/layout/about/Founders';
import { OurStory } from '../components/layout/about/OurStory';

import { ContactModal } from '../components/layout/about/ContactModal';

const AboutPage: NextPage = () => {
  return (
    <Layout
      title="about us"
      description="Take a look at the company's values and founders!"
    >
      <OurStory />
      <Founders />
      <ContactModal />
    </Layout>
  );
};

export default AboutPage;
