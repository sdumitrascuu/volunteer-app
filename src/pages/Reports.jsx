
// src/pages/Reports.jsx
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
