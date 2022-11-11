import * as React from 'react';
import FeaturesView from './FeaturesView';

type Image = {
  src: string,
  href: string,
  title: string,
  width: string
};

const images: Image[] = [
  {
    src: '../../../../static/images/home_page_min.jpg',
    href: '/features/480/',
    title: 'At 480',
    width: '55%'
  },
  {
    src: '../../../../static/images/school-of-fish.jpg',
    href: '/features/ocean/',
    title: 'Beaches & Swimming',
    width: '45%'
  },
  {
    src: '../../../../static/images/cake.jpg',
    href: '/features/restaurants/',
    title: 'Local Eating',
    width: '45%'
  },
  {
    src: '../../../../static/images/rainbow.jpg',
    href: '/features/other',
    title: 'Further Afield',
    width: '55%'
  }
];

const Features = () => {
  return (
    <FeaturesView images={images} />
  );
};

export default Features;
