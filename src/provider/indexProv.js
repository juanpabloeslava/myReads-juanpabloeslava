import React, {Component} from 'react';
export const JpContext = React.createContext();

// To better organize the state. Context provides a way to share values like these between components without 
// having to explicitly pass a prop through every level of the tree.
class index extends Component {

    constructor () {
        super();
        // manage all states 
        this.state = {
            books: [],
            currentlyReading: [],
            read: [],
            wantToRead: [],
            // method to add books
            fillShelves: allBooks => {
                const currentlyReading = allBooks.filter( book => (book.shelf === 'currentlyReading'));
                const wantToRead = allBooks.filter( book => (book.shelf === 'wantToRead'));
                const read = allBooks.filter( book => (book.shelf === 'read'));
                // update the Component's state with the books
                this.setState( {
                    // each item will go to each state key, in the same order the keys are set
                    allBooks,
                    currentlyReading,
                    read,
                    wantToRead
                });
            }
        }
    }

    render() {
        return (
            // Every Context object comes with a Provider React component that allows consuming components to subscribe to context changes.
            // One Provider can be connected to many consumers. 
            <JpContext.Provider value={{ ...this.state }}>
                {this.props.children}
            </JpContext.Provider>
        )
    }

}

export default index;