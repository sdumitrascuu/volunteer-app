import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import AdminDashboard from './pages/AdminDash';
import VolunteerDashboard from './pages/VolunteerDash';
import VolunteerMatch from './pages/VolunteerMatch';
import AdminNotifications from './pages/AdminNotifications';
import EventHistory from './pages/EventHistory';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/volunteer" element={<VolunteerDashboard />} />
        <Route path="/match" element={<VolunteerMatch />} />
        <Route path="/notifications" element={<AdminNotifications />} />
        <Route path="/history" element={<EventHistory />} />
      </Routes>
    </Router>
  );
}

export default App;

