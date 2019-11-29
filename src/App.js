import React from 'react';
import './App.css';
import Jumbotron from "./components/Jumbotron"
import Topbar from "./components/Topbar"

function App() {
  return (
    <div className="App">
      <Topbar />
      <Jumbotron />
    </div>
  );
}

export default App;
