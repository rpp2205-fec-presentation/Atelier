import React from 'react';
import ReviewTile from './ReviewTile.jsx'
import axios from 'axios';

const ReviewsList = ({ reviews }) => {

  return (
    <div>
      <h3>An amount of reviews to be sorted</h3>
      {reviews.map((review) => {
        return (
          <ReviewTile review={review} key={review.review_id} />
        )
      })}
    </div>
  )
}



// class ReviewsList extends React.Component{
//   constructor(props) {
//     super(props);
//     this.state = {
//       reviews: []
//     }

//     this.getReviews = this.getReviews.bind(this);
//   }

//   componentDidMount() {
//     this.getReviews();
//   }

//   getReviews() {
//     axios({
//       method: 'get',
//       url: '/reviews/',
//       params: {product_id: 71698, count: 100},
//     })
//     .then(reviews => {
//       this.setState({
//         reviews: reviews.data.results
//       })
//     })
//     .catch(err => {
//       console.log(err);
//     })
//   }

//   render() {
//     return (
//       <div>
//         <h3>An amount of reviews to be sorted</h3>
//         {this.state.reviews.map((review) => {
//           return (
//             <ReviewTile review={review} key={review.review_id} />
//           )
//         })}
//       </div>
//     )
//   }
// }


export default ReviewsList;
