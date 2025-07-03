import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

// Import your custom pages
import Login from './pages/Login.jsx';
import VolunteerDash from './pages/VolunteerDash.jsx';
import AdminDash from './pages/AdminDash.jsx';
import VolunteerMatch from './pages/VolunteerMatch.jsx';
import AdminNotifications from './pages/AdminNotifications.jsx';
import EventHistory from './pages/EventHistory.jsx';
import UserProfileManagement from './pages/UserProfileManagement.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/volunteer" element={<VolunteerDash />} />
        <Route path="/admin" element={<AdminDash />} />
        <Route path="/match" element={<VolunteerMatch />} />
        <Route path="/notifications" element={<AdminNotifications />} />
        <Route path="/history" element={<EventHistory />} />
        <Route path="/profile" element={<UserProfileManagement />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);

