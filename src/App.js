import React from 'react'

import Header from './components/header'
import Players from './components/sliderPlayers'
import Router from './router'
import Footer from './components/footer'

import './styles.css';

function App() {
  return (
    <div className='containerSite'>
      <Header/>
      <Players/>
      <Router/>
      <Footer/> 
    </div>
  );
}

export default App;
