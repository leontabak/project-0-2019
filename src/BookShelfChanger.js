
import React, { Component } from 'react';
import When from './When';

class BookShelfChanger extends Component {

    respond = (event) => {
        const id = this.props.id;
        const moveBook = this.props.moveBook;

        const choices = (new When()).choices;
        const code = event.target.value;

        let destination = this.props.when;
        if( code === String(choices.now.code) ) {
            destination = choices.now;
        } // if
        else if( code === String(choices.past.code) ) {
            destination = choices.past;
        } // else if
        else if( code === String(choices.future.code) ) {
            destination = choices.future;
        } // else if

        moveBook( id, destination );
    };

    render() {

        const choices = (new When()).choices;

        return (
        <div className="book-shelf-changer">
            <select value={this.props.when.code} onChange={this.respond}>
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
    } // render()
} // BookShelfChanger

export default BookShelfChanger;
