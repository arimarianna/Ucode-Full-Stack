function validDate(value) {
    if (value < 10) return (`0${value}`);
    return value;
}

function getFormattedDate(dateObject) {
    let day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let date;

    date = `${validDate(dateObject.getDate())}.${validDate(dateObject.getMonth() + 1)}.${dateObject.getFullYear()} ${validDate(dateObject.getHours())}:${validDate(dateObject.getMinutes())} ${day[dateObject.getDay()]}`;

    return date;
}
