import { getAllVolunteerHistory, addVolunteerHistory } from './volunteerHistoryService.js';

export function getVolunteerHistory(req, res) {
  const data = getAllVolunteerHistory();
  res.json(data);
}

export function postVolunteerHistory(req, res) {
  try {
    const addedRecord = addVolunteerHistory(req.body);
    res.status(201).json(addedRecord);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}