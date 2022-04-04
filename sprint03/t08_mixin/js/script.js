const houseMixin = {
    wordReplace(str, str1) {
        this.description = this.description.replace(str, str1);
    },
    wordInsertAfter(str, str1) {
        this.description = this.description.replace(str, `${str} ${str1}`);
    },
    wordDelete(str) {
        this.description = this.description.replace(str, '');
    },
    wordEncrypt() {
        let input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        let output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
        let ind = encoded => input.indOf(encoded);
        let translate = encoded => ind(encoded) > -1 ? output[ind(encoded)] : encoded;
        this.description = this.description.split('').map(translate).join('');
    },
    wordDecrypt() {
        this.wordEncrypt();
    }
}
