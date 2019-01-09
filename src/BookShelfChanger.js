
/**
 @description Render a drop-down menu to select shelf
     on which to place a book.
 @param { props }
 @return specification of page component in JSX

 @author Leon Tabak
 @version 09 January 2019
*/

import React from 'react';
import When from './When';
import PropTypes from 'prop-types';

function BookShelfChanger(props) {

    BookShelfChanger.propTypes = {
        index: PropTypes.number,
        moveBook: PropTypes.func,
        when: PropTypes.object
    };

    const choices = (new When()).choices;

    const respond = (event) => {
        const index = props.index;
        const moveBook = props.moveBook;

        const code = event.target.value;

        let destination = props.when;
        if( code === String(choices.now.code) ) {
            destination = choices.now;
        } // if
        else if( code === String(choices.past.code) ) {
            destination = choices.past;
        } // else if
        else if( code === String(choices.future.code) ) {
            destination = choices.future;
        } // else if
        else if( code === String(choices.never.code) ) {
            destination = choices.never;
        } // else if

        moveBook( index, destination );
    };

    return (
        <div className="book-shelf-changer">
            <select value={props.when.code} onChange={respond}>
                <option value="move" disabled>Move to...</option>
                <option value={choices.now.code}>
                    {choices.now.label}
                </option>
                <option value={choices.future.code}>
                    {choices.future.label}
                </option>
                <option value={choices.past.code}>
                    {choices.past.label}
                </option>
                <option value={choices.never.code}>
                    {choices.never.label}
                </option>
            </select>
        </div> );

} // BookShelfChanger

export default BookShelfChanger;
