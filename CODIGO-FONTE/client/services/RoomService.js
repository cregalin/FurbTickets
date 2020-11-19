import {paramsToQuery} from 'utils/ShowListParamsUtils'
import { mockResponse } from '../mock';

const axios = require('axios');

const fitubServer = axios.create({
  baseURL: 'http://934df17ebedb.ngrok.io',
  timeout: 1000,
  headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
});

export const saveRoom = (room) => {
  room["room_type"] = 1
  const payload = {
    room
  };
  return fitubServer.post('/rooms', payload)
}
