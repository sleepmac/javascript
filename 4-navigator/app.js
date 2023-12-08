const addressLat = 30;
const addressLong = 20;
const positionLat = 20;
const positionLong = 5;

const distanceX = addressLat - positionLat
const distanceY = addressLong - positionLong

const distance = distanceX * distanceX + distanceY * distanceY
console.log(distance)