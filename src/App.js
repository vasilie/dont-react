import React from 'react';
import { BrowserRouter  as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Main from './components/Main.js';
import ArticleDetail from './components/ArticleDetail.js';

import './App.css';

function App() {
  return (
    <Router> 
      <div className="App">
        <Header />
          <img className="App-logo" src= { logo } />
          <Route exact path="/" component={Main} />
          <Route path="/article" component={ArticleDetail} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
