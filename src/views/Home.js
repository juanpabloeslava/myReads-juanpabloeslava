import React, {Component} from 'react';
import BookShelf from '../components/BookShelf';
import AddBook from '../components/AddBook';
// data from API
import * as BooksAPI from '../BooksAPI';

class Home extends Component {

  constructor (props) {
    super (props);

    // state
    this.state = {
      books: []
    }
  }

  componentDidMount () {
    // get all books from the API
    BooksAPI.getAll()
      .then ( allBooks => {
        // update the Component's state with the books
        this.setState( {
            books: allBooks
        });
      })
      .catch ( (error) => {
        console.log (error);
      });
  }

  // Method: update shelf info when moving books.
  updateBooks = (book, targetShelf) => {
    // check next action
    console.log ('move ', book.title, ' from ', book.shelf, ' to ', targetShelf);
    // 
    BooksAPI.update (book, targetShelf)
      // success
      .then( () => {
        // pass desired shelf as the new .shelf prop for the book
        book.shelf = targetShelf;
        this.setState( state => ({
          books: state.books
        }));
      })
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf updateBooks={this.updateBooks} title="Currently Reading" 
              books={ this.state.books.filter( book => book.shelf === 'currentlyReading') }
            />
            <BookShelf updateBooks={this.updateBooks} title="Want to Read" 
              books={ this.state.books.filter( book => book.shelf === 'wantToRead') }
            />
            <BookShelf updateBooks={this.updateBooks} title="Finished Reading" 
              books={ this.state.books.filter( book => book.shelf === 'read') }
            />
          </div>
        </div>
        <AddBook />
      </div>
    )
  }

}

export default Home;
