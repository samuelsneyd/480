import * as React from 'react';
import { Container, Grid, Link, Typography } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import CarouselImage from '../../components/CarouselImage/CarouselImage';
import PageTitle from '../../components/PageTitle/PageTitle';
import withAnimation from '../../hooks/withAnimation';
import config from '../../config/config';
import homePageImage from '../../assets/images/home_page_min.jpg';

const images = [
  {
    title: '480 - Nature Without Barriers',
    alt: '480 - Nature Without Barriers',
    src: homePageImage,
  }
];

const AboutPage = () => {
  return (
    <Container>
      <PageTitle title={`About ${config.siteName}`} />
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
            Nature without barriers
          </Typography>
          <Typography sx={{ my: 1 }}>
            {config.siteName} is surrounded by bush full of birdlife.
          </Typography>
          <Typography sx={{ my: 1 }}>
            Your loft is the only guest accommodation on our 18ha (50 acre) property, providing you with peace and
            privacy.
          </Typography>
          <Typography sx={{ my: 1 }}>
            We are a clothing optional retreat. If you wish, you are welcome to shed your clothes and experience air and
            warmth on your skin.
          </Typography>
          <Typography sx={{ my: 1 }}>
            You can sit and relax on the deck, surrounded by trees and the song of the Tui by day and the call of the
            Kiwi at night.
          </Typography>
          <Typography sx={{ my: 1 }}>
            You can wander the tracks we have, stopping just to listen to nothing.
          </Typography>
          <Typography sx={{ my: 1 }}>
            Once you arrive in tranquility of {config.siteName}, you won’t want to leave.
          </Typography>
          <Typography sx={{ my: 1 }}>
            To protect our biodiversity {config.siteName} is not open to pets, and due to fire danger is a no smoking
            retreat.
          </Typography>
          <Typography sx={{ my: 1 }}>
            {'See live weather updates '}
            <Link href={'https://app.weathercloud.net/d3748583664#current'}
                  rel={'noopener noreferrer'}
                  title={'Live Weather Update'}
                  target={'_blank'}
            >
              {'here'}
            </Link>
            {'.'}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default withAnimation(AboutPage);
