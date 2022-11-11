import * as React from 'react';
import { createRoot } from 'react-dom/client';
import ContactPage from './ContactPage';

it('renders ContactPage without crashing', () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  root.render(<ContactPage />);
});
