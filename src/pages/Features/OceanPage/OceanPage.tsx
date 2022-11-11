import * as React from 'react';
import { Container, Grid, Link, Typography } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import CarouselImage from '../../../components/CarouselImage/CarouselImage';
import CarouselSkeleton from '../../../components/CarouselImage/CarouselSkeleton';
import PageTitle from '../../../components/PageTitle/PageTitle';
import withAnimation from '../../../hooks/withAnimation';
import { useEffect, useState } from 'react';
import axios from 'axios';

const fallbackImages = [
  {
    title: 'School of fish',
    alt: 'School of fish underwater',
    image: '../../../../static/images/school-of-fish.jpg'
  }
];

const OceanPage = () => {
  const [images, setImages] = useState(fallbackImages);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    axios.get('/api/images?tag=ocean')
      .then((response) => {
        response.data?.length > 0 ? setImages(response.data) : null;
      })
      .catch(() => setImages(fallbackImages))
      .finally(() => setIsLoaded(true));
  }, []);

  return (
    <Container>
      <PageTitle title={'Beaches & Swimming'} />
      <Grid container spacing={2} minHeight={450} sx={{ mb: 1 }}>
        <Grid item xs={12} md={6}>
          {isLoaded
            ?
            <Carousel
              animation={'fade'}
              duration={2000}
              swipe
            >
              {images.map((image) => <CarouselImage key={image.title} image={image} />)}
            </Carousel>
            : <CarouselSkeleton />
          }
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
