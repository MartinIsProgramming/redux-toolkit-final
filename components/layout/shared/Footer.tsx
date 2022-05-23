import { Logo } from './Logo';

export const Footer = () => {
  return (
    <footer className="border-t-2 bg-primary-brand-dark border-brand-orange">
      <div className="max-w-6xl py-12 mx-auto space-y-4 text-center sm:py-20">
        <Logo isLight />
        <p className="mt-8 text-base text-center text-gray-400">
          &copy; {`${new Date().getFullYear()}`} Carshop, Inc. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};
