
import axios from 'axios';

const BASE_URL = `http://52.73.189.181`

const API = axios.create({
    baseURL: BASE_URL
})

const product = {
    apply: payload => API.post('applyProduct', payload)
}

export default {
    product
}