import axios from '~/utils/axios'

export const fetchBoarDetailsAPI = async (boardId) => {
  return axios({
    url: '/boards/' + boardId,
    method: 'GET'
  })
}
