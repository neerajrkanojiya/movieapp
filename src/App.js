import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './Components/MovieList';
import MovieListHeading from './Components/MovieListHeader';
import SearchBox from './Components/SearchBox';

function App() {

  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="container.fluid movie-app">
      <div className='row d-flex align-item-center mt-4 mb-4' >
        <MovieListHeading heading="Movies" />
        <SearchBox  searchValue={searchValue} setSearchValue={setSearchValue}/>
      </div>
      <div className='row'>
        <MovieList movies={movies} />
      </div>
    </div>
  );
}
export default App;
