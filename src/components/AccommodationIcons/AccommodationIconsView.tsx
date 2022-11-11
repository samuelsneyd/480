import * as React from 'react';
import { Grid, SvgIconTypeMap, Typography } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

type IconItem = {
  text: string,
  icon: OverridableComponent<SvgIconTypeMap>
};

type AccommodationIconsProps = {
  icons: {
    left: Array<IconItem>,
    right: Array<IconItem>
  }
};

const AccommodationIconsView = ({ icons }: AccommodationIconsProps) => {
  const setUpIcon = ({ text, icon: Icon }: IconItem) => {
    return (
      <Typography
        key={text}
        sx={{ mt: 1, mb: 1 }}
      >
        <Icon />
        {` ${text}`}
      </Typography>
    );
  };

  return (
    <Grid container>
      <Grid item xs={6}>
        {icons.left.map((icon) => setUpIcon(icon))}
      </Grid>
      <Grid item xs={6}>
        {icons.right.map((icon) => setUpIcon(icon))}
      </Grid>
    </Grid>
  );
};

export default AccommodationIconsView;
