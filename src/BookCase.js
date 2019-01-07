
import React, { Component } from 'react';
import BookShelf from './BookShelf';
import When from './When';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';

class BookCase extends Component {

/*    
    constructor( props ) {
        super( props );
        const when = (new When()).when;
        //BooksAPI.getAll().then( (bookSet) => {console.log(bookSet)} );
    } // constructor()
*/

    choices = (new When()).choices;

    listOfNowBooks( allBooks ) {
        const choices = this.choices;
        return allBooks.filter( (book) =>
            (book.when.code === this.choices.now.code) );
    } // listOfNowBooks()

    listOfPastBooks( allBooks ) {
        const choices = this.choices;
        return allBooks.filter( (book) =>
            (book.when.code === this.choices.past.code) );
    } // listOfPastBooks()

    listOfFutureBooks( allBooks ) {
        const choices = this.choices;
        return allBooks.filter( (book) =>
            (book.when.code === this.choices.future.code) );
    } // listOfFutureBooks()

    render() {

        const allBooks = this.props.books;
        const present = this.listOfNowBooks( allBooks );
        const past = this.listOfPastBooks( allBooks );
        const future = this.listOfFutureBooks( allBooks );
        const choices = this.choices;

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
