import * as React from 'react';
import { Link } from 'react-router-dom';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DirectionsIcon from '@mui/icons-material/Directions';
import LaunchIcon from '@mui/icons-material/Launch';
import {
  Box,
  Button,
  Container,
  Grid, IconButton,
  Typography
} from '@mui/material';

const itemSx = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5
};

const HowToBook = () => {
  return (
    <Box
      component={'section'}
      sx={{
        display: 'flex',
        bgcolor: 'secondary.light',
        overflow: 'hidden'
      }}
    >
      <Container
        sx={{
          mt: 12,
          mb: 12,
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <Typography
                variant={'h4'}
                component={'h2'}
                align={'center'}
              >
                {'How to book'}
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={itemSx}>
                <IconButton
                  size={'large'}
                  component={Link}
                  to={'/book/'}
                >
                  <LaunchIcon fontSize={'large'} />
                </IconButton>
                <Typography
                  variant={'h5'}
                  align={'center'}
                  sx={{ my: 2 }}
                >
                  {'Open the booking page'}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={itemSx}>
                <IconButton
                  size={'large'}
                  component={Link}
                  to={'/book/'}
                >
                  <CalendarMonthIcon fontSize={'large'} />
                </IconButton>
                <Typography
                  variant={'h5'}
                  align={'center'}
                  sx={{ my: 2 }}
                >
                  {'Select dates and duration of stay'}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={itemSx}>
                <IconButton
                  size={'large'}
                  component={Link}
                  to={'/location/'}
                >
                  <DirectionsIcon fontSize={'large'} />
                </IconButton>
                <Typography
                  variant={'h5'}
                  align={'center'}
                  sx={{ my: 2 }}
                >
                  {'Get directions to your studio'}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </div>
        <Button
          color={'secondary'}
          variant={'contained'}
          size={'large'}
          component={Link}
          to={'/book/'}
          sx={{ mt: 6 }}
        >
          {'Book Now'}
        </Button>
      </Container>
    </Box>
  );
};

export default HowToBook;
