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

export function postTransaction(type, token) {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const promise = api.post(`/nova-transacao/${type}`, config)
    return promise;
}

export function getTransactions(token){
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const promise = api.get('/transactions', config)
    return promise;
}