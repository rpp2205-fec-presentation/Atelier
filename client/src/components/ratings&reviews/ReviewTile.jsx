import React, { useState } from 'react';
import stars from '../helpers/stars.js';
import { Tile, Check, TextCent, ScaleText, BodyText, ShowMore, ImgThumbnail } from './ReviewsStyles.jsx';
import { format, parseISO } from 'date-fns';

const BodyReview = (props) => {
  const [expanded, setExpanded] = useState(false);

  let body = props.body;
  if (body.length < 250) {
    return <BodyText>{body}</BodyText>;
  }

  let buttonText = 'hide';
  if (!expanded) {
    buttonText = 'show more';
    const splitIndex = body.lastIndexOf(' ', 250);
    if (splitIndex >= 0) {
      body = `${body.substring(0, splitIndex)}...`;
    } else {
      body = body.substring(0, 250);
    }
  }
  return (
    <BodyText style={{ maxWidth: '600px' }}>
      {body}
      <ShowMore onClick={() => setExpanded(!expanded)}>{buttonText}</ShowMore>
    </BodyText>
  );
};


const ReviewTile = ({ review }) => {
  let recommended;
  if (review.recommend) {
    recommended = <span><Check></Check><TextCent>I recommend this product</TextCent></span>
  } else {
    recommended = <span></span>
  };

  let reviewDate = format(parseISO(review.date), 'MMMM dd yyyy');


  return (
    <Tile>
      <br></br>
      <div>{stars(review.rating)}<ScaleText>{review.reviewer_name}, {reviewDate}</ScaleText>
      </div>
      <h3> {review.summary} </h3>
      <BodyReview body={review.body} />
      <div>
        {review.photos.map((photo, index) => {
          if (typeof photo === 'string') {
            photo = { url: photo, key: index}
          }
          return (

            <ImgThumbnail src={photo.url} key={photo.id}/>
          )
        })}
      </div>
      <h5>{recommended}</h5>
      <br></br>
      <span>Helpful? {review.helpfulness}</span>
    </Tile>
  )
}

export default ReviewTile;