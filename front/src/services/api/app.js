import api from './../../plugins/axios'

export const raffle = () => api.post('/raffle')