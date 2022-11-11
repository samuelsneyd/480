import * as React from 'react';
import { AnimatePresence } from 'framer-motion';
import { ContextProvider } from './Context';
import AnimatedRoutes from './AnimatedRoutes';
import AppFooter from './components/AppFooter/AppFooter';
import ResponsiveAppBar from './components/ResponsiveAppBar/ResponsiveAppBar';
import withTheme from './hooks/withTheme';

function App() {
  return (
    <ContextProvider>
      <ResponsiveAppBar />
      <AnimatePresence>
        <AnimatedRoutes />
      </AnimatePresence>
      <AppFooter />
    </ContextProvider>
  );
}

export default withTheme(App);
