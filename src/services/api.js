import axios from "axios";

const api = axios.create({ baseURL: process.env.REACT_APP_BASE_URL });

export function cadastrar(data) {
    const promise = api.post('/cadastrar', data)
    return promise
}


export function entrar(data) {
    const promise = api.post('/sign-in', data)
    return promise
}

export function postTransaction(data, type) {
    const promise = api.post(`/nova-transacao/${type}`, data)
    return promise;
}

export function getTransactions(data){
    const promise = api.get('/transactions', data)
    return promise;
}