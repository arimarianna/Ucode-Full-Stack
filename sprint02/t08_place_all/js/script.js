function sortEvenOdd(arr) {
    arr.sort(function (a, b) {
        if (a % 2 != b % 2) {
            return a % 2 - b % 2;
        } else {
            return a - b;
        }
    })
}
