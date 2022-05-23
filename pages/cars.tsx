import { useEffect } from 'react';
import { NextPage } from 'next';

import { useGetAllCarsQuery } from '../api/carsApi';
import { useAppDispatch } from '../hooks';
import { setAllCars } from '../features/cars/carSlice';

import { SectionTitle } from '../components/layout/shared/SectionTitle';
import { CarList } from '../components/car/CarList';
import { Filter } from '../components/filter/Filter';
import { Layout } from '../components/layout/Layout';

const CarsPage: NextPage = () => {
  const { data: cars } = useGetAllCarsQuery();
  const dispatch = useAppDispatch();

  useEffect(() => {
    cars && dispatch(setAllCars(cars));
  }, [cars, dispatch]);

  return (
    <Layout>
      <section className="px-4 py-12 mx-auto sm:py-20 sm:px-6 lg:px-8 max-w-7xl">
        <SectionTitle title="Search your car" label="collection" />
        <div className="grid mt-4 gap-y-6 md:grid-cols-3 lg:grid-cols-4 md:gap-x-4">
          <Filter />
          <CarList />
        </div>
      </section>
    </Layout>
  );
};

export default CarsPage;
