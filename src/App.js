

// // const Person = (props) => {
// //   return (
// //     <>
// //       <h2>Name : {props.name} </h2>
// //       <h2>Age : {props.age} </h2>
// //       <h2>Gender: {props.gender} </h2>
// //     </>
// //   )
// // }
//   //  {/* <Person name= {'Jonh'} age= {'20'} gender={'Male'} />
//   //     <Person name= {'son'} age= {'25'} gender={'Female'} /> */}
// import {useState, useEffect} from 'react';

// const App = () => {
//   const [counter, setCounter] = useState(0);

//   useEffect(() => {
//     alert("You hvae changed your counter to " + counter)
//   },[counter]);

//   return (
//     <div className="App">
//       <button onClick={() => setCounter((prevCount) => prevCount-1 )}>-</button>
//       <h2>{counter}</h2>
//       <button onClick={() =>setCounter((prevCount) =>prevCount+1 )}>+</button>
//        <button onClick={() => setCounter((prevCount) => prevCount =0)}>Reset</button>

//     </div>
//   );
// }
// export default App;


import { useEffect, useState } from "react";
import './App.css'
import MovieCard from "./MovieCard";
import SearchIcon from './search.svg'
const API_URL = 'http://www.omdbapi.com?apikey=766fbd9a';

const movie1 = {
  "Title": "Spiderman",
  "Year": "2010",
  "imdbID": "tt1785572",
  "Type": "movie",
  "Poster": "N/A"
}


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