import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

// Import your custom pages
import Login from './pages/login.jsx';
import VolunteerDash from './pages/VolunteerDash.jsx';
import AdminDash from './pages/AdminDash.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/volunteer" element={<VolunteerDash />} />
        <Route path="/admin" element={<AdminDash />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);

