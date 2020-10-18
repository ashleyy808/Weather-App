// Constants and Variables
let weatherData, userInput
//let weatherData, userInput, setQuery

const { openWeatherAPIKey } = CONFIG;

const API_KEY = openWeatherAPIKey;
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?';

 
weatherData = document.querySelector('.weatherData');
weatherData.addEventListener('keypress', setQuery, handleGetData);





// Cached Element References 

const $main = $('main'); 
const $form = $('form');
const $input = $('input[type="text"]');
const $title = $('.title');
const $temp = $('.temp'); 
const $index = $('.index');
const $desc = $('.desc');




// Event Listeners  

$form.on('submit', handleGetData);



//Functions


function setQuery(event) {
    if(event.keyCode === 13) {
        handleGetData(value);
    }
}

function handleGetData (event) {
    console.log(event);
   event.preventDefault();
    userInput = $input.val();
    if(!userInput) return;
    console.log(userInput);
    $.ajax(BASE_URL +  `q=${userInput}` + '&appid=' + API_KEY + '&units=imperial') 
    .then(function(data) { 
        weatherData = data;
        displayResults (weatherData);
    }, function(error) {
        console.log('Error: ', error);
    })
}


function displayResults (weather) {
    console.log(weather);
    console.log (weather ['main']); 
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let now = new Date();
    let date = document.querySelector('.location .date');
    date.innerText = dateBuilder(now);

    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}`

    let index = document.querySelector('.current .index');
    index.innerHTML =`${Math.round(weather.main.feels_like)}`

    let desc = document.querySelector('.current .desc');
    desc.innerText = `${weather.weather[0].description}`;

}

function dateBuilder (d) {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',
'November', 'December']; 
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
}















/*
function render() {
      $main.text(data.main);
      $form.text(data.form);
      $input.text(data.input);
      $title.text(data.title);
      $temp.text(data.temp);
      $index.text(data.index);
      $desc.text(data.desc);
 }

 */
 







//q={city name}&appid={API key}
/*
function handleGetData(event) {
    event.preventDefault();  //turn off default behavior (page refresh)

    userInput = $input.val();
-
    if(!userInput) return; // get out of there, do not run anymore code!

}
*/


/*
const promise = $.ajax({
    url:'https://api.openweathermap.org/data/2.5/weather?q=Astoria&apikey=ed4a69d703c758ec857ac7b3f3eae2fa'
});
promise.then(
      (data) => {
      $main.text(data.Main);
      $form.text(data.Form);
      $input .text(data.Input);
    },
      (error) => {
     console.log('bad request: ', error);
    });
  */


