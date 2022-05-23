import { ChangeEvent, useEffect, useState } from 'react';
import {
  setModels,
  setFilteredCars,
  resetFilter,
} from '../features/cars/carSlice';
import { useAppDispatch, useAppSelector } from './redux';

export const useFilterCars = () => {
  const { brands, models } = useAppSelector(state => state.cars);
  const dispatch = useAppDispatch();

  const [brand, setBrand] = useState<string>('');
  const [model, setModel] = useState<string>('');

  const filterModelsByBrand = (e: ChangeEvent<HTMLSelectElement>) => {
    const newBrand = e.target.value;
    setBrand(newBrand);
    dispatch(setModels({ brand: newBrand }));
  };

  const handleModelChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newModel = e.target.value;
    setModel(newModel);
  };

  const handleFilter = () => {
    dispatch(setFilteredCars({ brand: brand, model: model }));
  };

  useEffect(() => {
    setModel(models[0]);
  }, [models]);

  useEffect(() => {
    setBrand(brands[0]);
  }, [brands]);

  const handleResetFilter = () => dispatch(resetFilter());

  return {
    filterModelsByBrand,
    handleModelChange,
    handleFilter,
    handleResetFilter,
  };
};
