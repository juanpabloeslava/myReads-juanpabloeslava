import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class AddBook extends Component {

  render() {
    return (
      <div className="open-search">
        <Link className="open-search-link" to="/search" />
      </div>
    )
  }

}

export default AddBook;
