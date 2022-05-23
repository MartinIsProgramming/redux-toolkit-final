import { Disclosure, Transition } from '@headlessui/react';
import { MenuAlt1Icon, XIcon } from '@heroicons/react/outline';

import { Logo } from './Logo';
import { CustomNavLink } from '../../shared/CustomNavLink';

export interface LinkProps {
  name: string;
  href: string;
}

const navigationLinks: LinkProps[] = [
  { name: 'home', href: '/' },
  { name: 'about', href: '/about' },
  { name: 'cars', href: '/cars' },
];

export const Navigation = () => {
  return (
    <Disclosure as="nav" className="shadow-md">
      {({ open }) => (
        <>
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Logo />
              <div className="hidden space-x-2 sm:flex">
                {navigationLinks.map(link => (
                  <CustomNavLink key={link.name} link={link} />
                ))}
              </div>
              <div className="sm:hidden">
                <Disclosure.Button className="p-2 rounded-md focus:outline-none text-primary-brand-dark">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block w-6 h-6" aria-hidden="true" />
                  ) : (
                    <MenuAlt1Icon
                      className="block w-6 h-6"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Transition
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-out duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Disclosure.Panel className="sm:hidden">
              {({ close }) => (
                <div className="px-2 py-2">
                  {navigationLinks.map(link => (
                    <CustomNavLink key={link.name} link={link} close={close} />
                  ))}
                </div>
              )}
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};
