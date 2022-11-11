import * as React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import HomeButton from '../HomeButton/HomeButton';
import MobileDrawer from '../MobileDrawer/MobileDrawer';
import ResponsiveAppBarTabs from './ResponsiveAppBarTabs';

type Page = {
  title: string,
  href: string
};

interface ResponsiveAppBarViewProps {
  isMobile: boolean;
  pages: Page[];
}

const ResponsiveAppBarView = ({ isMobile, pages }: ResponsiveAppBarViewProps) => {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <MobileDrawer />
          <HomeButton />
          {isMobile
            ? null
            : <ResponsiveAppBarTabs pages={pages} />
          }
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default ResponsiveAppBarView;
