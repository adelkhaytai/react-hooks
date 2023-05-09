
import { useState } from 'react';
import './App.css';
import Filter from './component/Filter';
import MovieList from './component/MovieList';
import { movieData } from './component/Data';
import { Route, Routes } from 'react-router-dom';
import MovieTrailer from './component/MovieTrailer';


function App() {
  const [movies, setMovies] = useState(movieData)
  const [filterTitle, setFilterTitle] = useState("")
  const [filterRating, setFilterRating] = useState(0)
  return (
    <div className="App">
      <Filter setFilterTitle={setFilterTitle} filterRating={filterRating} setFilterRating={setFilterRating} />  
      <Routes>
        <Route path='/' element={<MovieList setMovies ={setMovies} movies={movies} filterTitle={filterTitle} filterRating={filterRating}/>}/>
        <Route path='/:id' element={ <MovieTrailer movies={movies} /> }/>
      </Routes>
    </div>
  );
}

export default App;
