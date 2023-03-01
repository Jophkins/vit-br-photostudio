import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/MainPage';
import EventsPage from '../../pages/EventsPage';
import PhotosPage from '../../pages/PhotosPage';
import NotFoundPage from '../../pages/NotFoundPage';
import PortfolioPage from '../../pages/PortfolioPage';
import ContactsPage from '../../pages/ContactsPage';
import RequestPhoto from '../../pages/RequestPhoto';
import Event from '../Event';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/events" element={<EventsPage />} />
      <Route path="/request" element={<RequestPhoto />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
      <Route path="/contacts" element={<ContactsPage />} />
      <Route path="/photos" element={<PhotosPage />} />
      <Route path="/events/:id" element={<Event />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRouter;
