import { useState, useEffect } from "react";
import { Header } from "./components/header/Header";
import { FilmItems } from "./components/filmItems/FilmItems";
import "./App.css";

function App() {
  const [query, setQuery] = useState("ninja");

  const handleSearchSubmit = (value) => {
    setQuery(value);
  };

  return (
    <>
      <Header onSubmit={handleSearchSubmit} />
      <main>
        <FilmItems query={query} />
      </main>
    </>
  );
}

export default App;
