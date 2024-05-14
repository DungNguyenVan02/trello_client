import axios from '~/utils/axios'

export const createCardAPI = (data) => {
  return axios({
    url: '/cards',
    method: 'POST',
    data
  })
}
