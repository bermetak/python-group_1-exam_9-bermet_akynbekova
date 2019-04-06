import axios from 'axios';

const BASE_URL = 'http://localhost:8000/api/v1/';
const ITEMS_URL = BASE_URL + 'items/';
const CATEGORIES_URL = BASE_URL + 'categories/';
const LOGIN_URL = BASE_URL + 'login/';
const TOKEN_LOGIN_URL = '/token-login/';



const instance = axios.create({
    baseURL: BASE_URL
});

export {BASE_URL, ITEMS_URL, CATEGORIES_URL, TOKEN_LOGIN_URL, LOGIN_URL}

export default instance;