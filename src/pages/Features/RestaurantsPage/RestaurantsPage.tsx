import * as React from 'react';
import { Container, Typography } from '@mui/material';
import PageTitle from '../../../components/PageTitle/PageTitle';
import Restaurants from '../../../components/Restaurants/Restaurants';
import withAnimation from '../../../hooks/withAnimation';

const RestaurantsPage = () => {
  return (
    <Container>
      <PageTitle title={'Local Eating'} />
      <Typography variant={'h5'} sx={{ mt: 2 }} align={'center'}>
        While a full kitchen and dining area are provided, there are plenty of great places to eat out on the Tutukaka
        coast.
      </Typography>
      <Restaurants />
    </Container>
  );
};

export default withAnimation(RestaurantsPage);
