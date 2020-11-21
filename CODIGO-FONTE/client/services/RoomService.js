import {paramsToQuery} from 'utils/ShowListParamsUtils'
import { mockResponse } from '../mock';

const axios = require('axios');

const fitubServer = axios.create({
  baseURL: 'http://fbe2c0c30d3f.ngrok.io/',
  timeout: 1000,
  headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
});

export const saveRoom = (room) => {
  room["room_type"] = 1
  room["quantity_chairs"] = +room["quantity_chairs"]
  const payload = {
    room
  };
  return fitubServer.post('/rooms', payload)
}
