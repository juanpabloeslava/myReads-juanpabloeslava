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
              // map through the passed books for the shelf, to display a Book component for each
              this.props.books.map( book => (
                // pass each Book info as a prop to the Books components
                <Book 
                  key={book.id} 
                  book={book} 
                  updateBooks={this.props.updateBooks}  
                />
              ))
            }
          </ol>
        </div>
      </div>
    )
  }

}

export default BookShelf;
