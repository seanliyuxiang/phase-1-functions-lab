// Code your solution in this file!

function distanceFromHqInBlocks(pickupLocation) {
  return Math.abs(pickupLocation - 42);
}

function distanceFromHqInFeet(pickupLocation) {
  return distanceFromHqInBlocks(pickupLocation) * 264;
}

function distanceTravelledInFeet(beginningBlock, destinationBlock) {
  return Math.abs(beginningBlock - destinationBlock) * 264;
}

function calculatesFarePrice(start, destination) {
  let fare;
  let distanceInFeet = distanceTravelledInFeet(start, destination);

  if (distanceInFeet <= 400) {
    fare = 0;
  } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
    fare = (distanceInFeet - 400) * 0.02;
  } else if (distanceInFeet > 2000 && distanceInFeet < 2500) {
    fare = 25;
  } else if (distanceInFeet >= 2500) {
    fare = 'cannot travel that far';
  }

  return fare;
}