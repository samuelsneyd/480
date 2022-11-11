import * as React from 'react';
import SendEmailSnackbar from './SendEmailSnackbar';
import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography
} from '@mui/material';

type ContactFormValues = {
  firstName: string,
  lastName: string,
  email: string,
  message: string
}

interface ContactFormViewProps {
  values: ContactFormValues;
  errors: ContactFormValues;
  minMessageLength: number;
  messageHelperText: string;
  handleInputChange: React.FormEventHandler;
  handleSubmit: React.FormEventHandler;
  isSent: boolean;
  setIsSent: React.Dispatch<React.SetStateAction<boolean>>;
  isSending: boolean;
  failSend: boolean;
  setFailSend: React.Dispatch<React.SetStateAction<boolean>>;
}

const ContactFormView = (props: ContactFormViewProps) => {
  const {
    values,
    errors,
    minMessageLength,
    messageHelperText,
    handleInputChange,
    handleSubmit,
    isSent,
    setIsSent,
    isSending,
    failSend,
    setFailSend
  } = props;

  return (
    <>
      <Grid
        container
        spacing={1}
        direction={'column'}
        alignItems={'center'}
        justifyItems={'center'}
      >
        <Grid item xs={6} mb={4}>
          <Card sx={{ maxWidth: 600 }}>
            <CardContent>
              <Typography
                variant={'h5'}
                gutterBottom
              >
                {'Get in touch'}
              </Typography>
              <Typography
                variant={'body2'}
                color={'textSecondary'}
                component={'p'}
                gutterBottom sx={{ pb: 1 }}
              >
                {'Send us a message and we will get back to you as soon as possible'}
              </Typography>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label={'First Name'}
                      placeholder={'Enter first name'}
                      variant={'outlined'}
                      name={'firstName'}
                      value={values.firstName}
                      onChange={handleInputChange}
                      error={!!errors.firstName}
                      helperText={errors.firstName}
                      fullWidth
                      disabled={isSending}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label={'Last Name'}
                      placeholder={'Enter last name'}
                      variant={'outlined'}
                      name={'lastName'}
                      value={values.lastName}
                      onChange={handleInputChange}
                      error={!!errors.lastName}
                      helperText={errors.lastName}
                      fullWidth
                      disabled={isSending}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      // type={'email'}
                      label={'Email'}
                      placeholder={'Enter email'}
                      variant={'outlined'}
                      name={'email'}
                      value={values.email}
                      onChange={handleInputChange}
                      error={!!errors.email}
                      helperText={errors.email}
                      fullWidth
                      disabled={isSending}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label={'Message'}
                      placeholder={'Enter message'}
                      variant={'outlined'}
                      name={'message'}
                      value={values.message}
                      onChange={handleInputChange}
                      error={!!errors.message}
                      helperText={values.message?.length < minMessageLength ? messageHelperText : ''}
                      fullWidth
                      multiline
                      minRows={6}
                      disabled={isSending}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type={'submit'}
                      variant={'contained'}
                      color={'secondary'}
                      fullWidth
                      disabled={isSending}
                    >
                      {'Submit'}
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <SendEmailSnackbar
        isSending={isSending}
        isSent={isSent}
        setIsSent={setIsSent}
        failSend={failSend}
        setFailSend={setFailSend}
      />
    </>
  );
};

export default ContactFormView;
