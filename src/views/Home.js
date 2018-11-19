import React, {Component} from 'react';
import BookShelf from '../components/BookShelf';
import AddBook from '../components/AddBook';
import * as BooksAPI from '../BooksAPI';

class Home extends Component {

  componentDidMount () {
    // get all books from the API
    BooksAPI.getAll()
      .then ( allBooks => {
        console.log (allBooks);
      })
      .catch ( error => {
        console.log (error);
      });
  }

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
            <BookShelf title="Read"/>
          </div>
        </div>
        <AddBook />
      </div>
    )
  }

}

export default Home;
