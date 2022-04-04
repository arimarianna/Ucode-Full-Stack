let validator = {
    get(target, property) {
        if (property in target) {
        console.log(`Trying to access the property '${property}'...`)
            return target[property]
        }
        return false
    },
    set(target, property, value) {
        console.log(`Setting value '${value}' to '${property}'`)
        target[property] = value
        if (property === 'age') {
            if (!Number.isInteger(value)) {
                throw new Error(`Uncaught TypeError: The '${property}' is not an integer`)
            }
            if (value > 200 || value == 0) {
                throw new Error(`Uncaught RangeError: The '${property}' is invalid`)
            }
        }
    }
};
