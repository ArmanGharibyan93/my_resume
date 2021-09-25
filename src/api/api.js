import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://pyunik-main-api.herokuapp.com/api'
})

export const cvApi = {
    getCv(lang){
        return instance.get(`/${lang}`);
    }
}