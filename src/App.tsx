import { BrowserRouter as Router, Route } from 'react-router-dom';

import CharacterList from './pages/CharacterList';
import CharacterDetails from './pages/CharacterDetails';

import './App.css';
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { ICharacter } from './models/character';


type ContextProps = {
  characters: ICharacter[]
}
export const CharacterContext = createContext<ContextProps>({
  characters: []
});

function App() {
  const baseUrl = "https://swapi.dev/api/people";
    const [characters, setCharacters] = useState<ICharacter[]>([]);

    useEffect(() => {
        axios.get(baseUrl).then((response) => {
            setCharacters(response.data.results);
        });
    }, []);

  return (
    <div className="content">
      {characters && 
        <CharacterContext.Provider value={{characters}}>
          <Router>
            <Route path="/" exact component={CharacterList}/>
            <Route path="/details/:id" component={CharacterDetails}/>
          </Router>
        </CharacterContext.Provider>
      }
      {!characters && <h1>Loading...</h1>}
    </div>
  );
}

export default App;
