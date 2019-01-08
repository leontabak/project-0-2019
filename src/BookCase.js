
import React, { Component } from 'react';
import BookShelf from './BookShelf';
import When from './When';
import { Link } from 'react-router-dom';

class BookCase extends Component {

    choices = (new When()).choices;

    listOfNowBooks( allBooks ) {
        const choices = this.choices;
        return allBooks.filter( (book) =>
            (book.when.code === choices.now.code) );
    } // listOfNowBooks()

    listOfPastBooks( allBooks ) {
        const choices = this.choices;
        return allBooks.filter( (book) =>
            (book.when.code === choices.past.code) );
    } // listOfPastBooks()

    listOfFutureBooks( allBooks ) {
        const choices = this.choices;
        return allBooks.filter( (book) =>
            (book.when.code === choices.future.code) );
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

            {/*<div className="open-search">*/}
            <div className="open-search">
                <Link to='/search' className='open-search-link'>Add a book</Link>
            </div>

        </div>
    )} // render()
} // BookCase

export default BookCase
