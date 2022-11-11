import * as React from 'react';
import { createRoot } from 'react-dom/client';
import AccommodationPage from './AccommodationPage';

it('renders AccommodationPage without crashing', () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  root.render(<AccommodationPage />);
});
