import React from 'react';
import styled from 'styled-components';

const Outer = styled.div`
display: inline-block;
width: 100%;
height: 10px;
border: 1px solid black;
position: relative;
background-color: #F8F8F8;
`;


const Inner = styled.div`
position: absolute;
top: 0;
left: 0;
white-space: nowrap;
overflow: hidden;
border-left: 8px solid transparent;
border-right: 8px solid transparent;
border-bottom: 15px solid #000000;
width: 0px;
height: 0px;
margin-left: ${({percent}) => {
    return percent;
  }}%;


`;

const PrctScaleChar = ({value}) => {

  let calcPercent = () => {
    return Math.round((value / 5) * 100)
  }

  return (
    <Outer>
      <Inner percent={calcPercent()}/>
    </Outer>
  )
};

const OuterRating = styled.div`
display: inline-block;
width: 100px;
height: 10px;
position: relative;
background-color: #F0F0F0;
`;

const InnerRating = styled.div`
position: absolute;
top: 0;
left: 0;
white-space: nowrap;
overflow: hidden;
height: 11px;
width: ${({percent}) => {
  return percent;
}}%;
background-color: #505050;
`;

const RatingsAvgByStar = ({value}) => {


  return (
    <OuterRating>
      <InnerRating percent={value}/>
    </OuterRating>
  )
};


export { PrctScaleChar, RatingsAvgByStar };