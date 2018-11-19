import React, {Component} from 'react';
import Book from './Book';

class BookShelf extends Component {

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{ this.props.title }</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            { 
              // If there are books in the shelf (passed as a prop back in 'Home.js')
              this.props.books && 
              // map to show just the correct ones for each shelf
              this.props.books.map( book => 
              <Book key={book.id} { ...book }/> )
            }
          </ol>
        </div>
      </div>
    )
  }

}

export default BookShelf;
