import { FC } from 'react';

type ButtonTypes = 'submit' | 'reset' | 'button';

interface Props {
  text: string;
  type: ButtonTypes;
  href?: string;
  customClasses?: string;
  isSecondary?: boolean;
  isExternalLink?: boolean;
  onClick?: () => void;
  icon?: JSX.Element;
}

export const StandardBtn: FC<Props> = ({
  text,
  type,
  onClick,
  isSecondary,
  icon,
  isExternalLink,
  href,
  customClasses,
}) => {
  const baseStyles = `flex items-center justify-center py-2 px-4 text-sm font-medium rounded ${customClasses}`;

  const classNames = isSecondary
    ? 'text-primary-brand-dark bg-secondary-brand-dark hover:bg-secondary-brand-light '
    : 'text-gray-100 bg-primary-brand-dark hover:bg-primary-brand-light';

  return isExternalLink ? (
    <a
      href={href}
      className={`${baseStyles} ${classNames}`}
      target="_blank"
      rel="noreferrer"
    >
      {text}
    </a>
  ) : (
    <button
      type={type}
      className={`${baseStyles} ${classNames}`}
      onClick={onClick}
    >
      {icon && icon}
      {text}
    </button>
  );
};
