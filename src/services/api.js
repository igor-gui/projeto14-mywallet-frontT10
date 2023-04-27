import axios from "axios";

const api = axios.create({ baseURL: process.env.REACT_APP_BASE_URL });

export function cadastrar(data) {
    const promise = api.post('/cadastro', data)
    return promise
}


export function entrar(data) {
    const promise = api.post('/login', data)
    return promise
}

export function postTransaction(form, token) {
    const config = {
        headers: {
            authorization: `Bearer ${token}`
        }
    }
    const promise = api.post(`/nova-transacao/${form.type}`, form, config)
    return promise;
}

export function getTransactions(token){
    const config = {
        headers: {
            authorization: `Bearer ${token}`
        }
    }
    const promise = api.get('/transactions', config)
    return promise;
}