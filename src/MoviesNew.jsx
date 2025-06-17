export function MoviesNew({onCreate}) {

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const params = new FormData(form);
    console.log("params", params);
    console.log("form!", form);
    const successCallback = () => form.reset();
    onCreate(params, successCallback);
  }
  
  return (
    <div>
      <h1>New Movie</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input title="title" type="text" />
        </div>
        <div>
          Year: <input year="year" type="text" />
        </div>
        <div>
          Plot: <input plot="plot" type="text" />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}