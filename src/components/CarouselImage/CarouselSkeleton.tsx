import * as React from 'react';
import { Skeleton } from '@mui/material';

const CarouselSkeleton = () => {
  return (
    <Skeleton
      variant={'rectangular'}
      sx={{
        width: { xs: '100%' },
        height: { xs: 350, sm: 400, md: 450 }
      }}
    />
  );
};

export default CarouselSkeleton;
