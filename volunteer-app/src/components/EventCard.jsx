import { Card, CardContent, Typography, Button } from '@mui/material';

export default function EventCard({ event }) {
  return (
    <Card sx={{ margin: 2 }}>
      <CardContent>
        <Typography variant="h6">{event.title}</Typography>
        <Typography>Location: {event.location}</Typography>
        <Typography>Time: {event.time}</Typography>
        <Typography>Volunteers Needed: {event.need}</Typography>
        <Button variant="contained" sx={{ mt: 1 }}>
          Register
        </Button>
      </CardContent>
    </Card>
  );
}
