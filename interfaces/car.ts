export type RatingTypes = 0 | 1 | 2 | 3 | 4 | 5;
export type Status = 0 | 1;

export interface Car {
  id: number;
  brand: string;
  description: string;
  image: string;
  model: string;
  price_usd: number;
  price_uyu: number;
  rating: RatingTypes;
  status: Status;
  year: number;
}
