import axios from 'axios';
/** Please enter provided Authentication Header */
const axiosApi = axios.create({
    headers: {'Authorization': 'Please enter provided Authentication Header'}
});

export default class Api {
    /** Please enter provided URL */
    static getPlayers() {
        return axiosApi.get('Please enter provided URL');
    }
};