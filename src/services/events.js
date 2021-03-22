import axios from 'axios';
const baseUrl = 'http://localhost:3001/events';

const getEvents = async () => {
    const response = await axios.get(baseUrl);
    return response.data;

};

const createNew = async event => {
    const response = await axios.post(baseUrl, event);
    return response.data;

};
export default { getEvents, createNew };