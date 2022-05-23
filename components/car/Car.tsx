import { ReactElement } from 'react';
import { Car as CarProps } from '../../interfaces/car';
import { Provider as CarProvider } from '../../contexts/carContext';

export interface Props {
  car: CarProps;
  children: ReactElement | ReactElement[];
}

export const Car = ({ car, children }: Props) => {
  return (
    <CarProvider value={{ car }}>
      <div className="lg:max-w-3xl">{children}</div>
    </CarProvider>
  );
};
