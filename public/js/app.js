const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    messageOne.textContent = 'Loading...';
    messageTwo.textContent = '';

    const location = search.value;
    console.log(location);

    fetch('/weather?address='+location).then((res) => {
    res.json().then((data) => {
        if(data.error){
            messageOne.textContent = data.error;
            messageTwo.textContent = '';
        }else{
            // messageTwo.textContent = 'Location: '+final.location
            // +' || Forecast:' +final.forecast;
            // messageOne.textContent = '';
            messageOne.textContent = 'Location: ' +data.location +', latitude: '+data.lat +', longitude: ' +data.lon +', local time:' +data.localTime ;
            messageTwo.textContent = 'Forecast: ' +data.forecast +', humidity:' +data.humidity +', visibility:' +data.visibility +', Wind speed: ' +data.windSpeed +', cloud cover:' +data.cloudCover +', air pressure: ' +data.pressure; 
        }
    })
})
})