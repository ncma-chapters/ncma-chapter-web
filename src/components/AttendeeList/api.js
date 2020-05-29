// Relative imports.
import request, { API_BASE_URL } from '../../utils/request';

export const fetchEventRegistrations = async (eventID, passcode) => {
  const response = await request(
    `${API_BASE_URL}/events/${eventID}/event-registrations?passcode=${encodeURIComponent(passcode)}`,
  );

  // Normalize response.
  return response;
};
