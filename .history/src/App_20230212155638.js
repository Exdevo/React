import React from 'react'
import { useEffect } from 'react'
//key

const API_URL ="http://www.omdbapi.com?apikey=key";
const searchMOvies = async(title)=>{
const response =await fetch(`$API_URL`)
}
const App = () => {

    useEffect(()=>{

    },[])
  return (
    <div>App</div>
  )
}

export default App