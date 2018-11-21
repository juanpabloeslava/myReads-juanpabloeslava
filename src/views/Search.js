import React, {Component} from 'react';
import { Link } from 'react-router-dom';
// data from API
import * as BooksAPI from '../BooksAPI';
import Book from '../components/Book';

class Search extends Component {

  constructor (props) {
    super (props);

    // state
    this.state = {
      searchQuery: "",
      books: []
    }
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

  // Method: show results
  showResults = (e) => {
    const query = e.target.value;
    // set state
    this.setState ({ searchQuery: query });
    if (query.trim()) {
      // search for more books from the API
      BooksAPI.search(query)
        .then( result => {
          console.log ('search results: ', result);
          if (result.error) {
            this.setState({ books: [] });
          }
          else {
            this.setState({ books: result });
            console.log ('search results in state: ', this.state.books);
          }
        })
        .catch (error => {
          console.log (error);
        }) 
    } else {
      this.setState({ books: [] })
    }
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          {/* <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button> */}
          <Link className="close-search" to="/"/>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input 
              type="text" 
              placeholder="Search by title or author"
              value={this.state.searchQuery}
              // onChange={ e => (this.updateSearchQuery(e.target.value))}
              onChange={ (e) => (this.showResults(e))}
            />

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {
              /*
              // EVERYTHING BREAKS WHEN UNCOMMENTING THIS BLOCK.
              // SUDDENLY IT SHOWS ERRORS IN THE BOOK COMPONENT, WHICH NEVER APPEARED OUTSIDE THE SEARCH VIEW
              // I THINK IT HAS TO DO WITH THE PROPS PASSED ON TO THE BOOKS FROM THE SEARCH VIEW, BUT CAN'T FIGURE OUT EXACTLY 
              // WHAT IS IT THAT'S WRONG

              // map through the passed books for the shelf, to display a Book component for each
              this.state.books.map( book => (
                // pass each Book info as a prop to the Books components
                <Book 
                  key={book.id} 
                  book={book} 
                  // updateBooks={this.props.updateBooks}  
                />
              ))
              */
            }
          </ol>
        </div>
      </div>
    )
  }
}

export default Search;
