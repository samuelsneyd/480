import * as React from 'react';
import { createRoot } from 'react-dom/client';
import AnimatedRoutes from './AnimatedRoutes';

it('renders AnimatedRoutes without crashing', () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  root.render(<AnimatedRoutes />);
});
