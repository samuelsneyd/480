import * as React from 'react';
import { Link } from 'react-router-dom';
import { Menu as MenuIcon } from '@mui/icons-material';
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText
} from '@mui/material';

type Page = {
  title: string,
  href: string
};

interface MobileDrawerViewProps {
  pages: Page[];
  openDrawer: boolean;
  setOpenDrawer: (openDrawer: boolean) => void;
}

const MobileDrawerView = ({ pages, openDrawer, setOpenDrawer }: MobileDrawerViewProps) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          {pages.map((page) => {
            return (
              <ListItemButton
                key={page.title}
                component={Link}
                to={page.href}
                onClick={() => setOpenDrawer(false)}
              >
                <ListItemText>
                  {page.title}
                </ListItemText>
              </ListItemButton>
            );
          })}
        </List>
      </Drawer>
      <IconButton
        size={'large'}
        aria-label={'menu icon'}
        aria-controls={'menu-appbar'}
        aria-haspopup={'true'}
        onClick={() => setOpenDrawer(!openDrawer)}
        color={'inherit'}
      >
        <MenuIcon />
      </IconButton>
    </Box>
  );
};

export default MobileDrawerView;
