import './App.css';
// import Card from './components/card/Card.jsx';
import Cards from './components/cards/Cards.jsx';
import characters from './data.js';
import Nav from './components/nav/nav';

function App() {
  return (
    <div className="App">
      {/* <img
        className="image"
        src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg"
      /> */}
      <div style={{ padding: '25px' }}>
        <Nav />
        <Cards characters={characters} />
        <div></div>
      </div>
    </div>
  );
}

export default App;
