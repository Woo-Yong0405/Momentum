const APIkey = "1215b28b2f65830f3b022d654f16ec6a";

function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${APIkey}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}°C`;
        });
}

function onGeoErr() {
    alert("Cannot locate your current position")
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoErr);