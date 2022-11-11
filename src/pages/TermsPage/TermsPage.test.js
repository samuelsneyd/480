import * as React from 'react';
import { createRoot } from 'react-dom/client';
import TermsPage from './TermsPage';

jest.mock('../../../static/legal/terms.md', () => () => '<div>Terms</div>');

it('renders TermsPage without crashing', () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  root.render(<TermsPage />);
});
