import { paramsToQuery } from 'utils/ShowListParamsUtils';
import { mockResponse } from '../mock';

const axios = require('axios');

const fitubServer = axios.create({
<<<<<<< HEAD
  baseURL: 'https://e539c9e54434.ngrok.io/',
=======
  baseURL: 'https://d7cf6136af83.ngrok.io',
>>>>>>> 5962ee4803a406be34bebb63253e829a0026c4d4
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
