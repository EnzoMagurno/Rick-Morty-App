import './App.css';
import Cards from './components/cards/Cards.jsx';
import Nav from './components/nav/Nav';
import { useState } from 'react';
import Logo from './components/logo-header/Logo';
import { Routes, Route } from 'react-router-dom';
import About from './components/about/About';
import Detail from './components/detail/Detail.jsx';
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
      <Nav onSearch={onSearch} />
      <Routes>
        <Route path="/" element={<Logo />}></Route>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />}></Route>
        <Route path="/detail/:detailId" element={<Detail />}></Route>
      </Routes>
    </div>
  );
}
export default App;
