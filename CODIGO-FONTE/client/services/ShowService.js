import {paramsToQuery} from 'utils/ShowListParamsUtils'

const axios = require('axios');

const fitubServer = axios.create({
  baseURL: 'https://6f899297d97b.ngrok.io',
  timeout: 1000,
  headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
});

function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getShows(params) {
  return fitubServer.get(`shows${paramsToQuery(params)}`).then(response => response.data.data);
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
