import { FC } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { LinkProps } from '../../interfaces/interfaces';

interface Props {
  link: LinkProps;
  close?: (ref?: ref | HTMLElement) => void;
}

export const CustomNavLink: FC<Props> = ({ link, close }) => {
  const { asPath } = useRouter();
  const isCurrent = asPath === link.href;

  const style = {
    base: 'block px-3 py-2 text-sm rounded-md font-medium focus:outline-none',
    isActive: 'bg-primary-brand-dark text-gray-100',
    isNotActive: 'text-primary-brand-light hover:text-primary-brand-dark',
  };

  return (
    <Link href={link.href} key={link.name}>
      <a
        className={`${style.base} ${
          isCurrent ? style.isActive : style.isNotActive
        }`}
        aria-current={isCurrent ? 'page' : undefined}
        onClick={close && close}
      >
        {link.name}
      </a>
    </Link>
  );
};
