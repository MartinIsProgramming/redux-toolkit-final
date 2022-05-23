import { useContext } from 'react';
import Image from 'next/image';

import { carContext } from '../../contexts/carContext';

export const CarImage = () => {
  const { car } = useContext(carContext);

  return (
    <div className="relative w-full h-56 overflow-hidden rounded-lg lg:w-2/3 lg:h-64">
      <Image
        src={car.image}
        alt="car"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      {car.status === 1 && (
        <span className="absolute px-2 py-1 text-xs font-medium text-gray-100 rounded-md top-3 left-2 bg-brand-orange">
          new
        </span>
      )}
    </div>
  );
};
