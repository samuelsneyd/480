import * as React from 'react';
import { createRoot } from 'react-dom/client';
import FeaturesPage from './FeaturesPage';

it('renders FeaturesPage without crashing', () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  root.render(<FeaturesPage />);
});
