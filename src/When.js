
class When {

    constructor() {
        this._past = {code: 0, label: "Read"};
        this._now = {code: 1, label: "Currently Reading"};
        this._future = {code: 2, label: "Want to Read"};
    } // constructor()

    get past() { return this._past; }
    get now() { return this._now; }
    get future() { return this._future; }

    get when() {
        return {
            past: this._past,
            now: this._now,
            future: this._future
        } // return
    }

}; // when

export default When
