function concat(string1, string2) {
    if (string1 && string2)
        return string1 + " " + string2;

    str.count = 0;
    function str() {
        string2 = prompt();
        str.count++;
        return string1 + " " + string2;
    }
    return str;
}

