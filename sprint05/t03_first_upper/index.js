let firstUpper = function(string) {
    if(string === null)
        return '';
    string = string.trim();
    string = string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    return string;
}
module.exports.firstUpper = firstUpper;
