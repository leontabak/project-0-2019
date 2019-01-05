
import React, { Component } from 'react';
import BookShelf from './BookShelf';
import When from './When';

class BookCase extends Component {


    render() {

    const present = this.props.books.listOfNowBooks;
    const past = this.props.books.listOfPastBooks;
    const future = this.props.books.listOfFutureBooks;
    const scheduling = (new When()).when;

        return ( 
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <BookShelf books={present} when={scheduling.now} />
                    <BookShelf books={future} when={scheduling.future} />
                    <BookShelf books={past} when={scheduling.past} />
                </div>
            </div>
            <div className="open-search">
                <button onClick={this.props.showSearchBooks}>
                    Add a book
                </button>
            </div>
         </div>
    )} // return
} // BookCase

export default BookCase
