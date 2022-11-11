import * as React from 'react';
import { Container } from '@mui/material';
import Markdown from '../../components/Markdown/Markdown';
import PageTitle from '../../components/PageTitle/PageTitle';
// import privacy from '../../assets/markdown/privacy.md';
import withAnimation from '../../hooks/withAnimation';

const PrivacyPage = () => {
  return (
    <Container>
      <PageTitle title={'Privacy Policy'} />
      {/*<Markdown children={privacy} />*/}
    </Container>
  );
};

export default withAnimation(PrivacyPage);
