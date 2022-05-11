import axiosInstance from "../../helpers/axios";

// const API_URL = "https://api.oginvites.party/guests/all"; // Use env variable

// const token = localStorage.getItem("token");

// const authAxios = axios.create({
//   baseUrl: API_URL,
//   headers: {
//     Authorization: `Token ${token}`,
//   },
// });

const client = async (id) => {
  return await axiosInstance
    .get(`/client/${id}`)
    .then((res) => res.data)
    .catch((error) => error);
};

const clientUpdate = async (userObject) => {
  const { id, userData } = userObject;

  return await axiosInstance
    .post(`/client/update/${id}`, userData)
    .then((res) => res.data)
    .catch((error) => error);
};

const clientService = {
  client,
  clientUpdate,
};

export default clientService;
