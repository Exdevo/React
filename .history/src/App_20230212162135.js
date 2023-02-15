import React from 'react'
import { useEffect } from 'react'
import "./App.css"
// import SearchIcon from "./search.svg";
//key

const API_URL ="http://www.omdbapi.com?apikey=key";

const movie1={
    "title": "Amazing Spiderman",
    "Year": 2013,
    "imdbID": "tt2586634",
    "Type": "MOvie"

}

const App = () => {
    const searchMovies = async(title)=>{
        const response =await fetch(`${API_URL} &s=${title}`);//calls our api
        const data = await response.json(); //calla our data
        
        console.log(data);
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
    <div className='container'>

    </div>
    </div>
  )
}

export default App