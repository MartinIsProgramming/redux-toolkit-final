import { SVGProps } from 'react';

export interface LinkProps {
  name: string;
  href: string;
}

export interface Service {
  name: string;
  description: string;
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
}

export interface Founder {
  id: number;
  name: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}
