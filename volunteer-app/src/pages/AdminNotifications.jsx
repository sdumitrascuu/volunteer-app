import React from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

export default function AdminNotifications() {
  const notifications = [
    'New volunteer signed up for Food Drive.',
    'Clothing Distribution event updated.',
    'Reminder: East Side event is tomorrow.',
  ];

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Admin Notifications
      </Typography>
      <List>
        {notifications.map((note, index) => (
          <ListItem key={index}>
            <ListItemText primary={note} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
