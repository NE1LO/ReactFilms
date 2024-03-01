import toast, { Toaster } from "react-hot-toast";
import { useState, useEffect } from "react";
import { Header } from "./components/header/Header";
import { FilmItems } from "./components/filmItems/FilmItems";
import "./App.css";

function App() {
  const [query, setQuery] = useState("ninja");
  const [page, setPage] = useState(1);

  const handleSearchSubmit = (value) => {
    setQuery(value);
    setPage(1);
  };

  const handleMoreFilms = () => {
    setPage(page + 1);
  };

  return (
    <>
      <Header onSubmit={handleSearchSubmit} />
      <main>
        <Toaster
          toastOptions={{
            style: {
              border: "1px solid #fff",
              padding: "16px",
              color: "#fff",
              backgroundColor: "#3f3f3f",
            },
          }}
        />
        <FilmItems query={query} page={page} moreFilms={handleMoreFilms} />
      </main>
    </>
  );
}

export default App;
