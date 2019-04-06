import axios from 'axios';

const BASE_URL = 'http://localhost:8000/api/v1/';
const ITEMS_URL = BASE_URL + 'items/';


const instance = axios.create({
    baseURL: BASE_URL
});

export {BASE_URL, ITEMS_URL}

export default instance;