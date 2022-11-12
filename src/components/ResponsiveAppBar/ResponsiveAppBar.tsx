import * as React from 'react';
import ResponsiveAppBarView from './ResponsiveAppBarView';
import useIsMobile from '../../hooks/useIsMobile';
import config from '../../config/config';

const pages = [
  {
    title: `About ${config.siteName}`,
    href: '/about/'
  },
  {
    title: 'Your Studio',
    href: '/accommodation/'
  },
  {
    title: 'Location',
    href: '/location/'
  },
  {
    title: 'Things To Do',
    href: '/features/'
  },
  {
    title: 'Book Now',
    href: '/book/'
  },
  {
    title: 'Contact',
    href: '/contact/'
  }
];

const ResponsiveAppBar = () => {
  const isMobile = useIsMobile();

  return (
    <ResponsiveAppBarView
      isMobile={isMobile}
      pages={pages}
    />
  );
};

export default ResponsiveAppBar;
