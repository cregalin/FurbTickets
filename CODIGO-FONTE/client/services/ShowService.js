import { paramsToQuery } from 'utils/ShowListParamsUtils';
import { mockResponse } from '../mock';
import { fitubServer } from './RoomService';

function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getShows() {
  try {
    return fitubServer.get('shows').then((response) => response.data.data);
  } catch (error) {
    throw new Error(error);
  }
}

export async function getShowsQuery(params) {
  try {
    let query = paramsToQuery(params);
    return fitubServer
      .get(`shows${query ? '?' + query : ''}`)
      .then((response) => response.data.data);
  } catch (error) {
    throw new Error(error);
  }
}

export async function getChairs(sessionId) {
  try {
    return fitubServer
      .get(`sessions/${sessionId}/chairs`)
      .then((response) => response.data);
  } catch (error) {
    throw new Error(error);
  }
}

export async function getShowById(id) {
  try {
    return fitubServer.get(`shows/${id}`).then((response) => response.data);
  } catch (error) {
    throw new Error(error);
  }
}

export function postShow({ title, description, price, troupe }) {
  try {
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
  } catch (error) {
    throw new Error(error);
  }
}

export function putShowSessions(sessionAttributes, spectacleId) {
  try {
    const payload = {
      show: {
        sessions_attributes: sessionAttributes,
      },
    };
    return fitubServer.put(`/shows/${spectacleId}`, payload);
  } catch (error) {
    throw new Error(error);
  }
}
