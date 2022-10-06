import React from 'react';

const stars = (numOfStars) => {
  let fullRating = [];
  let fullStars = Math.floor(numOfStars);
  let fracStars = numOfStars - Math.floor(numOfStars);
  let emptyStars = 5 - Math.ceil(numOfStars);
  if (fracStars > 0 && fracStars < 0.25) {
    emptyStars++;
  }

  for(let i = 1; i <= fullStars; i++) {
    fullRating.push('../images/fullstar.jpeg');
  }

  if (fracStars >= 0.75) {
    fullRating.push('../images/threequarterstar.jpeg');
  } else if (fracStars >= 0.5) {
    fullRating.push('../images/halfstar.jpeg');
  } else if (fracStars >= 0.25) {
    fullRating.push('../images/quarterstar.jpeg');
  }

  for(let i = 1; i <= emptyStars; i++) {
    fullRating.push('../images/emptystar.jpeg');
  }

  return (
    <span>
      {fullRating.map((img, index) => (
        <img src={img} key={index}></img>
      ))}
    </span>
  )
}


export default stars;