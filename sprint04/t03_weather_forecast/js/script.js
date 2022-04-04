let api = {
    key: '16bea344836670c881250d70c3344f8b',
}

let listCard = document.querySelector('.box-card');
for (let i = 0; i < 5; i++) {
    listCard.insertAdjacentHTML('afterbegin',
        `<div id="card" class="weather">
        <div class="details">
            <div class="temp"></div>
            <div class="right">
            <div id="data"></div>
            <div id="cardWeather"><img></div>
            <div id="city"></div>
            <div id="sum"></div>
            </div>
        </div>
    </div>`)
}

let cardList = document.querySelectorAll('#card');
let form = document.querySelector('.cityName');

form.addEventListener('submit', function (params) {
    params.preventDefault();

    let formData = new FormData(this);
    let cityKey = formData.get('cityKey');
    Cities(cityKey);
});

function Cities(cityParam) {
    let keyCode = 0;
    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${cityParam}&cnt=45&appid=${api.key}`)
        .then(function (resp) { return resp.json() })
        .then(function (data) {
            for (let j = 0; j < 5; j++) {
                cardList[j].querySelector('.temp').innerHTML = Math.round(data.list[keyCode].main.temp - 273) + '&deg;';
                cardList[j].querySelector('#city').innerHTML = data.city['name'];
                cardList[j].querySelector('#sum').innerHTML = data.list[keyCode].weather[0]['main'];
                cardList[j].querySelector('#data').innerHTML = new Date(data.list[keyCode].dt * 1000).toLocaleDateString("en", { weekday: "long" });
                if (data.list[keyCode].weather[0]['main'] === 'Clear') {
                    cardList[j].querySelector('#cardWeather img').src = 'assets/images/sunny.png'
                }
                else if (data.list[keyCode].weather[0]['main'] === 'Rain') {
                    cardList[j].querySelector('#cardWeather img').src = 'assets/images/rainy.png';
                }
                else if (data.list[keyCode].weather[0]['main'] === 'Clouds') {
                    cardList[j].querySelector('#cardWeather img').src = 'assets/images/cloudy.png'
                }
                else if (data.list[keyCode].weather[0]['main'] === 'Snow') {
                    cardList[j].querySelector('#cardWeather img').src = 'assets/images/snow.png'
                }
                else {
                    return false
                }
                keyCode += 7
            }
        })
        .catch(function () {
            return false
        })
}
Cities('Kharkiv');
