import React, {Component} from 'react';
import BookShelf from '../components/BookShelf';
import AddBook from '../components/AddBook';

class Home extends Component {

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf title="Currently Reading"/>
            <BookShelf title="Want to Read"/>
            <BookShelf title="Finished Reading"/>
          </div>
        </div>
        <AddBook />
      </div>
    )
  }

}

export default Home;
