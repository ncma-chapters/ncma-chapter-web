// Node modules.
import get from 'lodash/get';
// Relative imports.
import request, { API_BASE_URL } from '../../utils/request';

export const createEventRegistration = async (options = {}) => {
  const response = await request(`${API_BASE_URL}/event-registrations`, {
    body: JSON.stringify({
      data: {
        type: 'eventRegistrations',
        attributes: {
          data: {
            company: get(options, 'company'),
            email: get(options, 'email'),
            firstName: get(options, 'firstName'),
            lastName: get(options, 'lastName'),
            title: get(options, 'title'),
          },
        },
        relationships: {
          ticketClass: {
            data: {
              type: 'ticketClasses',
              id: get(options, 'ticketClassID'),
            },
          },
        },
      },
    }),
    method: 'POST',
  });

  return response;
};
