class LinkedList {
    constructor(arr) {
        this.data = arr
        this.next = null
    }

    add(value) {
        return this.data.push(value)
    }

    remove(value) {
        let ind = this.data.indexOf(value)
        if (ind == -1)
            return false
        return this.data.splice(ind, 1)
    }

    clear() {
        this.data = null
    }

    count() {
        return this.length
    }

    log() {
        console.log(this.data.join(', '))
    }
}

function createLinkedList(arr) {
    return new LinkedList(arr)
}
