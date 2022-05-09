import { FC } from 'react';

interface Props {
  title: string;
  label: string;
}

export const SectionTitle: FC<Props> = ({ title, label }) => {
  return (
    <>
      <p className="text-base font-semibold tracking-wide uppercase text-brand-orange">
        {label}
      </p>
      <h2 className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-primary-brand-dark sm:text-4xl">
        {title}
      </h2>
    </>
  );
};
