import { MoviesIndex } from "./MoviesIndex"
import axios from "axios";
import {useState, useEffect} from "react";

export function MoviesPage() {
  const [movies, setMovies] = useState([]);

  const handleIndex = () => {
    console.log("handleIndex");
    axios.get("./movies.json").then((response) => {
      console.log(response.data);
    });
  };

  useEffect(handleIndex, []);
  
  return (
    <main>
      <MoviesIndex movies={movies} />
    </main>
  )
}