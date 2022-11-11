import * as React from 'react';
import { createRoot } from 'react-dom/client';
import OtherPage from './OtherPage';

it('renders OtherPage without crashing', () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  root.render(<OtherPage />);
});
