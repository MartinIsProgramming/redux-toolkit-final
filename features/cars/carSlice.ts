import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Car } from '../../interfaces/car';

interface CarsState {
  cars: Car[];
  brands: string[];
  models: string[];
  inDollars: boolean;
  filteredCars: Car[] | [];
}

const initialState: CarsState = {
  cars: [],
  brands: [],
  models: [],
  inDollars: true,
  filteredCars: [],
};

export const carSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    setAllCars: (state, action: PayloadAction<Car[]>) => {
      state.cars = action.payload;
      state.brands = Array.from(new Set(action.payload.map(car => car.brand)));
      state.models = Array.from(new Set(action.payload.map(car => car.model)));
      state.filteredCars = action.payload;
    },

    setModels: (state, action: PayloadAction<{ brand: string }>) => {
      state.models = Array.from(
        new Set(
          state.cars
            .filter(car => car.brand === action.payload.brand)
            .map(car => car.model)
        )
      );
    },

    setFilteredCars: (
      state,
      action: PayloadAction<{ brand: string; model: string }>
    ) => {
      state.filteredCars = state.cars.filter(
        car =>
          car.brand === action.payload.brand &&
          car.model === action.payload.model
      );
    },

    resetFilter: state => {
      state.filteredCars = state.cars;
    },

    toggleCurrency: state => {
      state.inDollars = !state.inDollars;
    },
  },
});

export const {
  setAllCars,
  toggleCurrency,
  setModels,
  setFilteredCars,
  resetFilter,
} = carSlice.actions;

export default carSlice.reducer;
