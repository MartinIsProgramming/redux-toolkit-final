import Link from 'next/link';
import { FC } from 'react';

interface Props {
  text: string;
  href: string;
  isSecondary?: boolean;
  isExternalLink?: boolean;
  customClasses?: string;
}

export const CallToActionLink: FC<Props> = ({
  text,
  href,
  isSecondary,
  isExternalLink,
  customClasses,
}) => {
  const styles = {
    base: `flex items-center justify-center px-8 py-3 text-base font-medium rounded md:py-4 md:text-lg md:px-10 ${customClasses}`,
    isSecondary:
      'text-primary-brand-dark bg-secondary-brand-light hover:bg-secondary-brand-dark',
    isPrimary:
      'text-gray-100 bg-primary-brand-dark hover:bg-primary-brand-light shadow',
  };

  return isExternalLink ? (
    <a
      href={href}
      className={`${styles.base} ${
        isSecondary ? styles.isSecondary : styles.isPrimary
      }`}
      target="_blank"
      rel="noreferrer"
    >
      {text}
    </a>
  ) : (
    <Link href={href}>
      <a
        className={`${styles.base} ${
          isSecondary ? styles.isSecondary : styles.isPrimary
        }`}
      >
        {text}
      </a>
    </Link>
  );
};
