import { createContext } from 'react';
import { Car } from '../interfaces/car';

interface CarContextProps {
  car: Car;
}

export const carContext = createContext({} as CarContextProps);
export const { Provider } = carContext;
