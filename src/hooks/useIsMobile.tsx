import { useTheme } from '@emotion/react';
import { Breakpoint, useMediaQuery } from '@mui/material';

const useIsMobile = (breakpoint: Breakpoint = 'sm') => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down(breakpoint));
};

export default useIsMobile;
