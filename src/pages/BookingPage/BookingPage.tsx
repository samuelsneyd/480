import * as React from 'react';
import { Container, Link, Typography } from '@mui/material';
import PageTitle from '../../components/PageTitle/PageTitle';
import withAnimation from '../../hooks/withAnimation';

const BookingPage = () => {
  return (
    <Container>
      <PageTitle title={'Booking'} />
      <Typography variant={'h5'} sx={{ mt: 2, mb: 6 }} align={'center'}>
        <Link
          href={'https://www.airbnb.co.nz/rooms/737153204915599612'}
          target={'_blank'}
        >
          {'Click here to book via AirBnB'}
        </Link>
      </Typography>
    </Container>
  );
};

export default withAnimation(BookingPage);
