import axios from 'axios';
/** Please enter provided Authentication Header */
const axiosApi = axios.create({
    headers: {'Authorization': ''}
});

export default class Api {
    /** Please enter provided URL */
    static getPlayers() {
        return axiosApi.get('');
    }
    static getStatistics() {
        return axiosApi.get('', {
            params: {
                player_ids: "3400,3300",
                language_code: "en"
            }
        });
    }
};