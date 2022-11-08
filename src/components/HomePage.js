import React, {useState, useEffect} from 'react'

export default function HomePage({people, setPeople}) {
    const [name, setName]= useState('')
    const [color, setColor]= useState('#FF0000')

    useEffect(()=>{
        setColor('#'+Math.floor(Math.random()*16777215).toString(16))
    },[people])

    const handleSubmit=()=>{
        setPeople([...people, name])
        setName('')
    }

    const handleChange=(e)=>{
        setName(e.target.value)
    }

  return (

    <div style={{backgroundColor: color}}>
        <h1>This is the greatest Home page in the world</h1>
        <h4>Created By</h4>
        <div>
            <ul>
                <li>Connor</li>
                <li>Diana</li>
                <li>Marcus</li>
                <li>Marco</li>
                <li>Caleb</li>
            </ul>
        </div>
        <hr/>
        <input placeholder='What is your name?' value={name} onChange={(e)=>handleChange(e)} name="userName"/>
        <button onClick={()=>handleSubmit()}>Add Name</button>
        <hr/>

    </div>
  )
}
