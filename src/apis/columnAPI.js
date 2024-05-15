import axios from '~/utils/axios'

export const createColumnAPI = (data) => {
  return axios({
    url: '/columns',
    method: 'POST',
    data
  })
}

export const updateColumnAPI = (id, data) => {
  return axios({
    url: '/columns/' + id,
    method: 'PUT',
    data
  })
}
