import React from 'react';
import './App.css';
import RootRouter from './routers'
import { globalStyle} from './global';

function App() {
  return (
    <div className="App">
      <style jsx={true} global={true}>{globalStyle}</style>
      <RootRouter></RootRouter>
    </div>
  );
}

export default App;
