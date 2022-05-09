import { FC } from 'react';
import Link from 'next/link';

interface Props {
  isLight?: boolean;
}

export const Logo: FC<Props> = ({ isLight }) => {
  const styles = {
    base: 'text-2xl rounded',
    isLight: 'text-gray-100',
    isDark: 'text-primary-brand-dark',
  };

  return (
    <Link href="/">
      <a
        className={`${styles.base} ${
          isLight ? styles.isLight : styles.isDark
        } `}
      >
        CARSHOP
      </a>
    </Link>
  );
};
