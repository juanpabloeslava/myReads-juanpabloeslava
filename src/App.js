import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Provider, { JpContext } from './provider/indexProv';
// components
import Home from './views/Home';
import Search from './views/Search';
// css
import './App.css'

class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">
        <Provider>
          <Switch>
            <Route 
              exact path="/" 
              render={() => (
                // Subscribe Home as a consumer of the JpContext provider (from the ./provider/indexProv.js). It requires a func as a child
                <JpContext.Consumer>
                  { context => <Home { ...context }/> }
                </JpContext.Consumer>
              )} 
            />
            <Route 
              exact path="/search" 
              render={() => (
                // Subscribe Search as a consumer of the JpContext provider (from the ./provider/indexProv.js). It requires a func as a child
                <JpContext.Consumer>
                  { context => <Search { ...context }/> }
                </JpContext.Consumer>
              )} 
            />
          </Switch>  
        </Provider>
      </div>
    )
  }
}

export default BooksApp
