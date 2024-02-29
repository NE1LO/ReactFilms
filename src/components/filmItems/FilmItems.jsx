import { feachFilms } from "../../films-api";
import { useState, useEffect } from "react";
import css from "./filmItems.module.css";

export const FilmItems = ({ query }) => {
  const [data, setData] = useState(null);
  const [page, setPage] = useState("1");

  useEffect(() => {
    if (query === "") {
      return;
    }

    const getFilms = async () => {
      try {
        const dataFilms = await feachFilms(query);
        setData(dataFilms.Search);
      } catch (error) {
        console.log(error);
      }
    };

    getFilms();
  }, [query]);

  console.log(data);
  return (
    <ul className={css.filmList}>
      {data &&
        data.length > 0 &&
        data.map((value, index) => (
          <li key={index} className={css.filmListItem}>
            <img
              className={css.filmImage}
              src={value.Poster}
              alt={value.Title}
            />
            <h2>{}</h2>
          </li>
        ))}
    </ul>
  );
};
