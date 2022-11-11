import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Paper } from '@mui/material';
import HeroHeaderLayout from './HeroHeaderLayout';
import theme from '../../config/theme';
import backgroundImage from '../../assets/images/home_page_min.jpg';
import logo from '../../assets/images/logo_text_min.png';

const HeroHeader = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <HeroHeaderLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: theme.palette.primary.main,
        backgroundPosition: 'center'
      }}
      isImageLoaded={isImageLoaded}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt={'increase priority'}
        onLoad={() => setIsImageLoaded(true)}
      />
      <Link to={'/about/'}>
        <Paper
          component={'img'}
          src={logo}
          sx={{
            maxHeight: '35vh',
            maxWidth: '100%',
            backgroundColor: 'transparent',
            boxShadow: 'none',
            my: 4
          }}
        />
      </Link>
      <Button
        color={'secondary'}
        variant={'contained'}
        size={'large'}
        component={Link}
        to={'/book/'}
      >
        {'Book Now'}
      </Button>
    </HeroHeaderLayout>
  );
};

export default HeroHeader;
