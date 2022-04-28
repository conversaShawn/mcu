// import logo from './logo.svg';
import "./App.css";
import MovieCard from "./components/movies/MovieCard";
import MovieCardModal from "./components/movies/MovieCardModal";

const App = () => {
  return (
    <div>
      <MovieCard />
      <MovieCardModal />
    </div>
  );
};

export default App;
