
import React from 'react';
import './App.css';
import BookList from './BookList';
import When from './When';
import BookCase from './BookCase';
import SearchBooks from './SearchBooks';
import { Route } from 'react-router-dom';

class BooksApp extends React.Component {
  state = {
    books: new BookList()
    //when: (new When()).when
  };

/*
  constructor() {
    super();
    this.state.books.initialize();
    console.log( "after initializing: " + this.state.books.listOfBooks.length );
    //this.state.books.writeToDB();
    this.state.books.readFromDB();
    console.log( "after reading DB: " + this.state.books.listOfBooks.length );
  } // constructor()
*/

  componentDidMount() {
      this.state.books.initialize();
  } // componentDidMount()

/*
  addBook = (bookSpecification) => {
      this.setState( (previousState) => {
          bookSpecification.id = this.listOfBooks.length;
          return {books: [...books bookSpecification]};
      });
  }; addBook()
*/

  moveBook = (id, destination) => {
      this.setState( (previousState) => {
          previousState.books._listOfBooks[id].when = destination;
          return {books: previousState.books};
      } );
  }; // moveBook()

  render() {

    return (

        <div className="app">
            <Route exact path="/"
                render={() => (
                  <BookCase books={this.state.books} moveBook={this.moveBook}/>)} />
            <Route path="/search"
                render={() => (
                  <SearchBooks />
                )} />
        </div>

    ); // return
  } // render()
} // BooksApp

export default BooksApp
