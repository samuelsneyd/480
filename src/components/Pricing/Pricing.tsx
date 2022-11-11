import * as React from 'react';
import PricingView from './PricingView';

type Tier = {
  title: string,
  subheader?: string,
  price: string,
  description: string[],
  buttonText: string,
  buttonVariant?: 'outlined' | 'text' | 'contained'
};

const tiers: Tier[] = [
  {
    title: '2 Days',
    price: '200',
    description: [
      '2 days',
      'Free wifi',
      'Short trip away'
    ],
    buttonText: 'Book now',
    buttonVariant: 'outlined'
  },
  {
    title: '7 Days',
    subheader: 'Most popular',
    price: '180',
    description: [
      '7 days',
      'Free wifi',
      'Great holiday'
    ],
    buttonText: 'Book now',
    buttonVariant: 'contained'
  },
  {
    title: '14+ Days',
    price: '160',
    description: [
      '14+ days',
      'Free wifi',
      'Long-term stay'
    ],
    buttonText: 'Book now',
    buttonVariant: 'outlined'
  }
];


const Pricing = () => {
  return <PricingView tiers={tiers} />;
};

export default Pricing;
