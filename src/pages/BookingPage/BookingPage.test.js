import * as React from 'react';
import { createRoot } from 'react-dom/client';
import BookingPage from './BookingPage';

it('renders BookingPage without crashing', () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  root.render(<BookingPage />);
});
