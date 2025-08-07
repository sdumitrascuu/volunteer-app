// src/pages/AdminDash.jsx
import React from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Container,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Fab,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EventForm from '../components/EventForm';
import { useNavigate } from 'react-router-dom';

export default function AdminDash() {
  const navigate = useNavigate();

  const [events, setEvents] = React.useState([
    { id: 1, title: 'Food Drive', date: '2024-07-01', location: 'Midtown', volunteers: 5 },
    { id: 2, title: 'Clothing Distribution', date: '2024-07-05', location: 'East Side', volunteers: 10 },
  ]);

  const [showForm, setShowForm] = React.useState(false);

  const handleAddEvent = (newEvent) => {
    setEvents((prevEvents) => [
      ...prevEvents,
      { ...newEvent, id: prevEvents.length + 1, volunteers: 0 },
    ]);
    setShowForm(false);
  };

  return (
    <>
      {/* Top Nav Bar */}
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" onClick={() => navigate('/admin')}>
            Dashboard
          </Button>
          <Button color="inherit" onClick={() => navigate('/match')}>
            Match Volunteers
          </Button>
          <Button color="inherit" onClick={() => navigate('/notifications')}>
            Notifications
          </Button>
          <Button color="inherit" onClick={() => navigate('/history')}>
            Event History
          </Button>
          {/* ↓↓↓ NEW BUTTON ↓↓↓ */}
          <Button color="inherit" onClick={() => navigate('/reports')}>
            Reports
          </Button>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Admin Dashboard
        </Typography>

        {/* Events Table */}
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Event Title</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Volunteers Needed</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {events.map((event) => (
              <TableRow key={event.id}>
                <TableCell>{event.title}</TableCell>
                <TableCell>{event.date}</TableCell>
                <TableCell>{event.location}</TableCell>
                <TableCell>{event.volunteers}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Event Form */}
        {showForm && (
          <EventForm onClose={() => setShowForm(false)} onSubmit={handleAddEvent} />
        )}

        {/* Floating Action Button */}
        <Fab
          color="primary"
          aria-label="add"
          sx={{ position: 'fixed', bottom: 24, right: 24 }}
          onClick={() => setShowForm(true)}
        >
          <AddIcon />
        </Fab>
      </Container>
    </>
  );
}
