import * as React from 'react';
import { Button, Typography, Stack, IconButton, ButtonGroup } from '@mui/material';
import withTheme from '../../hooks/withTheme';
import SendIcon from '@mui/icons-material/Send';

// For testing purposes, display theme for MUI components

const MuiTypography = () => {
  return (
    <>
      <Typography variant={'h1'}>h1 Heading</Typography>
      <Typography variant={'h2'}>h2 Heading</Typography>
      <Typography variant={'h3'}>h3 Heading</Typography>
      <Typography variant={'h4'}>h4 Heading</Typography>
      <Typography variant={'h5'}>h5 Heading</Typography>
      <Typography variant={'h6'}>h6 Heading</Typography>
      <Typography variant={'subtitle1'}>Subtitle 1</Typography>
      <Typography variant={'subtitle2'}>Subtitle 2</Typography>
      <Typography variant={'body1'}>Body 1: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi corporis
        deserunt dolor minus quis repellat rerum, soluta. Blanditiis dolore, et, harum incidunt iure molestias nisi
        nulla, optio placeat qui sed.</Typography>
      <Typography variant={'body2'}>Body 2: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam debitis
        deleniti, dignissimos facere laboriosam molestiae recusandae sapiente. Aliquam consectetur ducimus, ea eligendi
        ipsum labore magnam molestiae molestias officiis quibusdam sunt!</Typography>
      <Typography variant={'body1'} gutterBottom>Body 1 gutterbottom: Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Animi corporis deserunt dolor minus quis repellat rerum, soluta. Blanditiis dolore, et, harum
        incidunt iure molestias nisi nulla, optio placeat qui sed.</Typography>
      <Typography variant={'body2'} gutterBottom>Body 2 gutterbottom: Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Aperiam debitis deleniti, dignissimos facere laboriosam molestiae recusandae sapiente. Aliquam
        consectetur ducimus, ea eligendi ipsum labore magnam molestiae molestias officiis quibusdam sunt!</Typography>
    </>
  );
};

const MuiButton = () => {
  return (
    <>
      <Stack spacing={4}>
        <Stack spacing={2} direction={'row'}>
          <Button variant={'text'}>Text</Button>
          <Button variant={'contained'}>Text</Button>
          <Button variant={'outlined'}>Text</Button>
        </Stack>
        <Stack spacing={2} direction={'row'}>
          <Button variant={'text'} color={'primary'}>Primary</Button>
          <Button variant={'text'} color={'secondary'}>Secondary</Button>
          <Button variant={'text'} color={'error'}>Error</Button>
          <Button variant={'text'} color={'warning'}>Warn</Button>
          <Button variant={'text'} color={'info'}>Info</Button>
          <Button variant={'text'} color={'success'}>Success</Button>
        </Stack>
        <Stack spacing={2} direction={'row'}>
          <Button variant={'contained'} color={'primary'}>Primary</Button>
          <Button variant={'contained'} color={'secondary'}>Secondary</Button>
          <Button variant={'contained'} color={'error'}>Error</Button>
          <Button variant={'contained'} color={'warning'}>Warn</Button>
          <Button variant={'contained'} color={'info'}>Info</Button>
          <Button variant={'contained'} color={'success'}>Success</Button>
        </Stack>
        <Stack spacing={2} direction={'row'}>
          <Button variant={'outlined'} color={'primary'}>Primary</Button>
          <Button variant={'outlined'} color={'secondary'}>Secondary</Button>
          <Button variant={'outlined'} color={'error'}>Error</Button>
          <Button variant={'outlined'} color={'warning'}>Warn</Button>
          <Button variant={'outlined'} color={'info'}>Info</Button>
          <Button variant={'outlined'} color={'success'}>Success</Button>
        </Stack>
        <Stack display={'block'} spacing={2} direction={'row'}>
          <Button variant={'contained'} size={'small'}>Small</Button>
          <Button variant={'contained'} size={'medium'}>Medium</Button>
          <Button variant={'contained'} size={'large'}>Large</Button>
        </Stack>
        <Stack spacing={2} direction={'row'}>
          <Button variant={'contained'} startIcon={<SendIcon/>}>Send</Button>
          <Button variant={'contained'} endIcon={<SendIcon/>}>Send</Button>
          <IconButton aria-label={'send'} color={'secondary'} size={'small'}>
            <SendIcon/>
          </IconButton>
        </Stack>
        <Stack spacing={2} direction={'row'}>
          <IconButton aria-label={'alert test'} onClick={() => alert('Alert')}/>
        </Stack>
      </Stack>
    </>
  );
};

const MuiButtonGroup = () => {
  return (
    <>
      <Stack spacing={2} direction={'row'}>
        <ButtonGroup variant={'contained'}>
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
        <ButtonGroup variant={'outlined'}>
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
        <ButtonGroup variant={'text'}>
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
      <br/>
      <Stack spacing={2} direction={'row'}>
        <ButtonGroup
          variant={'contained'}
          orientation={'vertical'}
          size={'medium'}
          color={'primary'}
        >
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
        <ButtonGroup
          variant={'outlined'}
          orientation={'vertical'}
          size={'small'}
          color={'secondary'}
        >
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
        <ButtonGroup
          variant={'text'}
          orientation={'vertical'}
          size={'large'}
          color={'warning'}
        >
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
    </>
  );
};

const ThemeExample = () => {
  return (
    <>
      <MuiTypography/>
      <MuiButton/>
      <MuiButtonGroup/>
    </>
  );
};

export default ThemeExample;
// export default withRoot(ThemeExample);
