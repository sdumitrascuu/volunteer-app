import { Container, Typography, Button, Table, TableHead, TableRow, TableCell, TableBody,Fab} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export default function AdminDash() {
    const events = [
        {id:1, title:'Food Drive', date: '2024-07-01', location:'Midtown', volunteers:5},
        {id: 2, title: 'Clothing Distribution', date:'2024-07-05', location:'East Side', volunteers:10},
    ];

    return (
        <Container sx = {{ mt:4}}>
            <Typography variant = "h4" gutterBottom>
                Admin Dashboard
            </Typography>

            {/* Events Table*/}
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
                    {events.map(event => (
                        <TableRow Key = {event.id}>
                            <TableCell>{event.title}</TableCell>
                            <TableCell>{event.date}</TableCell>
                            <TableCell>{event.location}</TableCell>
                            <TableCell>{event.volunteers}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            {/* Add Event Button*/}
            <Fab color = "primary" aria-label = "add" sx = {{ position: 'fixed', bottom:24, right: 24}}>
                <AddIcon />
            </Fab>
        </Container>
    );
}
  