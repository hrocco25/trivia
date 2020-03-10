import React from 'react';
import './App.css';
import{Link, Route } from 'react-router-dom'
import Header from './components/header/header'
import Main from './components/main/main'
import Footer from './components/footer/footer'
import Result from './components/result/result'
import General from './components/general/general'

function App() {
  return (
    <div className="App">
      <Link to ="/"><Header/></Link>
      <Route exact path='/' render= {props=> <Main {...props}/>}/>
      <Route exact path='/General' render= {props=> <General {...props}/>}/>
      <Route exact path='/Result' render= {props=> <Result {...props}/>}/>
      <Footer/>
    </div>
  );
}

export default App;
