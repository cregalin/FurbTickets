import { paramsToQuery } from 'utils/ShowListParamsUtils';
import { mockResponse } from '../mock';

const axios = require('axios');

export const fitubServer = axios.create({
  baseURL: 'http://eff6a6d89f5d.ngrok.io/',
  timeout: 3000,
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
