import axios from "axios";
import {useState, useEffect} from "react";
import { MoviesIndex } from "./MoviesIndex";
import { MoviesNew } from "./MoviesNew";
import { MoviesShow } from "./MoviesShow";
import { Modal } from "./Modal";

export function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [isMoviesShowVisible, setIsMoviesShowVisible] = useState(false);
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

  const handleDestroy = (movie) => {
    console.log("handleDestroy", movie);
  };

  const handleShow = (movie) => {
    console.log("handleShow", movie);
    setIsMoviesShowVisible(true);
    setCurrentMovie(movie);
  }

  const handleUpdate = (movie, params, successCallback) => {
    console.log("handleUpdate!");
    axios.patch(`/movies/${movie.id}.json`, params).then((response) => {
      setMovies(movie.map(m => m.id === response.data.id ? response.data : m));
      successCallback();
      setIsMoviesShowVisible(false);
    });
  };

  useEffect(handleIndex, []);
  
  return (
    <main>
      {/* <MoviesNew /> */}
      <MoviesNew onCreate={handleCreate} />
      <MoviesIndex movies={movies} onShow={handleShow} />
      <Modal show={isMoviesShowVisible} onClose={() => setIsMoviesShowVisible(false)}>
      <MoviesShow movie={currentMovie} onUpdate={handleUpdate} onDestroy={handleDestroy} />
      </Modal>
    </main>
  );
}