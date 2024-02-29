import axios from "axios";

axios.defaults.baseURL = "https://www.omdbapi.com/?&apikey=8aee8fea&";

export const feachFilms = async (query, page) => {
  const response = await axios.get("", {
    params: {
      s: query,
      page,
    },
  });

  return response.data;
};
