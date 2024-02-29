import axios from "axios";

axios.defaults.baseURL = "https://www.omdbapi.com/?&apikey=8aee8fea&";

export const feachFilms = async (query) => {
  const response = await axios.get("", {
    params: {
      s: query,
      page: "1",
    },
  });

  return response.data;
};
