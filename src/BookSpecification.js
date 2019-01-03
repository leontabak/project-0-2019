
class BookSpecification {

    constructor( coverImageURL, title, authors ) {
        this._coverImageURL = coverImageURL;
        this._title = title;
        this._authors = authors;
    } // constructor()

    get coverImageURL() { return this._coverImageURL; }
    get title() { return this._title; }
    get authors() { return this._authors; }

} // BookSpecification

export default BookSpecification
//module.exports = BookSpecification;
