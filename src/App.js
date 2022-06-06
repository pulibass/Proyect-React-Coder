import React from 'react';
import Header from './Components/Header/Header';
import ItemListContainer from './Components/ItemListContainer.js/ItemListContainer';
import "./css/App.css";
function App() {
  return (
    <div className="App">
      <Header />
      <ItemListContainer mensaje="bienvenido a Pulibass Neumaticos" />
    </div>

  );
}

export default App;
