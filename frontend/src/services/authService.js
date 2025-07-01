import { apiCall } from './api';

export const login = (credentials) => {
  return apiCall('/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials)
  });
};