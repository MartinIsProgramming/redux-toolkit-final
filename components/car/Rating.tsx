import { FC } from 'react';
import { StarIcon as FullStar } from '@heroicons/react/solid';
import { StarIcon as EmptyStar } from '@heroicons/react/outline';
import { RatingTypes } from '../../interfaces/car';

interface Props {
  rating: RatingTypes;
}

export const Rating: FC<Props> = ({ rating }) => {
  let arr = [0, 0, 0, 0, 0];
  arr.fill(1, 0, rating);

  return (
    <span className="flex items-center">
      {arr.map((el, i) =>
        el === 1 ? (
          <FullStar key={i} className="w-5 h-5 text-yellow-400" />
        ) : (
          <EmptyStar key={i} className="w-4 h-4" />
        )
      )}
    </span>
  );
};
