export function MoviesIndex({movies}) {
  return (
    <div>
      <h1>All movies ({movies.length} total)</h1>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.name}</h2>
          <p>Title: {movie.title}</p>
          <p>Year: {movie.year}</p>
          <p>Plot: {movie.plot}</p>
          </div>
      ))}
    </div>
  );
}