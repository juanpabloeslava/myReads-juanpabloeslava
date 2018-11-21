import React, {Component} from 'react';
import * as BooksAPI from '../BooksAPI';

class Book extends Component {

  // Method: Proper notation for authors.
  bookAuthors = (authors) => {
    const length = authors.length;
    const max = 1;
    // if there are more than just 1 author, show proper notation. If not, show all
    const result = (length === max) ? authors : (authors[0] + ', et al.')
    return result
  }

  render() {
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div 
              className="book-cover" 
              style={
                { width: 128, 
                height: 193, 
                backgroundImage: `url(${this.props.book.imageLinks.thumbnail})` }}>
            </div>
            <div className="book-shelf-changer">
              <select 
                value={this.props.book.shelf || "none"} 
                onChange={ event => {
                  // call the updateBooks func, passing the current book and desired shelf as values
                  this.props.updateBooks(this.props.book, event.target.value)
                }}
              >
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{this.props.book.title}</div>
          <div className="book-authors">{this.bookAuthors(this.props.book.authors)}</div>
        </div>
      </li>
    )
  }
}

export default Book;
