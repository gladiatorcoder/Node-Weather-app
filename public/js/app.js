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
            messageOne.textContent = data.location;
            messageTwo.textContent = 'Forecast: ' +data.forecast; 
        }
    })
})
})