const axios = require('axios');

const fitubServer = axios.create({
  baseURL: 'https://3c49a41ff6b3.ngrok.io',
  timeout: 1000,
  headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
});

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
