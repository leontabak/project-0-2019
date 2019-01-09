
/**
 @description Search for books, organize books, and display books.
 @author Leon Tabak
 @version 09 January 2019
*/

import React from 'react';
import './App.css';
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
        this.readFromDB();
    } // componentDidMount()

    readFromDB() {
        BooksAPI.getAll().then( (bookSet) => {bookSet.forEach(
            (bookSpec) => {
                const id = bookSpec.id;
                const title = bookSpec.title;
                const authors = bookSpec.authors;
                const coverImageURL = bookSpec.imageLinks.smallThumbnail;
                const when = this.when.shelfNameToObject( bookSpec.shelf );

                const spec =
                    new BookSpecification( id, coverImageURL, title, authors, when );

                spec.index = this.state.books.length;
                this.addBook( spec );
            }
        );});

    } // readFromDB()

  isDuplicate( bookSpec ) {
      return this.state.books.filter( (spec) => (spec.id === bookSpec.id)).length > 0 ;
  } // isDuplicate()

  addBook = (bookSpecification) => {
      if( !this.isDuplicate( bookSpecification ) ) {
          this.setState( (previousState) => {
              bookSpecification.index = previousState.books.length;
              const nextState = {books: [...previousState.books, bookSpecification]};
              return nextState;
          }); this.setState()
      } // if
  }; // addBook()


  moveBook = (index, destination) => {
      const id = this.state.books[index].id;
      const title = this.state.books[index].title;
      const authors = this.state.books[index].authors;
      const coverImageURL = this.state.books[index].coverImageURL;
      const when = this.state.books[index].when;

      const dbRecord = {
          id: id,
          index: index,
          title: title,
          authors: authors,
          imageLinks: {smallThumbnail: coverImageURL},
          when: when
      };

      const shelf = destination.shelfName;

      //BooksAPI.update( dbRecord, shelf ).then( (msg) => console.log(msg) );
      BooksAPI.update( dbRecord, shelf );

      this.setState( (previousState) => {
          previousState.books[index].when = destination;
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
                  <SearchBooks readFromDB={this.readFromDB.bind(this)}/>
                )} />
        </div>

    ); // return
  } // render()
} // BooksApp

export default BooksApp
