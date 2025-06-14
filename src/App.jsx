import axios from "axios";
import {Header} from "./Header";
import { MoviesPage } from "./MoviesPage";
import { Footer } from "./Footer";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <div>
      <Header />
      <MoviesPage />
      <Footer />
    </div>
  )
}

export default App;