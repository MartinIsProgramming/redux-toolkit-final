import { FC } from 'react';
import Link from 'next/link';
import { navigationLinks } from '../../../data';
import { Logo } from '.';

export const Footer: FC = () => {
  return (
    <footer className="border-t-2 bg-primary-brand-dark border-brand-orange">
      <div className="flex flex-col items-center max-w-6xl py-12 mx-auto space-y-4 sm:py-20">
        <Logo isLight />
        <div className="flex items-center justify-center">
          {navigationLinks.map(({ name, href }) => (
            <Link key={name} href={href}>
              <a className="px-3 py-2 text-gray-100 rounded hover:underline">
                {name}
              </a>
            </Link>
          ))}
        </div>
        <p className="mt-8 text-base text-center text-gray-400">
          &copy; {`${new Date().getFullYear()}`} Carshop, Inc. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};
