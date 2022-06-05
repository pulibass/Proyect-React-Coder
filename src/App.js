import React from 'react';
import Header from './Components/Header/Header';
import ItemCount from './Components/ItemCount/ItemCount';
import ItemListContainer from './Components/ItemListContainer.js/ItemListContainer';
import "./css/App.css";
function App() {
  return (
    <div className="App">
      <Header />
      <ItemCount />
      <ItemListContainer mensaje="bienvenido a Pulibass Neumaticos" />

    </div>

  );
}

export default App;
