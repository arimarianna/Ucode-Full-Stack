exports.calculateTime = () => {
    const start = new Date('01-01-1939');
    let end = new Date();

    let elapsed = {
        years() {
            return end.getFullYear() - start.getFullYear();
        },
        months() {
            return end.getMonth() - start.getMonth();
        },
        days() {
            return end.getDay() - start.getDay();
        }
    };
    return elapsed;
};
