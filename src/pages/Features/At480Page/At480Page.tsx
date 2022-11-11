import * as React from 'react';
import { Container, Grid, Link, Typography } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import CarouselImage from '../../../components/CarouselImage/CarouselImage';
import PageTitle from '../../../components/PageTitle/PageTitle';
import withAnimation from '../../../hooks/withAnimation';
import config from '../../../config/config';
import homePageImage from '../../../assets/images/home_page_min.jpg';

const images = [
  {
    title: '480 Landscape',
    alt: '480 Landscape',
    image: homePageImage
  }
];

const At480Page = () => {
  return (
    <Container>
      <PageTitle title={`At ${config.siteName}`} />
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
            {config.siteSubtitle}
          </Typography>
          <Typography sx={{ my: 1 }}>
            {'We have several walking tracks on our property, providing you with quiet private strolls.'}
          </Typography>
          <Typography sx={{ my: 1 }}>
            {'We are a clothing optional retreat, giving you the option to experience nature without barriers in complete privacy.'}
          </Typography>
          <Typography sx={{ my: 1 }}>
            {`At ${config.siteName}, you will see and hear a wide range of birds, thanks largely to the protection of habitat we provide and the elimination of pests by `}
            <Link
              href={'https://tutukakalandcare.org.nz/'}
              target={'_blank'}
            >
              {'Tutukaka Land Care'}
            </Link>
            {'. Typically, you will see or hear Tui, Piwakawaka, Kiwi, Ruru, Kotare, Pīpīwharauroa, Kererū, Kākāriki, and Toutouwai. Plus noisy Australian Rosellas.'}
          </Typography>
          <Typography sx={{ my: 1 }}>
            {'At night we have minimal light pollution; get your star app out and look for the Magellanic Clouds and the Carina Nebula.'}
          </Typography>
          <Typography sx={{ my: 1 }}>
            {`But most of all, ${config.siteName} is about peace and quiet, local walks, and restoring your spirit.`}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default withAnimation(At480Page);
