
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDash';
import VolunteerDashboard from './pages/VolunteerDash';
import VolunteerMatch from './pages/VolunteerMatch';
import AdminNotifications from './pages/AdminNotifications';
import EventHistory from './pages/EventHistory';
import UserProfileManagement from './pages/UserProfileManagement';
import Reports from './pages/Reports';

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
        <Route path="/profile" element={<UserProfileManagement />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </Router>
  );
}

export default App;
