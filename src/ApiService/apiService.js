import axios from "axios";

export const getApi = async ({ images, pageNumber = 1 }) => {
  const baseURL = "https://pixabay.com/api/";
  const image_type = "photo";
  const orientation = "horizontal";
  const per_page = "12";
  const key = "23000349-69c2b90ac6d14094754d4ad57";

  const res = await axios.get(
    `${baseURL}?image_type=${image_type}&orientation=${orientation}&q=${images}&page=${pageNumber}&per_page=${per_page}&key=${key}`
  );

  return res;
};