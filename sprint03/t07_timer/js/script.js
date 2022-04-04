class Timer {
    constructor(title, delay, stopCount) {
        this.title = title;
        this.delay = delay;
        this.stopCount = stopCount;
    }
    start() {
        console.log(`Timer ${this.title} started (delay=${this.delay},  stopCount=${this.stopCount})`)
        this.intervalId = setInterval(() => this.tick(), this.delay);
    }

    tick() {
        if (this.stopCount > 0) {
            this.stopCount--;
            console.log(`Timer ${this.title} Tick! | cycles left${this.stopCount}`)
        }
        else {
            this.stop()
        }
    }

    stop() {
        console.log(`Timer ${this.title} stopped`)
        clearInterval(this.intervalId);
    }

}

function runTimer(id, delay, counter) {
    new Timer(id, delay, counter).start();
}
