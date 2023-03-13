import './App.css';
import Cards from './components/cards/Cards.jsx';
import Nav from './components/nav/Nav';
import { useState } from 'react';
import Logo from './components/logo-header/Logo';

function App() {
  const [characters, setCharacter] = useState([]);
  const onSearch = (id) => {
    const URL_BASE = 'https://be-a-rym.up.railway.app/api';
    const KEY = '307d922fefb9.b91e13e4a54b39076d91';
    fetch(`${URL_BASE}/character/${id}?key=${KEY}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.id) {
          const duplicado = characters.some(
            (character) => character.id === data.id
          );
          if (duplicado) {
            alert('El personaje ya se está mostrando');
          } else {
            setCharacter((oldChars) => [...oldChars, data]);
          }
        } else {
          alert('No hay personaje con ese ID');
        }
      });
  };

  const onClose = (id) => {
    setCharacter(
      characters.filter((char) => {
        return char.id !== id;
      })
    );
  };

  return (
    <div className="App">
      <Logo />
      <Nav onSearch={onSearch} />
      <Cards characters={characters} onClose={onClose} />
    </div>
  );
}
export default App;
