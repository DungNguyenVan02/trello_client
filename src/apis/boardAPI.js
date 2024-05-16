import axios from '~/utils/axios'

export const fetchBoarDetailsAPI = async (boardId) => {
  return axios({
    url: '/boards/' + boardId,
    method: 'GET'
  })
}

export const updateBoarDetailsAPI = async (boardId, data) => {
  return axios({
    url: '/boards/' + boardId,
    method: 'PUT',
    data
  })
}

export const moveCardToDifferentColumnAPI = async (data) => {
  return axios({
    url: '/boards/supports/moving_card',
    method: 'PUT',
    data
  })
}
