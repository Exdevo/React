import React, { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
//33062e21

const API_URL = "http://www.omdbapi.com?apikey=33062e21";

const movie = {
  Title: "Amazing Spiderman Syndrome",
  Year: 2013,
  imdbID: "tt2586634",
  Type: "Movie",
  Poster: "N/A",
};

const App = () => {
  const [movies, SetMovies] = useState([]);
  const [searchTerm, setSearchTerm]=useState("");
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL} &s=${title}`); //calls our api
    const data = await response.json(); //calla our data

    // console.log(data);
    SetMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("the professional");
  }, []);
  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          placeholder="search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <img
        src={SearchIcon}
        alt="search"
        onClick={()=>searchTerm(searchTerm)}
        />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
            {movies.map((movie)=>
            <MovieCard movie={movie}/>
            )}
        </div>
      ) : (
        <div className="Empty">
          <h2>No movies found!</h2>
        </div>
      )}
    </div>
  );
};

export default App;
