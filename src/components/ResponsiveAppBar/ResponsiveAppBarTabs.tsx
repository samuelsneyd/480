import * as React from 'react';
import { Box, Button, Link as MuiLink } from '@mui/material';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import config from '../../config/config';

type Page = {
  title: string,
  href: string
};

interface ResponsiveAppBarTabsProps {
  pages: Page[];
}

const ResponsiveAppBarTabs = ({ pages }: ResponsiveAppBarTabsProps) => {
  const { pathname } = useLocation();

  return (
    <Box sx={{ flexGrow: 1, display: 'flex' }}>
      {pages.map((page) => (
        // @ts-ignore
        <Button
          component={page.href === config.bookingLink ? MuiLink : Link}
          variant={pathname.includes(page.href) ? 'contained' : 'text'}
          target={page.href === config.bookingLink ? '_blank' : null}
          to={page.href}
          href={page.href}
          key={page.title}
          sx={{
            my: 2,
            px: 1,
            display: 'flex',
            alignItems: 'flex-start',
            color: pathname.includes(page.href) ? 'secondary.main' : 'secondary.light',
            textTransform: 'none',
            textDecoration: 'none',
            fontWeight: 'light',
            fontSize: 'medium'
          }}
        >
          {page.title}
        </Button>
      ))}
    </Box>
  );
};

export default ResponsiveAppBarTabs;
