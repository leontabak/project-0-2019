
import React from 'react';
// import * as BooksAPI from './BooksAPI'
import './App.css';
import BookList from './BookList';
import When from './When';
import BookCase from './BookCase';
import SearchBooks from './SearchBooks';
import { Route } from 'react-router-dom';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of 
     * which page we're on, use the URL in the browser's address bar. 
     * This will ensure that users can use the browser's back and 
     * forward buttons to navigate between pages, as well as provide 
     * a good URL they can bookmark and share.
     */

    books: new BookList(),

    scheduling: (new When()).when
  }

  showBookCase = () => {this.setState( (previousState) => ({showSearchPage: false}) )};
  showSearchBooks = () => {this.setState( (previousState) => ({showSearchPage: true}) )};

  render() {

    return (

        <div className="app">
            <Route exact path="/"
                render={() => (
                  <BookCase books={this.state.books}/>)} />
            <Route path="/search"
                render={() => (
                  <SearchBooks />
                )} />
        </div>

    )
  }
}

export default BooksApp
