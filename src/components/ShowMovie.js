import {useContext, useEffect} from 'react'
import { AppContext } from '../context/AppContext'

export default function ShowMovie() {
    const {movies} = useContext(AppContext)

    useEffect(()=>{
    alert("Welcome to the page") 
    // return alert("GEt off my Page you filthy animal! I'll gount 10")
    }
    ,[])
  return (
    <div>
        <h1>The best Movies are:</h1>
        <ul>
            {movies.map((movie, index)=><li key={index}>{movie}</li>)}
        </ul>
    </div>
  )
}
