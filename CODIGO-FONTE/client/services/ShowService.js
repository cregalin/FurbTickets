import {paramsToQuery} from 'utils/ShowListParamsUtils'
import { mockResponse } from '../mock';

const axios = require('axios');

const fitubServer = axios.create({
  baseURL: 'http://f0404a5dc613.ngrok.io',
  timeout: 1000,
  headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
});

function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getShows(params) {
  // await timeout(800)
  // return mockResponse
  let query = paramsToQuery(params)
  return fitubServer.get(`shows${query ? '?' + query : ''}`).then(response => response.data.data);
}

export async function getShowById(id) {
  return fitubServer.get(`shows/${id}`)
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
