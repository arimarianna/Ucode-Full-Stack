function checkBrackets(str) {
    let count = 0;
    let checkValid1 = /(\()/g;
    let checkValid2 = /(\))/g;

    if (typeof (str) != 'string' || (str.match(checkValid1) == null && str.match(checkValid2) == null)) {
        return -1;
    }
    if (str.match(checkValid1) == null) {
        return str.match(checkValid2).length;
    }
    if (str.match(checkValid2) == null) {
        return str.match(checkValid1).length;
    }

    if (str.search(checkValid2) < str.search(checkValid1)) {
        count = count + 1;
        str = str.slice(str.search(checkValid2) + 1);
    }

    let open = str.match(checkValid1).length;
    let close = str.match(checkValid2).length;

    if (close > open)
        return count += close - open;
    else if (open > close)
        return count += open - close;
    else return count;
}
