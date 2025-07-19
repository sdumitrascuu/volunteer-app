import React from 'react';
import {
  Container,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from '@mui/material';

export default function VolunteerMatch() {
  const events = [
    { id: 1, title: 'Food Drive', location: 'Midtown', volunteers: ['Sam', 'Alex'] },
    { id: 2, title: 'Clothing Distribution', location: 'East Side', volunteers: ['Jamie'] },
  ];

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Volunteer Matching
      </Typography>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Event</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Volunteers Assigned</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {events.map((event) => (
            <TableRow key={event.id}>
              <TableCell>{event.title}</TableCell>
              <TableCell>{event.location}</TableCell>
              <TableCell>{event.volunteers.join(', ')}</TableCell>
              <TableCell>
                <Button variant="outlined">Match More</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
}
