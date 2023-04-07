import React from 'react'

import Header from './components/header'
import Router from './router'
import Footer from './components/footer'

import './styles.css';

function App() {
  return (
    <div className='containerSite'>
      <Header/>
      <Router/>
      <Footer/> 
    </div>
  );
}

export default App;
