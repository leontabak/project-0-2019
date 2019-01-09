
/**
  @description Render a collection of books.
  @param { props }
  @return specification of page component in JSX

  @author Leon Tabak
  @version 09 January 2019
*/

import React from 'react';
import Book from './Book';
import PropTypes from 'prop-types';

function BookShelf( props ) {

    BookShelf.propTypes = {
        books: PropTypes.arrayOf( PropTypes.object ),
        when: PropTypes.object,
        moveBook: PropTypes.func
    };

    const {books, when, moveBook} = props;

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{when.label}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.map( (book) => (
                        <li key={book.index}>
                            <Book spec={book} moveBook={moveBook} />
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    ); // return

} // BookShelf

export default BookShelf
