
import React, { Component } from 'react';
import BookShelf from './BookShelf';
import When from './When';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';

class BookCase extends Component {

    
    constructor( props ) {
        super( props );
        const when = (new When()).when;
        //BooksAPI.getAll().then( (bookSet) => {console.log(bookSet)} );
    } // constructor()


    render() {

        const present = this.props.books.listOfNowBooks;
        const past = this.props.books.listOfPastBooks;
        const future = this.props.books.listOfFutureBooks;
        const choices = (new When()).choices;

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
                        moveBook={this.props.moveBook}/>
                    <BookShelf
                        books={future}
                        when={choices.future}
                        moveBook={this.props.moveBook}/>
                    <BookShelf
                        books={past}
                        when={choices.past}
                        moveBook={this.props.moveBook}/>
                </div>
            </div>
            <div className="open-search">
                <Link to='/search' className='open-search-link'>Add a book</Link>
            </div>
         </div>
    )} // return
} // BookCase

export default BookCase
