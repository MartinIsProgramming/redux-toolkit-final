import { StandardBtn } from '../shared/StandardBrn';

export const CarButtons = () => {
  return (
    <div className="flex mt-3 space-x-2">
      <StandardBtn text="buy car" type="button" />
      <StandardBtn text="more info" type="button" isSecondary />
    </div>
  );
};
