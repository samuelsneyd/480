import * as React from 'react';
import { Box, Typography } from '@mui/material';

type PageTitleProps = {
  title: string
};

const PageTitle = ({ title }: PageTitleProps) => {
  return (
    <Box sx={{ mt: 7, mb: 7 }}>
      <Typography
        variant={'h3'}
        gutterBottom
        align={'center'}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default PageTitle;
