import React from 'react';
import styled from 'styled-components';

const OuterRating = styled.div`
display: inline-block;
width: 100px;
height: 10px;
border: 1px solid black;
position: relative;
background-color: #F8F8F8;
`;

const InnerRating = styled.div`
position: absolute;
top: 0;
left: 0;
white-space: nowrap;
overflow: hidden;
height: 10px;
width: ${({percent}) => {
  return percent;
}}%;
background-color: #505050;
`;

const RatingsAvgByStar = ({value}) => {

  // let calcPercent = () => {
  //   return Math.round((value / 5) * 100)
  // }

  return (
    <OuterRating>
      <InnerRating percent={value}/>
    </OuterRating>
  )
};

export default RatingsAvgByStar;