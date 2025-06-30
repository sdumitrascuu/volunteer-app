import { Container } from '@mui/material';
import ProfileCard from '../components/ProfileCard';
import EventCard from '../components/EventCard';
export default function VolunteerDash() {
    const user = {
        name:'Jumana', 
        location:'Houston', 
        skills:['First Aid', 'Organizing'],
    };
    
  
    const events = [
        { id: 1, title: 'Beach Cleanup', location: 'Galveston', time: '9:00 AM', need: 10 },
        { id: 2, title: 'Food Bank Helper', location: 'Downtown', time: '1:00 PM', need: 5 },
    ];
  
    return (
        <Container>
            <ProfileCard user ={user}/>
            {events.map((event) => (
                <EventCard key = {event.id} event = {event} />
            ))}
        </Container>
    );
}
    