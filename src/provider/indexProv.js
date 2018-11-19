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
            wantToRead: []
        }
    }

    render() {
        return (
            // Every Context object comes with a Provider React component that allows consuming components to subscribe to context changes.
            // One Provider can be connected to many consumers
            <JpContext.Provider value={{ ...this.state }}>
                {this.props.children}
            </JpContext.Provider>
        )
    }

}

export default index;