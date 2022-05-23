import { Car } from '.';
import { useAppSelector } from '../../hooks';

export const CarList = () => {
  const { filteredCars: cars } = useAppSelector(state => state.cars);

  return (
    <div className="space-y-12 md:col-span-2 lg:col-span-3">
      {cars?.map((car, i) => (
        <Car key={i} car={car}>
          <Car.Image />
          <Car.Info />
          <Car.Buttons />
        </Car>
      ))}
    </div>
  );
};
