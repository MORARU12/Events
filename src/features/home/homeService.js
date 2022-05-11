import axiosInstance from "../../helpers/axios";

const home = async () => {
  return await axiosInstance
    .get("/client/all")
    .then((res) => res.data)
    .catch((error) => {
      console.log(error);
      return error;
    });
};

const homeService = {
  home,
};

export default homeService;

// return (await axiosInstance.get("/client/al")).data;
