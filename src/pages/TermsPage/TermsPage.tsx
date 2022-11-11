import * as React from 'react';
import { Container } from '@mui/material';
import Markdown from '../../components/Markdown/Markdown';
import PageTitle from '../../components/PageTitle/PageTitle';
// import terms from '../../assets/markdown/terms.md';
import withAnimation from '../../hooks/withAnimation';

const TermsPage = () => {
  return (
    <Container>
      <PageTitle title={'Terms and Conditions'} />
      {/*<Markdown children={terms} />*/}
    </Container>
  );
};

export default withAnimation(TermsPage);
