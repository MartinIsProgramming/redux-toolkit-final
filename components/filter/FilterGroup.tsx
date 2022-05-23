import { FC } from 'react';

interface Props {
  labelText: string;
  options: string[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const FilterGroup: FC<Props> = ({ labelText, options, onChange }) => {
  return (
    <>
      <label
        htmlFor={labelText}
        className="block text-sm font-medium text-primary-brand-light"
      >
        {labelText}
      </label>
      <select
        name={labelText}
        id={labelText}
        className="w-full rounded-md text-primary-brand-light border-secondary-brand-light focus:outline-none focus:ring-brand-orange focus:border-brand-orange sm:text-sm"
        onChange={onChange}
      >
        {options.map((item, i) => (
          <option value={item} key={i}>
            {item}
          </option>
        ))}
      </select>
    </>
  );
};
