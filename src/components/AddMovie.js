import React, {useContext, useState} from 'react'
import { AppContext } from '../context/AppContext'

export default function AddMovie() {
    const [movie, setMovie]= useState('')

    const {movies, setMovies} = useContext(AppContext)


    const handleSubmit=()=>{
        setMovies([...movies, movie])
        setMovie('')
    }

    const handleChange=(e)=>{
        setMovie(e.target.value)
    }

  return (

    <div>
        <h1>What are you Favorite Movies</h1>
        <hr/>
        <input placeholder='What is your fav movie?' value={movie} onChange={(e)=>handleChange(e)}/>
        <button onClick={()=>handleSubmit()}>Add Movie</button>
        <hr/>

    </div>
  )
}
