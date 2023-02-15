import React, { useState } from 'react'
import { useEffect } from 'react'
import "./App.css"
import MovieCard from './MovieCard';
// import SearchIcon from "./search.svg";
//key

const API_URL ="http://www.omdbapi.com?apikey=key";

const movie1={
    "Title": "Amazing Spiderman Syndrome",
    "Year": 2013,
    "imdbID": "tt2586634",
    "Type": "Movie",
    "Poster": "N/A"

}

const App = () => {
    const [movies, SetMovies]=useState();
    const searchMovies = async(title)=>{
        const response =await fetch(`${API_URL} &s=${title}`);//calls our api
        const data = await response.json(); //calla our data
        
        // console.log(data);
        SetMovies(data.Search);
    }

    useEffect(()=>{
        searchMovies("Avengers");
    },[])
  return (
    <div className='app'>
        <h1>MovieLand</h1>

    <div className='search'>
<input 
placeholder='search for movies'
value="Superman"
onChange={()=>{

}}
/>

<img 
// src={SearchIcon}
// alt="search"
// onClick={()=>{
    
// }}
/>
    </div>
    {
        movies ? length
    }
    <div className='container'>
        <MovieCard  movie1={movie1}/>
    </div>
    </div>
  )
}

export default App