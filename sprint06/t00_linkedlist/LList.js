const {LLData} = require("./LLData");

exports.LList = class {
    head = null;
    tail = null;

    getFirst() {
        return this.head;
    }

    getLast() {
        return this.tail;
    }

    add(value) {
        const node = new LLData(value);
        if (!this.head) {
            this.head = node;
        }
        if (this.tail) {
            this.tail.next = node;
        }
        this.tail = node;
    }

    addFromArray(arrayOfData) {
        arrayOfData.forEach(arrayOfData => this.add(arrayOfData));
    }

    remove(value) {
        if (!this.head) return null;

        let node = this.head;
        if (this.head.data === value) {
            this.head = this.head.next;
            return true;
        }
        while (node.next) {
            if (node.next.data === value) {
                if (node.next === this.tail)
                    this.tail = node;
                node.next = node.next.next;
                return true;
            } else node = node.next;
        }
        return false;
    }

    removeAll(value) {
        if (!this.head) return null;

        let node = this.head;

        if (node !== null) {
            if (this.head.data === value) this.head = this.head.next;
            while (node.next) {
                if (node.next.data === value) node.next = node.next.next;
                else node = node.next;
            }
        }
        if (this.tail.data === value) this.tail = node;
    }

    clear() {
        this.head = null;
        this.tail = null;
    }

    contains(value) {
        if (!this.head) return null;
        if (value === undefined) return null;

        let node = this.head;

        while (node) {
            if (node.data === value) return true;
            node = node.next;
        }
        return false;
    }

    count() {
        let count = 0;
        let node = this.head;
        while (node) {
            node = node.next;
            count++;
        }
        return count
    }

    toString() {
        let nodes = [];
        let curNode = this.head
        while (curNode) {
            nodes.push(curNode.data)
            curNode = curNode.next;
        }
        return nodes.join(', ');
    }

    * [Symbol.iterator]() {
        let node = this.head;
        while (node !== null) {
            yield node.data;
            node = node.next;
        }
    }
    result = this[Symbol.iterator]();

    getIterator() {
        return this.result;
    }

    filter(callback) {
        let newList = Object.assign(Object.create(this), JSON.parse(JSON.stringify(this)))
        let node = newList.head
        while (node) {
            if (!callback(node.data)) {
                newList.remove(node.data)
            }
            node = node.next;
        }
        return newList
    }
}
