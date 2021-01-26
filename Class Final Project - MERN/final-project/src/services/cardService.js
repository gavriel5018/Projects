import http from './httpService';
import { apiUrl } from '../config.json';

export function editCard(card) {
    const cardId = card._id
    delete card._id;
    return http.put(`${apiUrl}/cards/${cardId}`, card)
}

export function createCard(card) {
    return http.post(`${apiUrl}/cards`, card)
}

export function getMyCards() {
    return http.get(`${apiUrl}/cards/my-cards`)
}
export function getCard(cardId){
    return http.get(`${apiUrl}/cards/${cardId}`)
  }

  export function getAllCards(card) {
      return http.get(`${apiUrl}/cards/cards`, card)
  }

  export function deleteCard(cardId) {
      return http.delete(`${apiUrl}/cards/${cardId}`)
  }



const service = {
    createCard,
    getMyCards,
    editCard,
    getCard,
    getAllCards,
    deleteCard
};

export default service;