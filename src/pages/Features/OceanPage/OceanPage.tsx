import * as React from 'react';
import { Container, Grid, Link, Typography } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import CarouselImage from '../../../components/CarouselImage/CarouselImage';
import PageTitle from '../../../components/PageTitle/PageTitle';
import withAnimation from '../../../hooks/withAnimation';
import schoolOfFishImage from '../../../assets/images/school-of-fish.jpg';

const images = [
  {
    title: 'School of fish',
    alt: 'School of fish underwater',
    src: schoolOfFishImage
  }
];

const OceanPage = () => {
  return (
    <Container>
      <PageTitle title={'Beaches & Swimming'} />
      <Grid container spacing={2} minHeight={450} sx={{ mb: 1 }}>
        <Grid item xs={12} md={6}>
          <Carousel
            animation={'fade'}
            duration={2000}
            swipe
          >
            {images.map((image) => <CarouselImage key={image.title} image={image} />)}
          </Carousel>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant={'h5'}>
            {'Explore the ocean'}
          </Typography>
          <Typography sx={{ my: 1 }}>
            {'We have beautiful white sandy beaches and blue water nearby.'}
          </Typography>
          <Typography sx={{ my: 1 }}>
            <Link
              href={'https://www.tutukakacoastnz.com/matapouri-bay/'}
              target={'_blank'}
            >
              {'Matapouri'}
            </Link>
            {' and '}
            <Link
              href={'https://www.tutukakacoastnz.com/matapouri-bay/'}
              target={'_blank'}
            >
              {'Whale Bay'}
            </Link>
            {' are popular beaches within 20 minutes drive.'}
          </Typography>
          <Typography sx={{ my: 1 }}>
            {'Or, contact one of the tourist boat operators to take you to the fabulous islands of Tawhiti Rahi and Aorangi, aka the '}
            <Link
              href={'https://www.tutukakacoastnz.com/poor-knights-islands/'}
              target={'_blank'}
            >
              {'Poor Knights Islands'}
            </Link>
            {', one of the top 10 dive sites in the world.'}
          </Typography>
          <Typography sx={{ my: 1 }}>
            {'About an hour away is the gorgeous naturist beach of '}
            <Link
              href={'https://www.freebeaches.org.nz/uretiti.htm'}
              target={'_blank'}
            >
              {'Uretiti'}
            </Link>
            {'.'}
          </Typography>
          <Typography sx={{ my: 1 }}>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default withAnimation(OceanPage);
