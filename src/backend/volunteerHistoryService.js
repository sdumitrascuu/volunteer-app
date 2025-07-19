import { validateVolunteerHistory } from './validations.js';

const volunteerHistoryData = [
  { volunteerName: 'John Doe', eventName: 'Beach Cleanup', hours: 5 },
];

export function getAllVolunteerHistory() {
  return volunteerHistoryData;
}

export function addVolunteerHistory(record) {
  validateVolunteerHistory(record);
  volunteerHistoryData.push(record);
  return record;
}