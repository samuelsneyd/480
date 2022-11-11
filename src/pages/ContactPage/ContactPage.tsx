import * as React from 'react';
import Container from '@mui/material/Container';
import ContactForm from '../../components/ContactForm/ContactForm';
import PageTitle from '../../components/PageTitle/PageTitle';
import withAnimation from '../../hooks/withAnimation';

const ContactPage = () => {
  return (
    <Container>
      <PageTitle title={'Contact us'} />
      <ContactForm />
    </Container>
  );
};

export default withAnimation(ContactPage);
