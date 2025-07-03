import React from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  OutlinedInput,
  Chip,
} from '@mui/material';

const skillsOptions = ['First Aid', 'Cooking', 'Driving', 'Event Setup', 'Translation'];
const urgencyOptions = ['Low', 'Medium', 'High'];

export default function EventForm({ onClose }) {
  const [eventData, setEventData] = React.useState({
    title: '',
    description: '',
    location: '',
    skills: [],
    urgency: '',
    date: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Event:', eventData);
    onClose(); // Close the form (callback from parent)
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ p: 2, maxWidth: 600, mx: 'auto' }}>
      <Typography variant="h6" gutterBottom>
        Create New Event
      </Typography>

      <TextField
        fullWidth
        required
        label="Event Name"
        name="title"
        inputProps={{ maxLength: 100 }}
        margin="normal"
        value={eventData.title}
        onChange={handleChange}
      />

      <TextField
        fullWidth
        required
        multiline
        label="Description"
        name="description"
        margin="normal"
        value={eventData.description}
        onChange={handleChange}
      />

      <TextField
        fullWidth
        required
        multiline
        label="Location"
        name="location"
        margin="normal"
        value={eventData.location}
        onChange={handleChange}
      />

      <FormControl fullWidth margin="normal">
        <InputLabel>Required Skills</InputLabel>
        <Select
          multiple
          name="skills"
          value={eventData.skills}
          onChange={handleChange}
          input={<OutlinedInput label="Required Skills" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
        >
          {skillsOptions.map((skill) => (
            <MenuItem key={skill} value={skill}>
              {skill}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth margin="normal">
        <InputLabel>Urgency</InputLabel>
        <Select name="urgency" value={eventData.urgency} onChange={handleChange} required>
          {urgencyOptions.map((urgency) => (
            <MenuItem key={urgency} value={urgency}>
              {urgency}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <TextField
        fullWidth
        required
        name="date"
        type="date"
        margin="normal"
        value={eventData.date}
        onChange={handleChange}
        InputLabelProps={{ shrink: true }}
      />

      <Button type="submit" variant="contained" sx={{ mt: 2 }}>
        Save Event
      </Button>
    </Box>
  );
}
