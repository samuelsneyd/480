import * as React from 'react';
import { createRoot } from 'react-dom/client';
import AboutPage from './AboutPage';

it('renders AboutPage without crashing', () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  root.render(<AboutPage />);
});
