import * as React from 'react';
import Typography from '@mui/material/Typography';
import withAnimation from '../../hooks/withAnimation';

const ErrorPage = () => {
  return (
    <main style={{ padding: '1rem' }}>
      <Typography>{'There\'s nothing here!'}</Typography>
    </main>
  );
};

export default withAnimation(ErrorPage);
