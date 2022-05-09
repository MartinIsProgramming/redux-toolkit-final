import { FC } from 'react';
import { servicesList } from '../../../data';
import { SectionTitle } from '../shared/SectionTitle';

export const Services: FC = () => {
  return (
    <section className="py-12 bg-gray-50 sm:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <SectionTitle title="Welcome to Carshop" label="Services" />

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {servicesList.map(feature => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center w-12 h-12 text-white rounded-md bg-brand-orange">
                    <feature.icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg font-medium leading-6 text-primary-brand-dark">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};
