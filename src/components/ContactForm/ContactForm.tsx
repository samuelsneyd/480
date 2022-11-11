import * as React from 'react';
import { useState } from 'react';
import ContactFormView from './ContactFormView';
import axios from 'axios';

axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
axios.defaults.xsrfCookieName = 'csrftoken';

type Values = {
  firstName: string,
  lastName: string,
  email: string,
  message: string
}

const initialValues: Values = {
  firstName: '',
  lastName: '',
  email: '',
  message: ''
};

const ContactForm = () => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState(initialValues);
  const [isSent, setIsSent] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [failSend, setFailSend] = useState(false);
  const minMessageLength = 30;
  const messageHelperText = `${values.message.length}/${minMessageLength} characters minimum`;

  const handleInputChange: React.ChangeEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
    setErrors({
      ...errors,
      [name]: ''
    });
  };

  const validateInput = (): boolean => {
    const currentErrors: Values = {
      firstName: values.firstName ? '' : 'This field is required',
      lastName: values.lastName ? '' : 'This field is required',
      email: (/\S+@\S+\.\S+/).test(values.email) ? '' : 'Email is not valid',
      message: values.message.length > minMessageLength ? '' : messageHelperText
    };
    setErrors({
      ...currentErrors
    });
    return Object.values(currentErrors).every((error) => error === '');
  };

  const handleSubmit: React.FormEventHandler = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (validateInput()) {
      setIsSending(true);
      axios
        .post('/api/email', { ...values })
        .then((response) => {
          if (response.status === 201) {
            setIsSent(true);
            setValues(initialValues);
            setErrors(initialValues);
          } else {
            setFailSend(true);
          }
        })
        .catch(() => setFailSend(true))
        .finally(() => setIsSending(false));
    }
  };

  return (
    <ContactFormView
      values={values}
      errors={errors}
      minMessageLength={minMessageLength}
      messageHelperText={messageHelperText}
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
      isSent={isSent}
      setIsSent={setIsSent}
      isSending={isSending}
      failSend={failSend}
      setFailSend={setFailSend}
    />
  );
};

export default ContactForm;
