import React, {useState} from 'react';
import { FaStar } from 'react-icons/fa';
import styled from "styled-components";

const Ratings = ({rating, hover, setHover, setRating, missing}) => {

  const [overallRating, setOverallRating] = useState(null)

  const overallRatings = {
    1: 'Poor',
    2: 'Fair',
    3: 'Average',
    4: 'Good',
    5: 'Great'
  }

  const displayRating = (index) => {
    setRating(index)
    setOverallRating(overallRatings[index.toString()])
  }

  const starRating = [...Array(5)].map((_, index) => {
    index += 1
    return (
      <label key={index}>
        <HideRadio type='radio' onClick={() => displayRating(index)}/>
        <FaStar style={{cursor: 'pointer'}} color={index <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
        onMouseEnter={() => setHover(index)} onMouseLeave={() => setHover(null)}/>
      </label>
    )
  })

  return (
    <div>
      {starRating}
      <Label>{overallRating}</Label>
      {missing && <Missing>* Required</Missing>}
      <br/>
    </div>
  );
}

export default Ratings;

const HideRadio = styled.input`
display: none;
`;

const Missing = styled.span`
color: red;
margin-left: 7px;
`;

const Label = styled.label`
margin-left: 7px;
`