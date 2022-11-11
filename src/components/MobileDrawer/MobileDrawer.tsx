import * as React from 'react';
import { useState } from 'react';
import MobileDrawerView from './MobileDrawerView';
import config from '../../config/config';

const pages = [
  {
    title: 'Home',
    href: '/'
  },
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
  },
  {
    title: 'FAQ',
    href: '/faq/'
  },
  {
    title: 'Terms',
    href: '/terms/'
  },
  {
    title: 'Privacy',
    href: '/privacy/'
  }
];

const MobileDrawer = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <MobileDrawerView
      pages={pages}
      openDrawer={openDrawer}
      setOpenDrawer={setOpenDrawer}
    />
  );
};

export default MobileDrawer;
