import React from 'react';
import { Paper } from '@mui/material';

interface CarouselImageProps {
  image: {
    alt: string | undefined,
    src: string | undefined,
    title: string | undefined
  };
}

const CarouselImage = ({ image }: CarouselImageProps) => {
  return (
    <Paper
      elevation={3}
      component={'img'}
      sx={{
        width: { xs: '100%' },
        height: { xs: 350, sm: 400, md: 450 },
        objectFit: 'cover'
      }}
      alt={image.alt || image.title}
      src={image.src}
    />
  );
};

export default CarouselImage;
