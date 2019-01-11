
/**
 @description Render a field in which to enter a query
     and render a list of books that search returns.
 @param { props }
 @return specification of page component in JSX

 @author Leon Tabak
 @version 09 January 2019
*/

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import SearchResults from './SearchResults';
import When from './When';
import BookSpecification from './BookSpecification';
import PropTypes from 'prop-types';

class SearchBooks extends Component {
    static propTypes = {
        readFromDB: PropTypes.func
    }

    state = {
        query: '',
        selectedBooks: []
    }; // state

    when = new When();

    results = [];

    search = (event) => {
        const term = "" + event.target.value;
        BooksAPI.search( term ).then(
            this.createResultList.bind(this) );
    }; // search()

    createResultList( bookSet ) {
        if(bookSet !== undefined && bookSet.error === undefined) {
            this.results.splice( 0, this.results.length );
            bookSet.forEach(
                (book) => {
                    const spec = this.makeBookSpecification(book);
                    spec.index = this.results.length;
                    this.results.push( spec );
                } // body of arrow function
            ); // forEach
            this.setState( {selectedBooks: this.results} );
        } // if
        else {
            this.results.splice( 0, this.results.length );
            this.setState( {selectedBooks: this.results} );
        } // else
    } // createResultList()

    makeBookSpecification( dbRecord ) {
        const id = dbRecord.id;
        const title = dbRecord.title;

        let authors = dbRecord.authors;
        if( authors === undefined ) {
            // default in case names of authors are
            // not found in database record
            authors = [ "Author unknown" ];
        } // if

        let coverImageURL = undefined;
        if( dbRecord.imageLinks !== undefined ) {
            coverImageURL = dbRecord.imageLinks.smallThumbnail;
        } // if
        if( coverImageURL === undefined ) {
            // default image to use in case no image of book's cover
            // is available
            coverImageURL = "http://www.eonsahead.com/images/charles-river-128x193.jpg";
        } // if

        const when = this.when.possible;

        const spec = new BookSpecification( id, coverImageURL, title, authors, when );

        return spec;
    } // makeSpecification()

    moveBook(index, destination) {
        const id = this.results[index].id;
        const title = this.results[index].title;
        const authors = this.results[index].authors;
        const coverImageURL = this.results[index].coverImageURL;
        const when = this.results[index].when;

        const dbRecord = {
            id: id,
            index: index,
            title: title,
            authors: authors,
            imageLinks: {smallThumbnail: coverImageURL},
            when: when
        };

        const shelf = destination.shelfName;

        //BooksAPI.update( dbRecord, shelf ).then( (msg) => console.log(msg) );
        BooksAPI.update( dbRecord, shelf );
    } // moveBook()

    render() {
        return (
          <div className="search-books">
            <div className="search-books-bar">

              <Link to="/"
                  className="close-search"
                  onClick={this.props.readFromDB}>
                      Close
              </Link>

              <div className="search-books-input-wrapper">
                {/*
                  SEARCH TERMS
                    Android / Art / Artificial Intelligence / Astronomy /
                    Austen / Baseball / Basketball / Bhagat /
                    Biography / Brief / Business / Camus /
                    Cervantes / Christie / Classics / Comics /
                    Cook / Cricket / Cycling / Desai /
                    Design / Development / Digital Marketing / Drama /
                    Drawing / Dumas / Education / Everything /
                    Fantasy / Film / Finance / First /
                    Fitness / Football / Future / Games /
                    Gandhi / Homer / Horror / Hugo /
                    Ibsen / Journey / Kafka / King /
                    Lahiri / Larsson / Learn / Literary Fiction /
                    Make / Manage / Marquez / Money /
                    Mystery / Negotiate / Painting / Philosophy /
                    Photography / Poetry / Production / Programming /
                    React / Redux / River / Robotics /
                    Rowling / Satire / Science Fiction / Shakespeare /
                    Singh / Swimming / Tale / Thrun /
                    Time / Tolstoy / Travel / Ultimate /
                    Virtual Reality / Web Development / iOS /
                */}

                <input
                      type="text"
                      value={this.query}
                      onChange={this.search}
                      placeholder="Search by title or author"/>

              </div>
            </div>
            <SearchResults
                books={this.state.selectedBooks}
                moveBook={this.moveBook.bind(this)}/>
          </div>
        ); // return
    } // render()
} // SearchBooks

export default SearchBooks
