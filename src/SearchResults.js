
/**
 @description Render a collection of books that a search returns.
 @param { props }
 @return specification of page component in JSX

 @author Leon Tabak
 @version 09 January 2019
*/

import React from 'react';
import BookShelf from './BookShelf';
import When from './When';
import PropTypes from 'prop-types';

function SearchResults( props ) {

    SearchResults.propTypes = {
        books: PropTypes.arrayOf( PropTypes.object ),
        moveBook: PropTypes.func
    };

    const choices = (new When()).choices;

    const allBooks = props.books;

    return (
        <div className="list-results">
            <div className="list-books-content">
                <div>
                    <BookShelf
                        books={allBooks}
                        when={choices.possible}
                        moveBook={props.moveBook}/>
                </div>
            </div>
        </div>
    ); // return
} // SearchResults

export default SearchResults
