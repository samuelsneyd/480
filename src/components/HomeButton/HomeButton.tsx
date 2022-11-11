import * as React from 'react';
import { Button } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const HomeButton = () => {
  const { pathname } = useLocation();

  return (
    <Button
      component={Link}
      variant={'outlined'}
      to={'/'}
      size={'large'}
      sx={{
        color: pathname == '/' ? 'secondary.main' : 'secondary.light',
        display: 'flex',
        textDecoration: 'none',
        textTransform: 'none',
        fontSize: 'large'
      }}
    >
      {'Home'}
    </Button>
  );
};

export default HomeButton;
