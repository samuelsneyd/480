import * as React from 'react';
import { Route, Routes, useLocation } from 'react-router';
import AboutPage from './pages/AboutPage/AboutPage';
import AccommodationPage from './pages/AccommodationPage/AccommodationPage';
import At480Page from './pages/Features/At480Page/At480Page';
import BookingPage from './pages/BookingPage/BookingPage';
import ContactPage from './pages/ContactPage/ContactPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import FAQPage from './pages/FAQPage/FAQPage';
import FeaturesPage from './pages/FeaturesPage/FeaturesPage';
import HomePage from './pages/HomePage/HomePage';
import LocationPage from './pages/LocationPage/LocationPage';
import OceanPage from './pages/Features/OceanPage/OceanPage';
import OtherPage from './pages/Features/OtherPage/OtherPage';
import RestaurantsPage from './pages/Features/RestaurantsPage/RestaurantsPage';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path={'/'} element={<HomePage />} />
      <Route path={'accommodation'} element={<AccommodationPage />} />
      <Route path={'location'} element={<LocationPage />} />
      <Route path={'features'}>
        <Route path={''} element={<FeaturesPage />} />
        <Route path={'480'} element={<At480Page />} />
        <Route path={'ocean'} element={<OceanPage />} />
        <Route path={'restaurants'} element={<RestaurantsPage />} />
        <Route path={'other'} element={<OtherPage />} />
      </Route>
      <Route path={'book'} element={<BookingPage />} />
      <Route path={'contact'} element={<ContactPage />} />
      <Route path={'about'} element={<AboutPage />} />
      <Route path={'faq'} element={<FAQPage />} />
      <Route path={'*'} element={<ErrorPage />} />
    </Routes>
  );
};

export default AnimatedRoutes;
