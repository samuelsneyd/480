import * as React from 'react';
import { createRoot } from 'react-dom/client';
import PrivacyPage from './PrivacyPage';

jest.mock('../../../static/legal/privacy.md', () => () => '<div>Privacy</div>');

it('renders PrivacyPage without crashing', () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  root.render(<PrivacyPage />);
});
