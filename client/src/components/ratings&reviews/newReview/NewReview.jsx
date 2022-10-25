import React, { useState } from "react";
import Ratings from './Ratings.jsx'
import CharRatings from './CharRatings.jsx';
import ImageUpload from "./ImageUpload.jsx";
import { Overlay, ModalForm, Missing, Close, Remain, Input, Submit } from './NewReviewStyles.jsx'
import { reviewsCall } from '../../helpers/reviewsHelpers.js';
import axios from 'axios';

const NewReview = ({ productId, metaData, openModal, sorted, setReviews }) => {
  const [missingReq, setMissingReq] = useState(false);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);

  const [recc, setRecc] = useState(null);

  const [characteristics, setCharacteristics] = useState({});

  const [summary, setSummary] = useState("");
  const [summRemain, setSummRemain] = useState(60);
  const [body, setBody] = useState("");
  const [bodyRemain, setBodyRemain] = useState(50);

  const [photos, setPhotos] = useState([]);

  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");

  const selectCharacteristic = (id, value) => {
    setCharacteristics({...characteristics, [id]: value})
  };

  const summaryText = (e) => {
    setSummary(e.target.value);
    setSummRemain(60 - e.target.value.length);
  };

  const bodyText = (e) => {
    setBody(e.target.value);
    setBodyRemain(50 - e.target.value.length);
  };

  const nicknameText = (e) => {
    setNickname(e.target.value);
  };

  const emailText = (e) => {
    setEmail(e.target.value);
  };

  const checkForm = (e) => {
    e.preventDefault();
    if (rating === 0 || recc === null || email.indexOf(".com") < 0 ) {
      return setMissingReq(true);
    } else {
      postData();
    }
  };

  const post = (data) => {
    axios.post("/reviews", data)
    .then((res) => {
      alert("Review Submitted!");
      reviewsCall(productId, sorted)
        .then(res => {setReviews(res.data.results)})
    })
    .catch(err => console.log(err));
  };

  const postData = () => {
    const data = {
      product_id: productId,
      rating: rating,
      summary: summary,
      body: body,
      recommend: recc,
      name: nickname,
      email: email,
      photos: photos,
      characteristics: characteristics
    };
    post(data)
    setMissingReq(false);
    setRating(0);
    setRecc(null);
    setCharacteristics({});
    setSummary("");
    setBody("");
    setPhotos([]);
    setNickname("");
    setEmail("");
    openModal();
  };

  if (!open) return null;

  return (
    <Overlay>
      <ModalForm>
        {missingReq && <Missing>* Areas are required</Missing>}
        <Close onClick={openModal}>X</Close>
        <form onSubmit={checkForm}>
          <h3>Write Your Review</h3>
          <Ratings
            rating={rating}
            hover={hover}
            setHover={setHover}
            setRating={setRating}
            missing={missingReq}
          />

          <label>
            Recommend:
            {' '}
            <label>
              <input
                type="radio"
                name="recc"
                value="Yes"
                onChange={() => setRecc(true)}
              />
              Yes
              {' '}
            </label>
            <label>
              <input
                type="radio"
                name="recc"
                value="No"
                onChange={() => setRecc(false)}
              />
              No
            </label>
            {missingReq && <Missing>* Required</Missing>}
          </label>

          <CharRatings
            metaData={metaData}
            charData={metaData.characteristics}
          />

          <br />
          <label>
            Summary:
            <br />
            <textarea
            style={{ width: "70%" }}
            placeholder="Example: Best purchase ever!"
            value={summary}
            required
            rows="3"
            cols="50"
            maxLength="60"
            onChange={summaryText}
            />
            <Remain>{summRemain} Characters remaining</Remain>
          </label>

          <label>
            Body:
            <br />
            <textarea
            style={{ width: "70%" }}
            placeholder="Why did you like this product or not?"
            value={body}
            required
            rows="5"
            cols="50"
            maxLength="60"
            minLength="50"
            maxLength="1000"
            onChange={bodyText}
            />
            {body.length < 50 ? <Remain>Minimum required characters left: {bodyRemain}</Remain>
            : <Remain>Minimum reached</Remain> }
          </label>

          <label>Upload Photos:</label>
          <ImageUpload photos={photos} upload={setPhotos} />

          <label>
            Set Nickname:
            <Input
              type="text"
              placeholder="Example: jackson11!"
              value={nickname}
              required
              maxLength={60}
              onChange={nicknameText}
            />
          </label>
          <Remain>For authentication reasons you will not be emailed</Remain>

          <label>
            Set Email:
            <Input
              type="email"
              placeholder="jackson11@email.com"
              value={email}
              required
              maxLength={60}
              onChange={emailText}
            />
          </label>
          <br />

          <Submit type="submit" value="Post Review" />
        </form>
      </ModalForm>
    </Overlay>
  );
};

export default NewReview;

