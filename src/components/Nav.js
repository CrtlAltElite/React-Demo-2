import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav style={{display:'flex'}}>
        <div style={{width:"25%"}}>
            <Link to="/">Home</Link>
        </div>
        <div style={{width:"25%"}}>
            <Link to="/showNames">Show Names</Link>
        </div>
        <div style={{width:"25%"}}>
            <Link to="/showMovie">Show Movies</Link>
        </div>
        <div style={{width:"25%"}}>
            <Link to="/addMovie">Add Movies</Link>
        </div>
    </nav>
  )
}
