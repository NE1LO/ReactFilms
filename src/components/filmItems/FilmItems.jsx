import { feachFilms } from "../../films-api";
import { useState, useEffect } from "react";
import css from "./filmItems.module.css";
import toast from "react-hot-toast";

export const FilmItems = ({ query, page, moreFilms }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (query === "") {
      return;
    }

    const getFilms = async () => {
      try {
        const dataFilms = await feachFilms(query, page);
        setData((prevData) => [...prevData, ...dataFilms.Search]);
      } catch (error) {
        toast.error("Ooops, something is not working");
        console.log(error);
      }
    };

    getFilms();
  }, [query, page]);

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
          </li>
        ))}
      <button onClick={moreFilms} type="button">
        Next Page
      </button>
    </ul>
  );
};
