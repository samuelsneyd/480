import * as React from 'react';
import { Box, Container, Grid, IconButton, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import CabinIcon from '@mui/icons-material/Cabin';
import KayakingIcon from '@mui/icons-material/Kayaking';
import ForestIcon from '@mui/icons-material/Forest';

const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5
};

const ProductValues = () => {
  return (
    <Box
      component={'section'}
      sx={{
        display: 'flex',
        overflow: 'hidden',
        bgcolor: 'secondary.light'
      }}
    >
      <Container sx={{
        mt: 12,
        mb: 12,
        display: 'flex',
        position: 'relative'
      }}>
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <Typography
              variant={'h4'}
              component={'h2'}
              align={'center'}
            >
              {'During your stay'}
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <IconButton
                size={'large'}
                component={Link}
                to={'/accommodation/'}
              >
                <CabinIcon fontSize={'large'} />
              </IconButton>
              <Typography
                variant={'h6'}
                align={'center'}
                sx={{ my: 4 }}
              >
                {'Comfy accommodation'}
              </Typography>
              <Typography variant={'h5'} align={'center'}>
                {'Beautiful studio accommodation nestled within native New Zealand bush'}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <IconButton
                size={'large'}
                component={Link}
                to={'/features/'}
              >
                <KayakingIcon fontSize={'large'} />
              </IconButton>
              <Typography
                variant={'h6'}
                align={'center'}
                sx={{ my: 4 }}
              >
                {'New experiences'}
              </Typography>
              <Typography variant={'h5'} align={'center'}>
                {'A wide range of activities in the area, in the bush and on or under the water'}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <IconButton
                size={'large'}
                component={Link}
                to={'/features/'}
              >
                <ForestIcon fontSize={'large'} />
              </IconButton>
              <Typography
                variant={'h6'}
                align={'center'}
                sx={{ my: 4 }}
              >
                {'Beautiful scenery'}
              </Typography>
              <Typography variant={'h5'} align={'center'}>
                {'Discover the best of New Zealand land, ocean, and wildlife at your doorstep'}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProductValues;
