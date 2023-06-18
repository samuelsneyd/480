import * as React from 'react';
import { Container, Grid, Link, Typography } from '@mui/material';
import GoogleMapsLocation from '../../components/GoogleMapsLocation/GoogleMapsLocation';
import PageTitle from '../../components/PageTitle/PageTitle';
import config from '../../config/config';
import withAnimation from '../../hooks/withAnimation';

const LocationPage = () => {
  return (
    <Container>
      <PageTitle title={'Location'} />
      <Grid container spacing={2} minHeight={450} sx={{ mb: 4 }}>
        <Grid item xs={12} md={6}>
          <GoogleMapsLocation />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant={'h5'} component={'address'}>
            {config.address}
          </Typography>
          <Typography sx={{ my: 1 }}>
            Nestled half way between Ngunguru and Matapouri in beautiful Northland, 480 is 45 minutes drive from central
            Whangarei.
          </Typography>
          <Typography sx={{ my: 1 }}>
            Our address is {config.address}. We’re off the beaten path a bit, and sometimes maps and navigation systems
            can’t find us. Google maps thinks we’re in Matapouri, but we aren’t. Best follow these instructions:
          </Typography>
          <Typography sx={{ my: 1 }}>
            Driving into Ngunguru from Whangarei, Waiotoi Rd is at the far end of the village, on your left. From this
            point we are 4.8km away (hence 480!)
          </Typography>
          <Typography sx={{ my: 1 }}>
            Keep driving along Waiotoi Rd until the sealed road changes to gravel. At this point, veer right to continue
            along Waiotoi Rd. The road is a bit rough, and gets narrow. The road is fine for normal cars, but if you
            have an exotic Ferrari or something best bring the Toyota.
          </Typography>
          <Typography sx={{ my: 1 }}>
            Eventually you’ll come to a sign that says “Council Maintenance Ends” and another that says “Private
            Driveway”. This is the beginning of our own bit of private road. It slowly gets more narrow and it’s like a
            bush track. Keep a look out for Kiwi if driving at night!
          </Typography>
          <Typography sx={{ my: 1 }}>
            After 5 minutes or so along our private road keep a look out for “Kiwi live here” signs. There are two of
            them. When you see the second one, you’ll be just a few metres from our turn off. Keep a look out for the
            480 sign on the right, drive up the driveway and you have arrived.
          </Typography>
          <Typography sx={{ my: 1 }}>
            {'See live weather updates '}
            <Link href={'https://app.weathercloud.net/d3748583664#current'}
                  rel={'noopener noreferrer'}
                  title={'Live Weather Update'}
                  target={'_blank'}
            >
              {'here'}
            </Link>
            {'.'}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default withAnimation(LocationPage);
