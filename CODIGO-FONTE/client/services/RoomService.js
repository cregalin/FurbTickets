import { paramsToQuery } from 'utils/ShowListParamsUtils';
import { mockResponse } from '../mock';

const axios = require('axios');

const fitubServer = axios.create({
  baseURL: 'https://e539c9e54434.ngrok.io/',
  timeout: 1000,
  headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
});

export const saveRoom = (description) => {
  try {
    const payload = {
      description: description,
    };
    return fitubServer.post('/rooms', payload);
  } catch (error) {
    throw new Error(error);
  }
};

export const getRooms = () => {
  try {
    return fitubServer.get('/rooms');
  } catch (error) {
    throw new Error(error);
  }
};
