import { Card, CardContent, Typography } from '@mui/material';

export default function ProfileCard({ user }) {
  return (
    <Card sx={{ margin: 2 }}>
      <CardContent>
        <Typography variant="h6">{user.name}</Typography>
        <Typography>Location: {user.location}</Typography>
        <Typography>Skills: {user.skills.join(', ')}</Typography>
      </CardContent>
    </Card>
  );
}
