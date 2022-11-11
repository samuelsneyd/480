import * as React from 'react';
import { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import MediaCard from '../MediaCard/MediaCard';
import axios from 'axios';

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    axios.get('/api/feature_items?tags=restaurants')
      .then((response) => {
        response.data?.length > 0 ? setRestaurants(response.data) : null;
      })
      .catch(() => setRestaurants([]));
  }, []);

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
