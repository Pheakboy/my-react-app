

import { useEffect, useState } from "react";
import './App.css'
import MovieCard from "./MovieCard";
import SearchIcon from './search.svg'
const API_URL = 'https://www.omdbapi.com?apikey=766fbd9a';
const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState([]);
    const searchMovies = async (title) => {
      const respone = await fetch(`${API_URL}&s=${title}`);
      const data = await respone.json();

      setMovies(data.Search);
  }
    useEffect(() => {
      searchMovies('Spiderman');
    }, []);
  
  return(
      <div className="app">
        <h1>Movie Tons</h1>

        <div className="search">
          <input type="text" placeholder="Search fro movie..." 
            value={searchTerm}
            onChange={(e)=>setSearchTerm(e.target.value)}/>

          <img src={SearchIcon} alt="search"
           onClick={()=> searchMovies(searchTerm)}/>

        </div>
        {movies?.length > 0 
          ? (
            <div className="container">
              {movies.map((movie) => (
                <MovieCard movie = {movie}/>
              ))}
          </div>
          ) : (
            <div className="empty">
              <h2>No movies found</h2>
            </div>
          )};
       
      </div>
  );
}
export default App;