import * as React from 'react';
import { Container, Typography } from '@mui/material';
import AppFooterLinks from './AppFooterLinks';
import Copyright from '../Copyright/Copyright';
import WebsiteBuiltBy from '../WebsiteBuiltBy/WebsiteBuiltBy';

type Link = {
  text: string,
  href: string
};

type Footer = {
  title: string,
  description: Link[]
};

type AppFooterViewProps = {
  footers: Footer[]
};

const AppFooterView = ({ footers }: AppFooterViewProps) => {
  return (
    <Typography
      component={'footer'}
      sx={{
        display: 'flex',
        bgcolor: 'secondary.light'
      }}
    >
      <Container sx={{
        my: 4,
        display: 'flex'
      }}>
        <Container>
          <Container
            maxWidth={'md'}
            component={'footer'}
            sx={{
              borderTop: (theme) => `1px solid ${theme.palette.divider}`,
              py: 4
            }}
          >
            <AppFooterLinks footers={footers} />
          </Container>
          <Container sx={{ mb: 1 }}>
            <Copyright />
          </Container>
          <Container>
            <WebsiteBuiltBy />
          </Container>
        </Container>
      </Container>
    </Typography>
  );
};

export default AppFooterView;
