function onGeoSuccess() {
    
}

function onGeoErr() {
    alert("Can't locate you")
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoErr);