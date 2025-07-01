import { apiCall } from './api';

export const getUsers = () => {
  return apiCall('/users');
};