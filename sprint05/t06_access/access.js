module.exports = class Access {
    get mark_LXXXV() {
        return this._mark_LXXXV;
    }
    set mark_LXXXV(value) {
        if(value === null)
            return 'null';
        else if (value === undefined)
            return 'undefined';
        else {
            this._mark_LXXXV = value;
        }
    }
}
