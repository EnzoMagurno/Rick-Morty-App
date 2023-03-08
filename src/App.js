import './App.css';
import Cards from './components/cards/Cards.jsx';
import characters from './data.js';
import Nav from './components/nav/nav';
import { useState } from 'react';

function App() {
  // const [characters, setChatacters] = useState([]);
  return (
    <div className="App">
      {/* <img
        className="image"
        src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg"
      /> */}
      <Nav />
      <Cards characters={characters} />
    </div>
  );
}
export default App;
