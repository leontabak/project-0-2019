
import BookSpecification from './BookSpecification';
import When from './When.js';
import * as BooksAPI from './BooksAPI';

class BookList {
    _listOfBooks = [];

    when = (new When());
    choices = this.when.choices;

/*
    constructor() {
        this.initialize();
        //this.readFromDB();
    } // constructor()
*/

    get listOfBooks() { return this._listOfBooks; }

    get listOfNowBooks() {
        return this._listOfBooks.filter( (book) =>
            (book.when.code === this.choices.now.code) );
    }

    get listOfPastBooks() {
        return this._listOfBooks.filter( (book) =>
            (book.when.code === this.choices.past.code) );
    }

    get listOfFutureBooks() {
        return this._listOfBooks.filter( (book) =>
            (book.when.code === this.choices.future.code) );
    }

    clear() {
        this._listOfBooks.splice( 0, this._listOfBooks.length );
    } // clear()

    addBook( bookSpecification ) {
        bookSpecification.id = this._listOfBooks.length;

        //console.log( "adding " + bookSpecification.title );
        //console.log( bookSpecification.authors );
        //console.log( bookSpecification.when.label );
        //console.log( bookSpecification.id );

        //console.log( "length before adding: " + this._listOfBooks.length );
        this._listOfBooks.push( bookSpecification );
        //console.log( "length after adding: " + this._listOfBooks.length );
    } // addBook()

