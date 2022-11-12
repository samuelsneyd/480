import * as React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import AccommodationIcons from '../../components/AccommodationIcons/AccommodationIcons';
import CarouselImage from '../../components/CarouselImage/CarouselImage';
import PageTitle from '../../components/PageTitle/PageTitle';
import withAnimation from '../../hooks/withAnimation';
import image1 from '../../assets/images/bedroom.webp';
import image2 from '../../assets/images/loft.webp';
import image3 from '../../assets/images/bathroom.webp';
import image4 from '../../assets/images/kitchen.webp';
import image5 from '../../assets/images/dining.webp';
import image6 from '../../assets/images/shower.webp';
import image7 from '../../assets/images/deck.webp';
import image8 from '../../assets/images/deck_b.webp';
import image9 from '../../assets/images/trail.webp';
import image10 from '../../assets/images/meadow.webp';
import image11 from '../../assets/images/meadow2.webp';

const images = [
  {
    title: 'Bedroom',
    alt: 'Bedroom',
    src: image1
  },
  {
    title: 'Loft',
    alt: 'Loft',
    src: image2
  },
  {
    title: 'Bathroom',
    alt: 'Bathroom',
    src: image3
  },
  {
    title: 'Kitchen',
    alt: 'Kitchen',
    src: image4
  },
  {
    title: 'Dining',
    alt: 'Dining',
    src: image5
  },
  {
    title: 'Shower',
    alt: 'Shower',
    src: image6
  },
  {
    title: 'Deck A',
    alt: 'Deck A',
    src: image7
  },
  {
    title: 'Deck B',
    alt: 'Deck B',
    src: image8
  },
  {
    title: 'Trail',
    alt: 'Trail',
    src: image9
  },
  {
    title: 'Meadow A',
    alt: 'Meadow A',
    src: image10
  },
  {
    title: 'Meadow B',
    alt: 'Meadow B',
    src: image11
  }
];

const AccommodationPage = () => {
  return (
    <Container>
      <PageTitle title={'Your Studio'} />
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
            {'See your studio'}
          </Typography>
          <Typography sx={{ my: 1 }}>
            {'Set on two levels, your spacious studio includes a kitchen and dining area downstairs with two decks.'}
          </Typography>
          <Typography sx={{ my: 1 }}>
            {'Upstairs is a large open plan bedroom with bathroom. '}
            {'Your shower is outside nestled in the trees but under cover in case it rains.'}
          </Typography>
          <AccommodationIcons />
        </Grid>
      </Grid>
    </Container>
  );
};

export default withAnimation(AccommodationPage);
