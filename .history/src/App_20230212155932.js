import React from 'react'
import { useEffect } from 'react'
//key

const API_URL ="http://www.omdbapi.com?apikey=key";
const searchMOvies = async(title)=>{
const response =await fetch(`${API_URL} &s=${title}`);//calls our api
const data = await response.json(); //calla our data

console.log(data);

}
const App = () => {

    useEffect(()=>{
        searchMOvies
    },[])
  return (
    <div>App</div>
  )
}

export default App