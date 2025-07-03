import React from 'react';
import {
  Container,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Fab,
  Button,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import EventForm from '../components/EventForm';

export default function AdminDash() {
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
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Admin Dashboard
      </Typography>

      {/* Navigation Buttons */}
      <div style={{ marginBottom: '20px' }}>
        <Button component={Link} to="/" variant="outlined" sx={{ mr: 2 }}>
          Login
        </Button>
        <Button component={Link} to="/volunteer" variant="outlined" sx={{ mr: 2 }}>
          Volunteer Dashboard
        </Button>
        <Button component={Link} to="/match" variant="outlined" sx={{ mr: 2 }}>
          Match Volunteers
        </Button>
        <Button component={Link} to="/notifications" variant="outlined" sx={{ mr: 2 }}>
          Notifications
        </Button>
        <Button component={Link} to="/history" variant="outlined">
          History
        </Button>
      </div>

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

      {/* Show Form */}
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
  );
}
