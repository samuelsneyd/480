import * as React from 'react';
import ReactMarkdown from 'markdown-to-jsx';
import { Box, Link, Typography } from '@mui/material';
import { ReactNode } from 'react';

const options = {
  overrides: {
    h1: {
      component: Typography,
      props: {
        gutterBottom: true,
        variant: 'h4'
      }
    },
    h2: {
      component: Typography,
      props: { gutterBottom: true, variant: 'h6' }
    },
    h3: {
      component: Typography,
      props: { gutterBottom: true, variant: 'subtitle1' }
    },
    h4: {
      component: Typography,
      props: {
        gutterBottom: true,
        variant: 'caption',
        paragraph: true
      }
    },
    p: {
      component: Typography,
      props: { paragraph: true }
    },
    a: { component: Link },
    li: {
      component: (props: any) => (
        <Box component={'li'} sx={{ mt: 1 }}>
          <Typography component={'span'} {...props} />
        </Box>
      )
    }
  }
};

interface MarkdownProps {
  children: string;
}

const Markdown = ({ children }: MarkdownProps) => {
  return <ReactMarkdown options={options} children={children} />;
};

export default Markdown;
