import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import calculateAverageRating from '../helpers/calculateAverageRating.js';
import stars from '../helpers/stars.js';
import PrctScaleChar from './PrctScaleChar.jsx';

const ScaleText = styled.span`
  float: right;
  padding: 0 3px;
`;

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

  let char = metaData.characteristics;
  if (char !== undefined) {
    var size = char.Size || '';
    var width = char.Width || '';
    var comfort = char.Comfort || '';
    var quality = char.Quality || '';
    var length = char.Length || '';
    var fit = char.Fit || '';
  }

  let charBreakdown = (
    char !== undefined ?
      <>
        {!!size && (
          <div>
            <span><b>Size </b></span> <br />
            <PrctScaleChar value={Number(size.value).toFixed(1)} />
            <span>a size too small</span><ScaleText>a size too big</ScaleText> <br/>
          </div>
        )}
          <br></br>
        {!!width && (
          <div>
            <span><b>Width </b></span> <br />
            <PrctScaleChar value={Number(width.value).toFixed(1)} />
            <span>too narrow</span><ScaleText>too wide</ScaleText> <br/>
          </div>
        )}
        <br></br>
        {!!comfort && (
          <div>
            <span><b>Comfort </b></span> <br />
            <PrctScaleChar value={Number(comfort.value).toFixed(1)} />
            <span>uncomfortable</span><ScaleText>perfect</ScaleText> <br/>
          </div>
        )}
        <br></br>
        {!!quality && (
          <div>
            <span><b>Quality </b></span> <br />
            <PrctScaleChar value={Number(quality.value).toFixed(1)} />
            <span>poor</span><ScaleText>perfect</ScaleText> <br/>
          </div>
        )}
        <br></br>
        {!!length && (
          <div>
            <span><b>Length </b></span> <br />
            <PrctScaleChar value={Number(length.value).toFixed(1)} />
            <span>runs short</span><ScaleText>runs long</ScaleText> <br/>
          </div>
        )}
        <br></br>
        {!!fit && (
          <div>
            <span><b>Fit </b></span> <br />
            <PrctScaleChar value={Number(fit.value).toFixed(1)} />
            <span>runs tight</span><ScaleText>runs big</ScaleText> <br/>
          </div>)}
      </> :
      <></>
  );


        return (
          <div>
            <h3> Rating Breakdown </h3>
            <h2>Overall Rating</h2>
            <h4>{avgRating(ratings)}</h4>
            <h4>{stars(avgRating(ratings))}</h4>
            <h2>Ratings By Stars</h2>
            <div>{Object.keys(theRatings).map(rating => {
                  return <li key={rating}>{stars(rating)}: {theRatings[rating]}</li>;
                })}
            </div>
            {charBreakdown}
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