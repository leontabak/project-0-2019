
import React from 'react';
import './App.css';
import BookList from './BookList';
import When from './When';
import BookCase from './BookCase';
import BookSpecification from './BookSpecification';
import SearchBooks from './SearchBooks';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';

class BooksApp extends React.Component {
    state = {
        books: []
    };

    when = new When();

    componentDidMount() {
        //const allBooks = new BookList();
        //allBooks.initialize();
        //allBooks.listOfBooks.forEach( (book) => {this.addBook( book );});
        this.readFromDB();
    } // componentDidMount()

    readFromDB() {
        BooksAPI.getAll().then( (bookSet) => {bookSet.forEach( 
            (bookSpec) => {
                const title = bookSpec.title;
                const authors = bookSpec.authors;
                const coverImageURL = bookSpec.imageLinks.smallThumbnail;
                const when = this.when.labelToObject( bookSpec.shelf );

                const spec = new BookSpecification( coverImageURL, title, authors, when );

                this.addBook( spec );
            }
        );});
    } // readFromDB()

  addBook = (bookSpecification) => {
      this.setState( (previousState) => {
          bookSpecification.id = previousState.books.length;
          return {books: [...previousState.books, bookSpecification]};
      });
  }; // addBook()


  moveBook = (id, destination) => {
      this.setState( (previousState) => {
          previousState.books[id].when = destination;
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
