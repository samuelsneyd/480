import * as React from 'react';
import { Container, Link, Typography } from '@mui/material';
import PageTitle from '../../components/PageTitle/PageTitle';
import withAnimation from '../../hooks/withAnimation';

const BookingPage = () => {
  return (
    <Container>
      <PageTitle title={'Booking'} />
      <Typography variant={'h5'} sx={{ my: 2 }} align={'center'}>
        <Link
          href={'https://www.airbnb.co.nz/rooms/737153204915599612'}
          target={'_blank'}
        >
          {'Book via AirBnB'}
        </Link>
      </Typography>
    </Container>
  );
};

export default withAnimation(BookingPage);
