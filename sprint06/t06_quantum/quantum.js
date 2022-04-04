exports.calculateTime = () => {
    const start = new Date('01-01-1939');
    let end = new Date();
    end = new Date(Math.floor((end.getTime() - start.getTime()) / 7) + start.getTime());

    let quantumDate = [
        [(end.getFullYear() - start.getFullYear())],
        [end.getMonth() - start.getMonth()],
        [end.getDay() - start.getDay()]
    ]
    return quantumDate;
}
