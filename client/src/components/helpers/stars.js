import React from 'react'
import styled from 'styled-components';



const stars = (numOfStars) => {
  let fullRating = [];
  let fullStars = Math.floor(numOfStars);
  let fracStars = numOfStars - Math.floor(numOfStars);
  let emptyStars = 5 - Math.ceil(numOfStars);
  if (fracStars > 0 && fracStars < 0.25) {
    emptyStars++;
  }

  for(let i = 1; i <= fullStars; i++) {
    fullRating.push('../images/fullstar.png');
  }

  if (fracStars >= 0.75) {
    fullRating.push('../images/threequarterstar.png');
  } else if (fracStars >= 0.5) {
    fullRating.push('../images/halfstar.png');
  } else if (fracStars >= 0.25) {
    fullRating.push('../images/quarterstar.png');
  }

  for(let i = 1; i <= emptyStars; i++) {
    fullRating.push('../images/emptystar.png');
  }

  return (
    <span>
      {fullRating.map((img, index) => (
        <img id="starImg" alt="rating star" src={img} key={index}></img>
      ))}
    </span>
  )
}


export default stars;