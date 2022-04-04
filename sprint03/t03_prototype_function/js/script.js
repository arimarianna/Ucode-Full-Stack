String.prototype.removeDuplicates = function () {
    const set = new Set(this.split(' '))
    return [...set].join(' ')
}
