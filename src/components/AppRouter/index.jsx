import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/MainPage';
import EventsPage from '../../pages/EventsPage';
import PhotosPage from '../../pages/PhotosPage';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/events" element={<EventsPage />} />
      <Route path="/photos" element={<PhotosPage />} />
    </Routes>
  );
};

export default AppRouter;
