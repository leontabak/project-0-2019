
/**
  @description Render a 3 bookshelves.
  @param { props }
  @return specification of page component in JSX

  @author Leon Tabak
  @version 09 January 2019
*/

import React from 'react';
import BookShelf from './BookShelf';
import When from './When';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function BookCase( props ) {

    BookCase.propTypes = {
        books: PropTypes.arrayOf( PropTypes.object ),
        moveBook: PropTypes.func
    }

    const choices = (new When()).choices;

    const listOfNowBooks = ( allBooks ) =>
        allBooks.filter( (book) =>
            (book.when.code === choices.now.code) );

    const listOfPastBooks = ( allBooks ) =>
        allBooks.filter( (book) =>
            (book.when.code === choices.past.code) );

    const listOfFutureBooks = ( allBooks ) =>
        allBooks.filter( (book) =>
            (book.when.code === choices.future.code) );

    const { books, moveBook }  = props;

    const present = listOfNowBooks( books );
    const past = listOfPastBooks( books );
    const future = listOfFutureBooks( books );

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>

            <div className="list-books-content">
                <div>
                    <BookShelf
                        books={present}
                        when={choices.now}
                        moveBook={moveBook}/>
                    <BookShelf
                        books={future}
                        when={choices.future}
                        moveBook={moveBook}/>
                    <BookShelf
                        books={past}
                        when={choices.past}
                        moveBook={moveBook}/>
                </div>
            </div>

            <div className="open-search">
                <Link
                    to='/search'
                    className='open-search-link'>
                        Add a book
                </Link>
            </div>

        </div>
    );//} // render()
} // BookCase

export default BookCase
