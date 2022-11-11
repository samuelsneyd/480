import * as React from 'react';
import StarBorder from '@mui/icons-material/Starborder';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  CssBaseline,
  Grid,
  Typography,
  GlobalStyles
} from '@mui/material';

type Tier = {
  title: string,
  subheader?: string,
  price: string,
  description: string[],
  buttonText: string,
  buttonVariant?: 'outlined' | 'text' | 'contained'
};

type PricingViewProps = {
  tiers: Tier[]
};

const PricingView = ({ tiers }: PricingViewProps) => {
  return (
    <>
      <GlobalStyles styles={{
        ul: {
          margin: 0,
          padding: 0,
          listStyle: 'none'
        }
      }} />
      <CssBaseline />
      <Container
        disableGutters
        maxWidth={'sm'}
        component={'main'}
        sx={{
          pt: 8,
          pb: 6
        }}>
        <Typography
          component={'h1'}
          variant={'h2'}
          align={'center'}
          color={'text.primary'}
          gutterBottom
        >
          Pricing
        </Typography>
        <Typography
          variant={'h5'}
          align={'center'}
          color={'text.secondary'}
          component={'p'}
        >
          Quickly build an effective pricing table for your potential customers with
          this layout. It&apos;s built with default MUI components with little
          customization.
        </Typography>
      </Container>
      <Container
        maxWidth={'md'}
        component={'main'}
      >
        <Grid
          container
          spacing={5}
          alignItems={'flex-end'}
        >
          {tiers.map((tier) => (
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === 'Enterprise' ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarBorder /> : null}
                  subheaderTypographyProps={{
                    align: 'center'
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700]
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2
                    }}
                  >
                    <Typography
                      component={'h2'}
                      variant={'h3'}
                      color={'text.primary'}
                    >
                      ${tier.price}
                    </Typography>
                    <Typography
                      variant={'h6'}
                      color={'text.secondary'}
                    >
                      /day
                    </Typography>
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component={'li'}
                        variant={'subtitle1'}
                        align={'center'}
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button
                    fullWidth
                    variant={tier.buttonVariant}
                  >
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default PricingView;
