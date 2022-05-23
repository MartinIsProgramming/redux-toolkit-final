import { useContext } from 'react';
import { carContext } from '../../contexts/carContext';
import { useAppSelector } from '../../hooks';
import { Rating } from './Rating';

export const CarInfo = () => {
  const { car } = useContext(carContext);
  const { inDollars } = useAppSelector(state => state.cars);

  const calculatePrice = (price: any) =>
    price.toLocaleString({ maximumFractionDigits: 2 });

  return (
    <>
      <div className="my-3 lg:flex lg:justify-between">
        <h3 className="mb-1 text-lg font-medium text-primary-brand-dark">
          {car.brand} {car.model}
        </h3>
        <div className="flex items-center space-x-1 text-primary-brand-light">
          <span>{car.year} |</span>
          <span>
            {inDollars
              ? `USD ${calculatePrice(car.price_usd)}`
              : `$ ${calculatePrice(car.price_uyu)}`}
          </span>
          <Rating rating={car.rating} />
        </div>
      </div>
      <p className="text-primary-brand-light">{car.description}</p>
    </>
  );
};
