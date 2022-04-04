export class HardWorker {
    get age() {
        return this._age
    }
    set age(value) {
        if (value >= 1 && value < 100) {
            this._age = value;
        } else {
            return -1;
        }
    }
    get salary() {
        return this._salary;
    }
    set salary(value) {
        if (value >= 100 && value < 10000) {
            this._salary = value;
        } else {
            return -1;
        }
    }

    toObject() {
        return { name: this.name, age: this.age, salary: this.salary };
    }
}
