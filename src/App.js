import './App.css';
import Home from '../src/Components/Sections/Home';
import Login from '../src/Components/Sections/Login';
import React, {useState} from 'react';
import { useSelector } from 'react-redux';

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const user = useSelector((state)=> state.data.user);

  return (
    <div className="App">
      {
        user ? <Home/>: <Login/>
      }
    </div>
  );
}

export default App;
