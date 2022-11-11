import * as React from 'react';
import Container from '@mui/material/Container';
// import faq from '../../assets/markdown/faq.md';
import Markdown from '../../components/Markdown/Markdown';
import PageTitle from '../../components/PageTitle/PageTitle';
import withAnimation from '../../hooks/withAnimation';

const FAQPage = () => {
  return (
    <Container>
      <PageTitle title={'FAQ'} />
      {/*<Markdown children={faq} />*/}
    </Container>
  );
};

export default withAnimation(FAQPage);
