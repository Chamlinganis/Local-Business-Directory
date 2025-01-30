import axios from "axios";

const API_BASE_URL = "http://localhost:3001/api"; 

export const AuthService = {
  async signUp(data) {
    const response = await axios.post(`${API_BASE_URL}/auth/signup`, data);
    return response.data;
  },

  async login(data) {
    const response = await axios.post(`${API_BASE_URL}/auth/login`, data);
    return response.data;
  },

  async verifyEmail(token) {
    const response = await axios.get(`${API_BASE_URL}/auth/verify`, {
      params: { token },
    });
    return response.data;
  },
};