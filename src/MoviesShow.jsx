export function MoviesShow ({movie, onUpdate, onDestroy}) {

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const params = new FormData(form);
    const successCallback = () => form.reset();
    onUpdate(movie, params, successCallback);
  }
  
  return (
    <div>
      <h1>Movie information</h1>
      {/* <p>Title: {movie.name}</p>
      <p>Year: {movie.year}</p>
      <p>Plot: {movie.plot}</p> */}
      <form onSubmit={handleSubmit}>
         <div>
          Title: <input defaultValue={movie.title} title="title" type="text" />
        </div>
        <div>
          Year: <input defaultValue={movie.year} year="year" type="text" />
        </div>
        <div>
          Plot: <input defaultValue={movie.plot} plot="plot" type="text" />
        </div>
        <button type="submit">Update</button>
      </form>
      <button onClick={() => onDestroy(movie)}>Delete</button>
    </div>
  );
}