function Calculator() {
    this.result = 0
    this.init = (value) => {
        this.result = value;
        return this;
    }
    this.add = (value) => {
        this.result += value;
        return this;
    }
    this.sub = (value) => {
        this.result -= value;
        return this;
    }
    this.mul = (value) => {
        this.result *= value;
        return this;
    }
    this.div = (value) => {
        this.result /= value;
        return this;
    }
    this.alert = () => {
        setTimeout(() => alert(calc.result), 5000)
    }
};
