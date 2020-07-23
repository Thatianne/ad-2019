import api from './../../plugins/axios'

export const getList = () => api.get('/users')

export const create = ({ name, email }) => api.post('/users', {
    name,
    email
})

export const update = (id, { name, email }) => api.put(`/users/${id}`, {
    name,
    email
})

export const remove = (id) => api.delete(`/users/${id}`)