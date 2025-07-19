import { Card, CardContent, Typography, Button } from '@mui/material';

export default function EventCard({ event , onRegister}) {
  return (
    <Card sx={{ margin: 2 }}>
      <CardContent>
        <Typography variant="h6">{event.title}</Typography>
        <Typography>Location: {event.location}</Typography>
        <Typography>Time: {event.time}</Typography>
        <Typography>Volunteers Needed: {event.need}</Typography>
        <Button 
        variant="contained" 
        color = "secondary"
        sx={{ mt: 1 }}
        disabled = {event.need ==0}
        onClick = {() => onRegister?.(event.id)} //only triggered if on register is passed 
        >
          {event.need ===0 ? 'Full':'Register'}
          
        </Button>
      </CardContent>
    </Card>
  );
}
