import * as React from 'react';
import { createRoot } from 'react-dom/client';
import FAQPage from './FAQPage';

jest.mock('../../../static/faq/faq.md', () => () => '<div>FAQ</div>');

it('renders FAQPage without crashing', () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  root.render(<FAQPage />);
});
