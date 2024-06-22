import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8081/api', 
});

export const registerUser = async (userData: any) => {
  try {
    const response = await api.post('/auth/register', userData);
    return response.data; 
  } catch (error) {
    throw error; 
  }
};

export const loginUser = async (userData: any) => {
  try {
    const response = await api.post('/auth/login', userData);
    return response.data; 
  } catch (error) {
    throw error; 
  }
};