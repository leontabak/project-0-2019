
import React, { Component } from 'react';
import Book from './Book';

class BookShelf extends Component {

  render() {
      const books = this.props.books;
      const when = this.props.when;

      return (
          <div className="bookshelf">
              <h2 className="bookshelf-title">{when.label}</h2>
              <div className="bookshelf-books">
                  <ol className="books-grid">
                      {books.map( (book) => (
                          <li key={book.index}>
                              <Book spec={book} />
                          </li>
                      ))}
                  </ol>
              </div>
          </div>
      ); // return
  }; // render()
} // BookShelf

export default BookShelf
