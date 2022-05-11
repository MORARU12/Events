import axios from "axios";

const API_URL = "https://api.oginvites.party/auth/login";

// Register user

const register = async (userData) => {
  const response = await axios.post(API_URL, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// Login user

const login = async (userData) => {
  const response = await axios.post(API_URL, userData);
  const { token } = response.data;
  if (token) {
    localStorage.setItem("token", token);
  }

  return response.data;
};

const logout = () => {
  localStorage.removeItem("token");
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
