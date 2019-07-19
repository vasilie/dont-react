import React from 'react';
import { BrowserRouter  as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Main from './components/Main.js';
import ArticleDetail from './components/ArticleDetail.js';
import Albums from './components/Albums/Albums.js';
import AlbumDetail from './components/Albums/AlbumDetail.js';
import PhotoDetail from './components/Albums/PhotoDetail.js';
import './scss/layout/main.scss'
import './scss/default.scss'

import './App.css';

function App() {
  return (
    <Router> 
      <div className="App">
        <Header />
        <Route exact path="/" component={Main} />
        <Route path="/article" component={ArticleDetail} />
        <Route exact path="/albums" component={Albums} />
        <Route  path="/album" component={AlbumDetail} />
        <Route  path="/photo" component={PhotoDetail} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
