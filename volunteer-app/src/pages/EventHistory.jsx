import React from 'react';
import {
  Container,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material';

export default function EventHistory() {
  const pastEvents = [
    { id: 1, title: 'Tree Planting', date: '2024-06-10', location: 'West Side', volunteers: 15 },
    { id: 2, title: 'Beach Cleanup', date: '2024-06-01', location: 'South Shore', volunteers: 20 },
  ];

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Event History
      </Typography>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Event Title</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Volunteers Participated</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pastEvents.map((event) => (
            <TableRow key={event.id}>
              <TableCell>{event.title}</TableCell>
              <TableCell>{event.date}</TableCell>
              <TableCell>{event.location}</TableCell>
              <TableCell>{event.volunteers}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
}
