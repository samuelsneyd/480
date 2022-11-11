import * as React from 'react';
import { Alert, AlertTitle, Snackbar } from '@mui/material';

interface SendEmailSnackbarProps {
  isSending: boolean;
  isSent: boolean;
  setIsSent: React.Dispatch<React.SetStateAction<boolean>>;
  failSend: boolean;
  setFailSend: React.Dispatch<React.SetStateAction<boolean>>;
}

const SendEmailSnackbar = (props: SendEmailSnackbarProps) => {
  const {
    isSending,
    isSent,
    setIsSent,
    failSend,
    setFailSend
  } = props;

  return (
    <>
      <Snackbar
        open={isSending}
      >
        <Alert
          severity={'info'}
          sx={{ width: '100%' }}
        >
          <AlertTitle>{'Sending'}</AlertTitle>
          {'Sending email now...'}
        </Alert>
      </Snackbar>
      <Snackbar
        open={isSent}
        onClick={() => setIsSent(false)}
      >
        <Alert
          onClose={() => setIsSent(false)}
          severity={'success'}
          sx={{ width: '100%' }}
        >
          <AlertTitle>{'Success'}</AlertTitle>
          {'Email sent successfully'}
        </Alert>
      </Snackbar>
      <Snackbar
        open={failSend}
        onClick={() => setFailSend(false)}
      >
        <Alert
          onClose={() => setFailSend(false)}
          severity={'error'}
          sx={{ width: '100%' }}
        >
          <AlertTitle>{'Error'}</AlertTitle>
          {'Error sending email! Please try again'}
        </Alert>
      </Snackbar>
    </>
  );
};

export default SendEmailSnackbar;
