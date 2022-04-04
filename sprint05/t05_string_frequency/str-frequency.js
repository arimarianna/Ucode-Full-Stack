module.exports = class StrFrequency {
    constructor(str) {
        this.str = str;
        this.strUp = str.toUpperCase();
    }

    object = {};

    letterFrequencies() {
        this.object = {};
        for (let i = 0; i < this.strUp.length; i++) {
            if (new RegExp(/[a-z]/i).test(this.strUp[i])) {
                if (this.object[this.strUp[i]]) {
                    this.object[this.strUp[i]] += 1
                } else {
                    this.object[this.strUp[i]] = 1;
                }
            }
        }
        return this.object;
    }

    wordFrequencies() {
        let result = '';
        this.object = {};
        for (let i = 0; i < this.strUp.length; i++) {
            if (new RegExp(/[a-z\s]/i).test(this.strUp[i])) {
                result += this.strUp[i]

            }
        }
        let strArr = result.split(' ')
        for (let i = 0; i < strArr.length; i++) {
            let word = strArr[i];
            if (this.object[word] === undefined) {
                this.object[word] = 1;
            } else {
                this.object[word] += 1;
            }
        }
        return this.object
    }

    reverseString() {
        return [...this.str].reverse().join('')
    }
};
