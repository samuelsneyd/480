import * as React from 'react';
import { createRoot } from 'react-dom/client';
import FoodPage from './RestaurantsPage';

it('renders RestaurantsPage without crashing', () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  root.render(<FoodPage />);
});