    initialize() {
        /* book #0 */
        let urlComponents = [];
        urlComponents.push( "http://books.google.com/books/content" );
        urlComponents.push( "?id=PGR2AwAAQBAJ" );
        urlComponents.push( "&printsec=frontcover" );
        urlComponents.push( "&img=1" );
        urlComponents.push( "&zoom=1" );
        urlComponents.push( "&imgtk=AFLRE73-" );
        urlComponents.push( "GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_" );
        urlComponents.push( "mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-" );
        urlComponents.push( "tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y" );
        urlComponents.push( "&source=gbs_api" );

        let coverImageURL = urlComponents.join( "" );
        let title = "To Kill a Mockingbird";
        let authors = ["Harper Lee"];
        let when = this.choices.now;

        let bookSpecification = new BookSpecification(
            coverImageURL, title, authors, when );

        this.addBook( bookSpecification );

        /* book #1 */
        urlComponents = [];
        urlComponents.push( "http://books.google.com/books/content" );
        urlComponents.push( "?id=yDtCuFHXbAYC" );
        urlComponents.push( "&printsec=frontcover" );
        urlComponents.push( "&img=1" );
        urlComponents.push( "&zoom=1" );
        urlComponents.push( "&imgtk=AFLRE72RRiTR6U5OUg3IY_" );
        urlComponents.push( "LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2" );
        urlComponents.push( "ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOT" );
        urlComponents.push( "vrZTCObQbsfp4UbDqQyGISCZfGN" );
        urlComponents.push( "&source=gbs_api"  );

        coverImageURL = urlComponents.join( "" );
        title = "Ender's Game";
        authors = ["Orson Scott Card"];
        when = this.choices.now;

        bookSpecification = new BookSpecification(
            coverImageURL, title, authors, when );

        this.addBook( bookSpecification );

        /* book #2 */
        urlComponents = [];
        urlComponents.push( "http://books.google.com/books/content" );
        urlComponents.push( "?id=uu1mC6zWNTwC" );
        urlComponents.push( "&printsec=frontcover" );
        urlComponents.push( "&img=1" );
        urlComponents.push( "&zoom=1" );
        urlComponents.push( "&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-" );
        urlComponents.push( "SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zf" );
        urlComponents.push( "Cfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX" );
        urlComponents.push( "&source=gbs_api" );

        coverImageURL = urlComponents.join( "" );
        title = "1776";
        authors = ["David McCullough"];
        when = this.choices.future;

        bookSpecification = new BookSpecification(
            coverImageURL, title, authors, when );

        this.addBook( bookSpecification );

        /* book #3 */
        urlComponents = [];
        urlComponents.push( "http://books.google.com/books/content" );
        urlComponents.push( "?id=wrOQLV6xB-wC" );
        urlComponents.push( "&printsec=frontcover" );
        urlComponents.push( "&img=1" );
        urlComponents.push( "&zoom=1" );
        urlComponents.push( "&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-" );
        urlComponents.push( "LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-" );
        urlComponents.push( "mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB" );
        urlComponents.push( "&source=gbs_api" );

        coverImageURL = urlComponents.join( "" );
        title = "Harry Potter and the Sorcerer's Stone";
        authors = ["J.K. Rowling"];
        when = this.choices.future;

        bookSpecification = new BookSpecification(
            coverImageURL, title, authors, when );

        this.addBook( bookSpecification );

        /* book #4 */
        urlComponents = []; 
        urlComponents.push( "http://books.google.com/books/content" );
        urlComponents.push( "?id=pD6arNyKyi8C" );
        urlComponents.push( "&printsec=frontcover" );
        urlComponents.push( "&img=1" );
        urlComponents.push( "&zoom=1" );
        urlComponents.push( "&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_" );
        urlComponents.push( "gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8c" );
        urlComponents.push( "Te4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZ" );
        urlComponents.push( "ylo4VbB7K5iRSk" );
        urlComponents.push( "&source=gbs_api" );

        coverImageURL = urlComponents.join( "" );
        title = "The Hobbit";
        authors = ["J.R.R. Tolkien"];
        when = this.choices.past;

        bookSpecification = new BookSpecification(
            coverImageURL, title, authors, when );

        this.addBook( bookSpecification );

        /* book #5 */
        urlComponents = [];
        urlComponents.push( "http://books.google.com/books/content" );
        urlComponents.push( "?id=1q_xAwAAQBAJ" );
        urlComponents.push( "&printsec=frontcover" );
        urlComponents.push( "&img=1" );
        urlComponents.push( "&zoom=1" );
        urlComponents.push( "&imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-" );
        urlComponents.push( "dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWT" );
        urlComponents.push( "pw6VOGq1leINsnTdLc_" );
        urlComponents.push( "S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8" );
        urlComponents.push( "&source=gbs_api" );

        coverImageURL = urlComponents.join( "" );
        title = "Oh, the Places You'll Go!";
        authors = ["Seuss"];
        when = this.choices.past;

        bookSpecification = new BookSpecification(
            coverImageURL, title, authors, when );

        this.addBook( bookSpecification );

        /* book #6 */
        urlComponents = []; 
        urlComponents.push( "http://books.google.com/books/content" );
        urlComponents.push( "?id=32haAAAAMAAJ" );
        urlComponents.push( "&printsec=frontcover" );
        urlComponents.push( "&img=1" );
        urlComponents.push( "&zoom=1" );
        urlComponents.push( "&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__" );
        urlComponents.push( "nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_" );
        urlComponents.push( "xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_" );
        urlComponents.push( "11BBIUXdxbFkVMdi" );
        urlComponents.push( "&source=gbs_api" );

        coverImageURL = urlComponents.join( "" );
        title = "The Adventures of Tom Sawyer";
        authors = ["Mark Twain"];
        when = this.choices.past;

        bookSpecification = new BookSpecification(
            coverImageURL, title, authors, when );

        this.addBook( bookSpecification );
    } // initialize()

    readFromDB() {
        BooksAPI.getAll().then( (bookSet) => {bookSet.forEach( 
            (bookSpec) => {
                const title = bookSpec.title;
                const authors = bookSpec.authors;
                const coverImageURL = bookSpec.imageLinks.smallThumbnail;
                const when = this.when.labelToObject( bookSpec.shelf );

                const spec = new BookSpecification( coverImageURL, title, authors, when );

                this.addBook( spec );
            }
        );});
    } // readFromDB()

    writeToDB() {
        this.listOfBooks.forEach( 
            (bookSpec) => {
                console.log( bookSpec.title ); 
                BooksAPI.update( bookSpec, bookSpec.when.label ).then( () => {console.log("posted");});
            } );
    } // writeToDB()

} // BookList

export default BookList
