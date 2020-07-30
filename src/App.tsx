import React from 'react';
import './App.css';
// import Home from './view/home'
// import List from './components/list'
import RootRouter from './routers'
import css from 'styled-jsx/css'

function App() {
  console.log(css)
  return (
    <div className="App">
      <RootRouter></RootRouter>
    </div>
  );
}

export default App;
