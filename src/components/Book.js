import React, {Component} from 'react';
import * as BooksAPI from '../BooksAPI';

class Book extends Component {

  // Method: move books between shelves
  changeShelf = (event) => {
    const shelf = event.target.value;
    const book = this.props;
    // use the update method from the API
    BooksAPI.update(book, shelf)
      .then( result => {
        console.log (result);
      })
      .catch ( error => {
        console.log (error);
      });
  }

  render() {
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ 
              width: 128, 
              height: 193, 
              backgroundImage: `url(${this.props.imageLinks.thumbnail})` 
            }}></div>
            <div className="book-shelf-changer">
              <select onChange={this.changeShelf} value={this.props.shelf}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{this.props.title}</div>
          <div className="book-authors">{this.props.authors}</div>
        </div>
      </li>
    )
  }
}

export default Book;
