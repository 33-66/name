// known variables are used 
const speedLimit = 70;
const demeritSpeed = 5;//for the points

const prompt = require('prompt-sync')();
//
// get input from the user.
//
const speed = prompt('what is the car speed: ');

if (speed <= 70) {
    console.log('Ok');//returns ok if the limit ii 70 and below
}
else {
    const points = Math.floor(((speed - speedLimit) / demeritSpeed));// calculate the number of Demerit Points
    if (points > 12)
     { console.log('license suspended') }//returns license suspended if points are more than 12
    else {
        console.log(`points:${points}` )
    }// returns number of points if they are less than 12
}

//
