import * as React from 'react';
import { Box, Container, Skeleton, styled, SxProps, Theme } from '@mui/material';
import arrowDownImage from '../../assets/images/icons/productHeroArrowDown.png';

const ProductHeroLayoutRoot = styled('section')(({ theme }) => ({
  color: theme.palette.common.white,
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    height: '95vh'
  },
  [theme.breakpoints.up('sm')]: {
    height: '95vh',
    minHeight: 500,
    maxHeight: 1300
  }
}));

const Background = styled(Box)({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  zIndex: -2
});

interface HeroHeaderLayoutProps {
  sxBackground: SxProps<Theme>;
  isImageLoaded: boolean;
}

const HeroHeaderLayout = (props: React.HTMLAttributes<HTMLDivElement> & HeroHeaderLayoutProps) => {
  const { children, sxBackground, isImageLoaded } = props;

  return (
    <ProductHeroLayoutRoot>
      <Container
        sx={{
          mt: 8,
          mb: 14,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        {children}
        <Box
          sx={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundColor: 'common.black',
            opacity: 0.3,
            zIndex: -1
          }}
        />
        {
          isImageLoaded
            ? <Background sx={sxBackground} />
            :
            <Skeleton
              variant={'rectangular'}
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                zIndex: -2
              }}
            />
        }
        <Box
          component="img"
          src={arrowDownImage}
          height="16"
          width="12"
          alt="arrow down"
          sx={{
            position: 'absolute',
            bottom: 32
          }}
        />
      </Container>
    </ProductHeroLayoutRoot>
  );
};

export default HeroHeaderLayout;
