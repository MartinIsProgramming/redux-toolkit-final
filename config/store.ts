import { configureStore } from '@reduxjs/toolkit';
import { carsApi } from '../api/carsApi';
import contactModalReducer from '../features/contactModel/contactModelSlice';
import carReducer from '../features/cars/carSlice';

const store = configureStore({
  reducer: {
    [carsApi.reducerPath]: carsApi.reducer,
    contactModal: contactModalReducer,
    cars: carReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(carsApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
