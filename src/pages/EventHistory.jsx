import React, { useEffect, useState } from 'react';
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
  const [pastEvents, setPastEvents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/volunteerHistory')
      .then(res => res.json())
      .then(data => setPastEvents(data))
      .catch(err => console.error('Error fetching event history:', err));
  }, []);

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Event History
      </Typography>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Volunteer Name</TableCell>
            <TableCell>Event Name</TableCell>
            <TableCell>Hours</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pastEvents.map((record, index) => (
            <TableRow key={index}>
              <TableCell>{record.volunteerName}</TableCell>
              <TableCell>{record.eventName}</TableCell>
              <TableCell>{record.hours}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
}
