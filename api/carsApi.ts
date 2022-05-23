import { Car } from '../interfaces/car';
import { baseApi } from './baseApi';

export const carsApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getAllCars: builder.query<Car[], void>({
      query: () => '/cars',
    }),
  }),
});

export const { useGetAllCarsQuery } = carsApi;
