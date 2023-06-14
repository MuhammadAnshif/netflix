import React from 'react'
import NavBar from './Components/NavBar/NavBar.js'
import './App.css'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'

function App() {
  return (
    <div className="App">
        <NavBar />
        <Banner />
        <RowPost type={'Popular'} />
        <RowPost type={'Trending'} />
        <RowPost type={'Shows'} />
        <RowPost type={'Blockbuster'} />
        <RowPost type={'Originals'} />
       
    </div>
  );
}

export default App;