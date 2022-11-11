import * as React from 'react';
import { Container, Typography } from '@mui/material';
import PageTitle from '../../components/PageTitle/PageTitle';
import Features from '../../components/Features/Features';
import withAnimation from '../../hooks/withAnimation';
import config from '../../config/config';

const FeaturesPage = () => {
  return (
    <Container>
      <PageTitle title={'Things To Do'} />
      <Typography variant={'h5'} sx={{ mt: 2 }} align={'center'}>
        {`There's always something to do in the beautiful Tutukaka area. Featuring the best of New Zealand land and \
          sea, ${config.siteName} is surrounded by native bush and wildlife. Just off the coast are the Poor Knight's \
          islands, one of the world's premier scuba diving and snorkeling locations.`}
      </Typography>
      <Features />
    </Container>
  );
};

export default withAnimation(FeaturesPage);
