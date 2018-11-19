import React from 'react'
import { Route, Switch } from 'react-router-dom';
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Home from './views/Home';
import Search from './views/Search';

class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/search" component={ Search } />
        </Switch>  
      </div>
    )
  }
}

export default BooksApp
