import type { NextPage } from 'next';
import { ContactModal } from '../components';
import { Founders, OurStory } from '../components/layout/about';
import { Layout } from '../components/layout/Layout';
import { useContactModal } from '../hooks/useContactModal';

const AboutPage: NextPage = () => {
  const { isOpen, closeModal, openModal } = useContactModal();

  return (
    <Layout
      title="about us"
      description="Take a look at the company's values and founders!"
    >
      <OurStory openModal={openModal} />
      <Founders />
      <ContactModal isOpen={isOpen} closeModal={closeModal} />
    </Layout>
  );
};

export default AboutPage;
