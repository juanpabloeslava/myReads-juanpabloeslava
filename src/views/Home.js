import React, {Component} from 'react';
import BookShelf from '../components/BookShelf';
import AddBook from '../components/AddBook';
import * as BooksAPI from '../BooksAPI';

class Home extends Component {

  componentDidMount () {
    // get all books from the API
    BooksAPI.getAll()
      .then ( allBooks => {
        // organize books in their respective shelves
        this.props.fillShelves(allBooks);
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
            <BookShelf 
              title="Currently Reading"
              books={this.props.currentlyReading}
            />
            <BookShelf 
              title="Want to Read"
              books={this.props.wantToRead}
            />
            <BookShelf 
              title="Read"
              books={this.props.read}
            />
          </div>
        </div>
        <AddBook />
      </div>
    )
  }

}

export default Home;
