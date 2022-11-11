import * as React from 'react';
import { Container, Grid, Link, Typography } from '@mui/material';
import PageTitle from '../../../components/PageTitle/PageTitle';
import Carousel from 'react-material-ui-carousel';
import CarouselImage from '../../../components/CarouselImage/CarouselImage';
import withAnimation from '../../../hooks/withAnimation';
import rainbowImage from '../../../assets/images/rainbow.jpg';

const images = [
  {
    title: 'Rainbow',
    alt: 'A rainbow at 480',
    src: rainbowImage
  }
];

const OtherPage = () => {
  return (
    <Container>
      <PageTitle title={'Further Afield'} />
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
            {'Other activities in the area'}
          </Typography>
          <Typography sx={{ my: 1 }}>
            {'Within 60 minutes drive you can explore Whangarei and the '}
            <Link
              href={'https://www.hundertwasserartcentre.co.nz/'}
              target={'_blank'}
            >
              {'Hunterwasser Art Centre'}
            </Link>.
          </Typography>
          <Typography sx={{ my: 1 }}>
            {' There\'s a nice walk around '}
            <Link
              href={'https://www.wdc.govt.nz/Community/Parks-and-recreation/Parks-and-reserves/Otuihau-Whangarei-Falls'}
              target={'_blank'}
            >
              {'Whangarei Falls'}
            </Link>
            {' or climb up '}
            <Link
              href={'https://www.wdc.govt.nz/Community/Parks-and-recreation/Parks-and-reserves/Parihaka'}
              target={'_blank'}
            >
              {'Parihaka'}
            </Link>
            {'.'}
          </Typography>
          <Typography sx={{ my: 1 }}>
            {'If you’re feeling adventurous you can go underground at '}
            <Link
              href={'https://www.wdc.govt.nz/Community/Parks-and-recreation/Parks-and-reserves/Abbey-Caves'}
              target={'_blank'}
            >
              {'Abbey Caves'}
            </Link>
            {'.'}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default withAnimation(OtherPage);
