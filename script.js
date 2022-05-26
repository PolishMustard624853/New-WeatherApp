const api = {
    key: 'eb7c6c94cbc9aa24e851279707916e63',
    url: 'api.openweathermap.org/data/2.5/',
}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

// if keyCode(13) is registered, get the results
function setQuery(event) {
    if (event.keyCode == 13) {
        getResults(searchbox.value);
        console.log(searchbox.value);
    }
}

function displayResults (weather) {
    let city = 
}

