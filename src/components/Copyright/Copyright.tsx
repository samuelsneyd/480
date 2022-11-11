import * as React from 'react';
import { Typography } from '@mui/material';
import config from '../../config/config';

const Copyright = () => {
  return (
    <Typography>
      {`© ${new Date().getFullYear()} ${config.siteName}`}
    </Typography>
  );
};

export default Copyright;
