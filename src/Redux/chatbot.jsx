import axios from 'axios';
const API_BASE_URL = 'http://127.0.0.1:8000'; // Replace with your actual API base URL

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  }
});

export const sendMessage = async (message) => {
    try {
        const response = await api.post('api/chatbot/chat', { "query": message });
        return response.data;
    } catch (error) {
        console.error('Error sending message:', error);

        throw error;
    }
};
