import * as React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import SpaIcon from '@mui/icons-material/Spa';

const ContactBanner = () => {
  return (
    <Container
      component={'section'}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        my: 8
      }}
    >
      <Button
        component={Link}
        to={'/contact/'}
        sx={{
          border: '4px solid currentColor',
          borderRadius: 0,
          height: 'auto',
          textTransform: 'none',
          py: 2,
          px: 5
        }}
      >
        <Typography
          variant={'h4'}
          component={'span'}
          align={'center'}
        >
          {'Got any questions?'}
        </Typography>
      </Button>
      <Typography
        variant={'subtitle1'}
        sx={{ my: 3 }}
      >
        {'We are here to help. Get in touch!'}
      </Typography>
      <Box
        component={SpaIcon}
        sx={{ width: 60, height: 60 }}
      />
    </Container>
  );
};

export default ContactBanner;
