
/**
  @description Render an image of the cover of a book
    together with its title and authors and a menu for
    selecting a shelf on which to place the book.
  @param { props }
  @return specification of page component in JSX

  @author Leon Tabak
  @version 09 January 2019
*/

import React from 'react';
import BookShelfChanger from './BookShelfChanger';
import PropTypes from 'prop-types';

function Book( props ) {

    Book.propTypes = {
        index: PropTypes.number,
        title: PropTypes.string,
        authors: PropTypes.arrayOf( PropTypes.string ),
        when: PropTypes.object
    };

    const { index, title, authors, coverImageURL, when } = props.spec;
    const moveBook = props.moveBook;

    return (
        <div className="book">
            <div className="book-top">
                <div
                    className="book-cover"
                    style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url(${coverImageURL})`}}>
                </div>

                <BookShelfChanger index={index} when={when} moveBook={moveBook} />

            </div>
            <div className="book-title">
                {title}
            </div>
            <div className="book-authors">
                {authors.join( ", " )}
            </div>
        </div>
    ); // return

} // Book

export default Book
