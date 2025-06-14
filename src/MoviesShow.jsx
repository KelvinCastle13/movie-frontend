export function MoviesShow ({movie}) {
  return (
    <div>
      <h1>Movie information</h1>
      <p>Title: {movie.name}</p>
      <p>Year: {movie.year}</p>
      <p>Plot: {movie.plot}</p>
    </div>
  );
}