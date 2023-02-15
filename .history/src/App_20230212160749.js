import React from 'react'
import { useEffect } from 'react'
import "./App.css"
// import SearchIcon from "./search.svg";
//key

const API_URL ="http://www.omdbapi.com?apikey=key";
const searchMovies = async(title)=>{
const response =await fetch(`${API_URL} &s=${title}`);//calls our api
const data = await response.json(); //calla our data

console.log(data);

}
const App = () => {

    useEffect(()=>{
        searchMovies("Avengers");
    },[])
  return (
    <div className='app'>
        <h1>MovieLand</h1>

    <div className=''>

    </div>

    </div>
  )
}

export default App