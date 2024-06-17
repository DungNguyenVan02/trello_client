import axios from '~/utils/axios'

export const createCardAPI = (data) => {
  return axios({
    url: '/cards',
    method: 'POST',
    data
  })
}

export const deleteCardAPI = (columnId, cardId) => {
  return axios({
    url: `/cards/${columnId}/${cardId}`,
    method: 'DELETE'
  })
}
