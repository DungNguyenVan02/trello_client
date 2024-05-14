import axios from '~/utils/axios'

export const createColumnAPI = (data) => {
  return axios({
    url: '/columns',
    method: 'POST',
    data
  })
}
