
import React, { Component } from 'react';
import BookShelfChanger from './BookShelfChanger';

class Book extends Component {

    render() {
        const { index, title, authors, coverImageURL, when } = this.props.spec;
        const moveBook = this.props.moveBook;

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
        );
    } // render()
} // Book

export default Book
