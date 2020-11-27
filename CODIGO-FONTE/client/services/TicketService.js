import { fitubServer } from './RoomService';

export const validateTicket = (code) => {
  try {
    return fitubServer.get(`/tickets/${code}/validate`).then(({ data }) => {
      return data.valid;
    });
  } catch (error) {
    throw new Error(error);
  }
};

export const confirmTickets = (payload) => {
  try {
    return fitubServer.post('/tickets/confirm', payload);
  } catch (error) {
    throw new Error(error);
  }
};

export const saveTickets = (payload) => {
  try {
    return fitubServer.post('/tickets', payload);
  } catch (error) {
    throw new Error();
  }
};
