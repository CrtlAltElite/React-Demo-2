import {Routes, Route} from 'react-router-dom'
import HomePage from './components/HomePage'
import Names from './components/Names'
import Nav from './components/Nav'
import {useState} from 'react'
import AddMovie from './components/AddMovie'
import ShowMovie from './components/ShowMovie'

function App() {
  const [people, setPeople] = useState([])
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path="/" element={<HomePage setPeople={setPeople} people={people}/>}/>
        <Route path="/showNames" element={<Names people={people}/>}/>

        <Route path="/addMovie" element={<AddMovie/>}/>
        <Route path="/showMovie" element={<ShowMovie/>}/>


      </Routes>
    </div>
  );
}

export default App;
