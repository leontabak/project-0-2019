
import React, { Component } from 'react';
import When from './When';

class BookShelfChanger extends Component {

    render() {

        const when = (new When()).when;

        return (
        <div className="book-shelf-changer">
            <select value={this.props.when.code}>
                <option value="move" disabled>Move to...</option>
                <option value={when.now.code}>
                    {when.now.label}
                </option>
                <option value={when.future.code}>
                    {when.future.label}
                </option>
                <option value={when.past.code}>
                    {when.past.label}
                </option>
                <option value="none">None</option>
            </select>
        </div> );
    } // render()
} // BookShelfChanger

export default BookShelfChanger;
