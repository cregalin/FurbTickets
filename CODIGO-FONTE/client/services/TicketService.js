import {paramsToQuery} from 'utils/ShowListParamsUtils'

const axios = require('axios');

const fitubServer = axios.create({
  baseURL: 'http://eff6a6d89f5d.ngrok.io',
  timeout: 1000,
  headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
});

export const confirmTickets = (payload) => {
  return fitubServer.post('/tickets/confirm', payload)
}

export const saveTickets = (payload) => {
  return fitubServer.post('/tickets', payload)
}
