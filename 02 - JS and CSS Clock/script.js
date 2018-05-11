const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hoursHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    const secondsDegrees = ((seconds / 60) * 360)+90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    const minuteDegrees = ((minutes / 60) * 360)+90;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
    const hoursDegrees = ((hours / 24) * 360)+90;
    hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
    console.log(hours);
}

setInterval(setDate, 1000);