import * as React from 'react';
import {
  Box,
  Button,
  Container,
  Grid,
  Snackbar,
  TextField,
  Typography
} from '@mui/material';

type CallToActionViewProps = {
  open: boolean,
  handleSubmit: (e: React.FormEvent<HTMLInputElement>) => void,
  handleClose: () => void
}

const CallToActionView = ({ open, handleSubmit, handleClose }: CallToActionViewProps) => {
  return (
    <Container component="section" sx={{
      mt: 10,
      display: 'flex'
    }}>
      <Grid container>
        <Grid item xs={12} md={6} sx={{ zIndex: 1 }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              bgcolor: 'secondary.main',
              py: 8,
              px: 3
            }}
          >
            <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400 }}>
              <Typography variant="h2" component="h2" gutterBottom>
                Keep an eye out
              </Typography>
              <Typography variant="h5">
                Watch us for news, updates, and offers.
              </Typography>
              <TextField
                placeholder="Your email"
                variant="standard"
                sx={{
                  width: '100%',
                  mt: 3,
                  mb: 2
                }}
              />
              <Button
                type="submit"
                color="primary"
                variant="contained"
                sx={{ width: '100%' }}
              >
                Keep me updated
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: {
              md: 'block',
              xs: 'none'
            },
            position: 'relative'
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: -67,
              left: -67,
              right: 0,
              bottom: 0,
              width: '100%',
              background: 'url(/)'
            }}
          />
          <Box
            component="img"
            src="../../../../static/images/hawk.jpg"
            alt="call to action"
            sx={{
              position: 'absolute',
              top: -28,
              left: -28,
              right: 0,
              bottom: 0,
              width: '100%',
              maxWidth: 600
            }}
          />
        </Grid>
      </Grid>
      <Snackbar
        open={open}
        onClick={handleClose}
        message="We will be in touch with news and offers."
      />
    </Container>
  );
};

export default CallToActionView;
