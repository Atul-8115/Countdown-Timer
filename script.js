const daysItem = document.querySelector('#days');
const hoursItem = document.querySelector('#hours');
const minItem = document.querySelector('#min');
const secItem = document.querySelector('#sec')

let countDown = () => {
    let futureDate = new Date("1 jan 2024");
    let currentDate = new Date();
    let myDate = futureDate - currentDate;
    //console.log(myDate);

    let days = Math.floor(myDate/1000/60/60/24);

    let hours = Math.floor(myDate/1000/60/60)%24;

    let min =  Math.floor(myDate/1000/60) % 60;

    let sec =  Math.floor(myDate/1000) % 60;

    daysItem.innerHTML = days
    hoursItem.innerHTML = hours
    minItem.innerHTML = min
    secItem.innerHTML = sec
}

countDown();

setInterval(countDown,1000)