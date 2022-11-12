import * as React from 'react';
import { Link, Typography } from '@mui/material';

const WebsiteBuiltBy = () => {
  return (
    <Typography variant={'caption'}>
      {'Website built by '}
      <Link href={'https://github.com/samuelsneyd'}
            rel={'noopener noreferrer'}
            title={'Samuel'}
            target={'_blank'}
      >
        {'Samuel Sneyd'}
      </Link>
      {'. See source code on '}
      <Link href={'https://github.com/samuelsneyd/480'}
            rel={'noopener noreferrer'}
            title={'GitHub Repository'}
            target={'_blank'}
      >
        {'GitHub'}
      </Link>
      {'. Licensed by '}
      <Link
        href={'https://creativecommons.org/licenses/by/3.0/'}
        title={'Creative Commons BY 3.0'}
        target={'_blank'}
        rel={'noopener noreferrer'}
      >
        {'CC 3.0 BY'}
      </Link>
    </Typography>
  );
};

export default WebsiteBuiltBy;
