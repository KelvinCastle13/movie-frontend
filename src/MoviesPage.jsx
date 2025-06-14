import { MoviesIndex } from "./MoviesIndex";
import axios from "axios";
import {useState, useEffect} from "react";
import { MoviesNew } from "./MoviesNew";

export function MoviesPage() {
  const [movies, setMovies] = useState([]);

  const handleIndex = () => {
    console.log("handleIndex");
    axios.get("./movies.json").then((response) => {
      console.log(response.data);
    });
  };

  const handleCreate = (params, successCallback) => {
    console.log("handleCreate");
    axios.post("/movies.json", params).then((response) => {
      setMovies([...movies, response.data]);
      successCallback();
    });
  }

  useEffect(handleIndex, []);
  
  return (
    <main>
      {/* <MoviesNew /> */}
      <MoviesNew onCreate={handleCreate} />
      <MoviesIndex movies={movies} />
    </main>
  )
}