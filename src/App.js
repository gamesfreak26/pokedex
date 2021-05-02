import './App.css'
import PokemonList from './Components/PokemonList'
import { BrowserRouter as Router, Route, useHistory } from 'react-router-dom';

function Content() {
  let history = useHistory();
  
  const handleClick = () => {
    history.push('/pokemon');
  }

  return (
    <div className="container">
      <h1>Welcome to the Pokedex</h1>
      <button onClick={handleClick}>See Pokemon</button>
    </div>
  )
}

function App() {  

    return (
    <div>
      <Router>
        <Route exact path="/" component={Content} />
        <Route path="/pokemon" component={PokemonList}/>
      </Router>      
    </div>
  );
}

export default App;
