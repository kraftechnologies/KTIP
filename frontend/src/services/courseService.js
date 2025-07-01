import { apiCall } from './api';

export const getCourses = () => {
  return apiCall('/courses');
};