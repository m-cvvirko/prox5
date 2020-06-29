import React from 'react';
import { Welcome } from './features/prox5/Welcome';
import { Menu } from './features/prox5/Menu';
import './App.css';

function App() {
  return (
    <div className="bg-mask">
        <Welcome />
        <Menu />
    </div>
  );
}

export default App;
