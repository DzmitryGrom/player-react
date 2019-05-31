import axios from 'axios';
import { API_HOST, API_USERS, API_TRAKS } from '../../config';

axios.defaults.baseURL = API_HOST;

export const getTracks = async () => {
  const data = await axios(API_USERS + '415957/' + API_TRAKS + '7172aa9d8184ed052cf6148b4d6b8ae6');
  return data;
};