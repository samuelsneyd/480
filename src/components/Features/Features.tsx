import * as React from 'react';
import FeaturesView from './FeaturesView';
import homePageImage from '../../assets/images/home_page_min.jpg';
import schoolOfFishImage from '../../assets/images/school-of-fish.jpg';
import cakeImage from '../../assets/images/cake.jpg';
import rainbowImage from '../../assets/images/rainbow.jpg';

type Image = {
  src: string,
  href: string,
  title: string,
  width: string
};

const images: Image[] = [
  {
    src: homePageImage,
    href: '/features/480/',
    title: 'At 480',
    width: '55%'
  },
  {
    src: schoolOfFishImage,
    href: '/features/ocean/',
    title: 'Beaches & Swimming',
    width: '45%'
  },
  {
    src: cakeImage,
    href: '/features/restaurants/',
    title: 'Local Eating',
    width: '45%'
  },
  {
    src: rainbowImage,
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
