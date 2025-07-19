import { describe, test, expect } from '@jest/globals';
import { validateVolunteerHistory } from '../validations.js';

describe('validateVolunteerHistory', () => {
  test('validates correct volunteer data', () => {
    const validData = { volunteerName: 'Aizah', eventName: 'Food Drive', hours: 4 };
    expect(validateVolunteerHistory(validData)).toBe(true);
  });

  test('throws error for missing volunteerName', () => {
    const invalidData = { eventName: 'Food Drive', hours: 4 };
    expect(() => validateVolunteerHistory(invalidData)).toThrow('Volunteer Name is required');
  });

  test('throws error for missing eventName', () => {
    const invalidData = { volunteerName: 'Aizah', hours: 4 };
    expect(() => validateVolunteerHistory(invalidData)).toThrow('Event Name is required');
  });

  test('throws error for invalid hours', () => {
    const invalidData = { volunteerName: 'Aizah', eventName: 'Food Drive', hours: -1 };
    expect(() => validateVolunteerHistory(invalidData)).toThrow('Hours must be between 0 and 1000');
  });
});
