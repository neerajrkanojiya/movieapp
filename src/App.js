import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './Components/MovieList';
import MovieListHeading from './Components/MovieListHeader';
import SearchBox from './Components/SearchBox';

function App() {
 
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const getMovieRequest = async (searchValue) => {
   
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=a5355b8d`;
    //console.log(url);
    const responce = await fetch(url);
    const responceJason = await responce.json();
    
    if (responceJason.Search) { 
      console.log(responceJason);     
      setMovies(responceJason.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  return (
    <div className="container.fluid movie-app">
      <div className='row d-flex align-item-center mt-4 mb-4' >
        <MovieListHeading heading="Movies" />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className='row'>
        <MovieList movies={movies} />
      </div>
    </div>
  );
}
export default App;
