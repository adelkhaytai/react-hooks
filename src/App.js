
import { useState } from 'react';
import './App.css';
import Filter from './component/Filter';
import MovieList from './component/MovieList';
import { movieData } from './component/Data';

function App() {
  const [movies, setMovies] = useState(movieData)
  const [filterTitle, setFilterTitle] = useState("")
  const [filterRating, setFilterRating] = useState(0)
  return (
    <div className="App">
      <Filter setFilterTitle={setFilterTitle} filterRating={filterRating} setFilterRating={setFilterRating} />  
      <MovieList setMovies ={setMovies} movies={movies} filterTitle={filterTitle} filterRating={filterRating}/>
    </div>
  );
}

export default App;
