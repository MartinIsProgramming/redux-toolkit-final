import { Car as CarHOC } from './Car';
import { Props as CarComponentProps } from './Car';

import { CarButtons } from './CarButtons';
import { CarImage } from './CarImage';
import { CarInfo } from './CarInfo';

interface CarHOCProps {
  ({ car, children }: CarComponentProps): JSX.Element;
  Image: () => JSX.Element;
  Info: () => JSX.Element;
  Buttons: () => JSX.Element;
}

export const Car: CarHOCProps = Object.assign(CarHOC, {
  Image: CarImage,
  Info: CarInfo,
  Buttons: CarButtons,
});
