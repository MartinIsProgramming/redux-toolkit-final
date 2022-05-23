import { FC, ReactElement } from 'react';
import Head from 'next/head';
import { Navigation } from './shared/Navigation';
import { Footer } from './shared/Footer';

interface Props {
  title?: string;
  description?: string;
  keywords?: string;
  children: ReactElement | ReactElement[];
}

export const Layout: FC<Props> = ({
  title,
  description,
  keywords,
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title || 'Cars app'}</title>
        <meta name="author" className="Martin Vera" />
        <meta
          name="description"
          content={description || 'All car brands information in one place!'}
        />
        <meta
          name="keywords"
          content={keywords || 'Carshop, hyundai, BMW, car dealer'}
        />
      </Head>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  );
};
