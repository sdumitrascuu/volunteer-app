
import React, { useEffect, useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Divider,
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import Papa from 'papaparse';

export default function Reports() {
  const [volunteerRows, setVolunteerRows] = useState([]);
  const [eventRows, setEventRows] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/reports/volunteers')
      .then((r) => r.json())
      .then(setVolunteerRows)
      .catch(console.error);

    fetch('http://localhost:3001/api/reports/events')
      .then((r) => r.json())
      .then(setEventRows)
      .catch(console.error);
  }, []);

  /* --------- helpers --------- */
  const downloadCSV = (data, filename) => {
    const csv = Papa.unparse(data);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
  };

  const downloadPDF = (title, headers, body, filename) => {
    const doc = new jsPDF();
    doc.text(title, 14, 15);
    doc.autoTable({ head: [headers], body });
    doc.save(filename);
  };

  /* --------- render --------- */
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Reports
      </Typography>

      {/* Volunteers */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
        <Typography variant="h6">Volunteer Participation</Typography>
        <Box>
          <Button
            sx={{ mr: 1 }}
            variant="outlined"
            onClick={() =>
              downloadCSV(volunteerRows, 'volunteer_participation.csv')
            }
          >
            CSV
          </Button>
          <Button
            variant="outlined"
            onClick={() =>
              downloadPDF(
                'Volunteer Participation',
                ['Volunteer', 'Event', 'Date', 'Hours'],
                volunteerRows.map((r) => [r.volunteer, r.event, r.date, r.hours]),
                'volunteer_participation.pdf'
              )
            }
          >
            PDF
          </Button>
        </Box>
      </Box>

      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Volunteer</TableCell>
            <TableCell>Event</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Hours</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {volunteerRows.map((row, i) => (
            <TableRow key={i}>
              <TableCell>{row.volunteer}</TableCell>
              <TableCell>{row.event}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.hours}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Divider sx={{ my: 4 }} />

      {/* Events */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
        <Typography variant="h6">Event Details &amp; Assignments</Typography>
        <Box>
          <Button
            sx={{ mr: 1 }}
            variant="outlined"
            onClick={() => downloadCSV(eventRows, 'event_details.csv')}
          >
            CSV
          </Button>
          <Button
            variant="outlined"
            onClick={() =>
              downloadPDF(
                'Event Details',
                ['Event', 'Date', 'Location', 'Volunteers'],
                eventRows.map((e) => [
                  e.title,
                  e.date,
                  e.location,
                  (e.volunteers || []).join(', '),
                ]),
                'event_details.pdf'
              )
            }
          >
            PDF
          </Button>
        </Box>
      </Box>

      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Event</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Volunteers</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {eventRows.map((event) => (
            <TableRow key={event.id}>
              <TableCell>{event.title}</TableCell>
              <TableCell>{event.date}</TableCell>
              <TableCell>{event.location}</TableCell>
              <TableCell>{(event.volunteers || []).join(', ')}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
}
