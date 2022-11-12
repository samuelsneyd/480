import * as React from 'react';
import { Grid } from '@mui/material';
import MediaCard from '../MediaCard/MediaCard';
import schnappaRockImage from '../../assets/images/restaurants/schnappa_rock.jpg';
import marinaPizzaImage from '../../assets/images/restaurants/marina_pizza.jpg';
import wahiImage from '../../assets/images/restaurants/wahi.jpg';

const restaurants = [
  {
    name: 'Schnappa Rock',
    subtitle: 'Fresh, local & sustainable',
    description: 'Located in the Tutukaka Marina, Schnappa Rock Restaurant and bar is a haven of tropical escapism. Perfect for post-dive drinks, romantic dining, or a family meal.',
    website: 'https://www.schnapparock.co.nz/',
    image: schnappaRockImage,
    alt: 'Schnappa Rock'
  },
  {
    name: 'Tutukaka Marina Pizza Bar & Grill',
    subtitle: 'Napoli Pizzas',
    description: 'Right on the waterfront in the Tutukaka Marina, this pizzeria serves hand-made Napoli-style pizzas, pasta, and fresh cockles by the kilo.',
    website: 'https://www.facebook.com/TutukakaPizza/',
    image: marinaPizzaImage,
    alt: 'Tutukaka Marina Pizza Bar & Grill'
  },
  {
    name: 'Wahi',
    subtitle: 'Restaurant at Oceans\n',
    description: 'Wahi uses produce from their own gardens grown using sustainable, organic practices. Alongside free range products and great coffees, it\'s a wonderful place for a meal.',
    website: 'https://wahi.co.nz/',
    image: wahiImage,
    alt: 'Wahi'
  }
];

const Restaurants = () => {
  return (
    <Grid
      container
      spacing={4}
      sx={{ my: 4 }}
    >
      {restaurants.map((restaurant) => (
        <Grid item xs={12} sm={6} md={4}>
          <MediaCard
            media={restaurant}
            buttonText={'See the menu'}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Restaurants;
