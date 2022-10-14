import React, { useState, useEffect } from 'react';
import stars from '../helpers/stars.js';
import { Tile, Check, TextCent, ScaleText, BodyText, ShowMore, ImgThumbnail, HoverLink, HelpfulLine } from './ReviewsStyles.jsx';
import { format, parseISO } from 'date-fns';
import axios from 'axios';
import { reviewsCall } from '../helpers/reviewsCall.js';

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


const ReviewTile = ({ review, reviews, productId }) => {
  const [countHelpful, setCountHelpful] = useState(0);
  const [isHelpful, setIsHelpful] = useState(false);
  const [isReported, setIsReported] = useState(false);

  let recommended;
  if (review.recommend) {
    recommended = <span><Check></Check><TextCent>I recommend this product</TextCent></span>
  } else {
    recommended = <span></span>
  };

  let reviewDate = format(parseISO(review.date), 'MMMM dd yyyy');

  useEffect(() => {
    setCountHelpful(review.helpfulness)
  }, []);

  const handleHelpfulClick = (e, review_id) => {
    e.preventDefault();
    if(!isHelpful) {
      axios.put(`/reviews/${review_id}/helpful`)
        .then(() => {
          alert('You have marked this review as helpful')
          setIsHelpful(true);
          setCountHelpful(countHelpful + 1);
        })
        .catch(err => {console.log(err)});
    }
  }

  const handleReportClick = (e, review_id) => {
    e.preventDefault();
    axios.put(`/reviews/${review_id}/report`)
      .then(() => {
        alert('You have reported this review')
        setIsReported(true);
      })
      .catch(err => {console.log(err)});
  }

  return (
    <Tile>
      { !isReported ?
      <>
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
      <HelpfulLine>
        Helpful?
        <HoverLink onClick={handleHelpfulClick}> Yes </HoverLink> ({countHelpful})
       | <HoverLink onClick={handleReportClick}>  Report  </HoverLink>
      </HelpfulLine>
      </>
      :
      <></>
      }
    </Tile>
  )
}

export default ReviewTile;