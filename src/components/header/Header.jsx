import { useState } from "react";
import styles from "./header.module.css";

export const Header = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSubmit(value);
  };

  return (
    <header className={styles.header}>
      <button className={styles.buttonFilms}>Icon</button>

      <form onSubmit={handleSearchSubmit}>
        <input
          className={styles.SearchFilms}
          type="text"
          value={value}
          onChange={handleChange}
          name="film"
          id=""
          placeholder="Search movie"
        />
        <button className={styles.searchFilmsButton} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};
