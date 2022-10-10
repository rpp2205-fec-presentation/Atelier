import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import calculateAverageRating from '../helpers/calculateAverageRating.js';
import stars from '../helpers/stars.js';

const RatingsBD = ({ productId, metaData, ratings }) => {

  let theRatings = ratings || { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0};

  let avgRating = (ratingObj) => {
    let count = 0;
    let total = 0;

    for(let rating in ratingObj) {
      count += Number(ratingObj[rating]);
      total += rating * ratingObj[rating];
    }
    return (count === 0) ? 5 : (total / count).toFixed(1);
  };

        return (
          <div>
            <h3> Rating Breakdown </h3>
            <h2>Overall Rating</h2>
            <h4>{avgRating(ratings)}</h4>
            <h4>{stars(avgRating(ratings))}</h4>
            <h2>Ratings By Stars</h2>
            <ul>{Object.keys(theRatings).map(rating => {
                  return <li key={rating}>{rating}: {theRatings[rating]}</li>;
                })}
            </ul>
          </div>
        )

}





// class RatingsBD extends React.Component{
//   constructor(props) {
//     super(props);


//     // this.getMetaData = this.getMetaData.bind(this);
//   }

//   componentDidMount() {
//     this.getMetaData();
//   }

//   getMetaData() {
//     axios({
//       method: 'get',
//       url: '/reviews/meta',
//       params: {product_id: 71697},
//     })
//     .then(meta => {
//       console.log(meta.data.characteristics);
//       // })
//     })
//     .catch(err => {
//       console.log(err);
//     })
//   }

//   render() {
//     return (
//       <div>
//         <h3> Rating Breakdown </h3>
//       </div>
//     )
//   }
// }

export default RatingsBD;