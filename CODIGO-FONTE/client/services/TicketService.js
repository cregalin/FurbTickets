import {paramsToQuery} from 'utils/ShowListParamsUtils'

const axios = require('axios');

const fitubServer = axios.create({
  baseURL: 'https://94f93266807e.ngrok.io',
  timeout: 1000,
  headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
});

export const confirmTickets = (payload) => {
  return fitubServer.post('/tickets/confirm', payload)
}

export const saveTickets = (payload) => {
  return fitubServer.post('/tickets', payload)
}
