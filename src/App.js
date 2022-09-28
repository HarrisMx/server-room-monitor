import './App.css';
import Home from '../src/Components/Sections/Home';
import Login from '../src/Components/Sections/Login';
import React, {useState} from 'react';

function App() {
  const [isLogged, setIsLogged] = useState(true);

  return (
    <div className="App">
      {
        isLogged ? <Home/>: <Login/>
      }
    </div>
  );
}

export default App;
