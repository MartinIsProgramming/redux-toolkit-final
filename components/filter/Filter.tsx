import { toggleCurrency } from '../../features/cars/carSlice';
import { useAppDispatch, useAppSelector, useFilterCars } from '../../hooks';
import { StandardBtn } from '../shared/StandardBrn';
import { FilterGroup } from './FilterGroup';

export const Filter = () => {
  const { brands, models, inDollars } = useAppSelector(state => state.cars);
  const dispatch = useAppDispatch();

  const {
    filterModelsByBrand,
    handleModelChange,
    handleFilter,
    handleResetFilter,
  } = useFilterCars();

  return (
    <div className="px-3 pt-3 pb-8 bg-gray-100 rounded-md md:sticky md:top-4 max-h-96">
      <h3 className="mb-2 text-lg font-semibold border-b-2 text-primary-brand-dark">
        Filter
      </h3>
      <div className="mb-3 space-y-2">
        <FilterGroup
          labelText="brands"
          options={brands}
          onChange={filterModelsByBrand}
        />
        <FilterGroup
          labelText="models"
          options={models}
          onChange={handleModelChange}
        />
      </div>
      <div className="mt-6 space-y-3 ">
        <StandardBtn
          text="find my car"
          type="button"
          onClick={handleFilter}
          customClasses="w-full"
        />
        <StandardBtn
          text={`${inDollars ? 'change to pesos' : 'change to dollars'}`}
          type="button"
          isSecondary
          onClick={() => dispatch(toggleCurrency())}
          customClasses="w-full"
        />
        <StandardBtn
          text="all cars"
          type="button"
          onClick={handleResetFilter}
          customClasses="w-full"
        />
      </div>
    </div>
  );
};
