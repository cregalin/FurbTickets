import { mockResponse } from './mock';

const axios = require('axios');

const fitubServer = axios.create({
  baseURL: 'https://5fc1644c8694.ngrok.io',
  timeout: 1000,
  headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
});

function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getShows() {
  await timeout(1200);
  return mockResponse;
  return fitubServer.get('/shows');
}

export function postShow({ title, description, price, troupe }) {
  const payload = {
    show: {
      title: title,
      description: description,
      price: price,
      troupe: troupe,
      room_id: 3,
    },
  };
  return fitubServer.post('/shows', payload);
}

export function putShowSessions(sessionAttributes, spectacleId) {
  const payload = {
    show: {
      sessions_attributes: sessionAttributes,
    },
  };
  return fitubServer.put(`/shows/${spectacleId}`, payload);
}
