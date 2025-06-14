import { MoviesIndex } from "./MoviesIndex";
import axios from "axios";
import {useState, useEffect} from "react";
import { MoviesNew } from "./MoviesNew";
import { Modal } from "./Modal";
import { MoviesShow } from "./MoviesShow";

export function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [isMoviesShowVisible, setIsMovieShowVisible] = useState(false);
  const [currentMovie, setCurrentMovie] = useState({});

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

  const handleShow = (movie) => {
    console.log("handleShow", movie);
    setIsMoviesShowVisible(true);
    setCurrentMovie(movie);
  }

  useEffect(handleIndex, []);
  
  return (
    <main>
      {/* <MoviesNew /> */}
      <MoviesNew onCreate={handleCreate} />
      <MoviesIndex movies={movies} onShow={handleShow} />
      <Modal show={isMoviesShowVisible} onClose={() => setIsMoviesShowVisible(false)}>
      <MoviesShow movie={currentMovie} />
      </Modal>
    </main>
  )
}