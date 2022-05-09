import {
  DocumentTextIcon,
  SpeakerphoneIcon,
  TruckIcon,
  LightningBoltIcon,
} from '@heroicons/react/outline';
import { Service } from '../interfaces/interfaces';

export const servicesList: Service[] = [
  {
    name: 'Brand new cars',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: TruckIcon,
  },
  {
    name: 'Used cars',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: SpeakerphoneIcon,
  },
  {
    name: 'Paper work',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: DocumentTextIcon,
  },
  {
    name: 'Fastest service',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: LightningBoltIcon,
  },
];
