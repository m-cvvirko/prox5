import React from 'react';
// import { Counter } from './features/counter/Counter';
import { Welcome } from './features/prox5/Welcome';
import { Menu } from './features/prox5/Menu';
import './App.css';

function App() {
  return (
    <div className="App">
        {/* <Counter /> */}
        <Welcome />
        <Menu />
    </div>
  );
}

export default App;
