
import React, { Component } from 'react';
import Book from './Book';

class BookShelf extends Component {

  render() {
      const books = this.props.books;
      const when = this.props.when;
      const moveBook = this.props.moveBook;

      return (
          <div className="bookshelf">
              <h2 className="bookshelf-title">{when.label}</h2>
              <div className="bookshelf-books">
                  <ol className="books-grid">
                      {books.map( (book) => (
                          <li key={book.id}>
                              <Book spec={book} moveBook={moveBook} />
                          </li>
                      ))}
                  </ol>
              </div>
          </div>
      ); // return
  }; // render()
} // BookShelf

export default BookShelf
