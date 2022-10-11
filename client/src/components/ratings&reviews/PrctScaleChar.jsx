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

// position: ${({amount}) => {
//   return amount * 100;
// }}%;
const Inner = styled.div`
position: absolute;
top: 0;
left: 0;
white-space: nowrap;
overflow: hidden;
border-left: 10px solid transparent;
border-right: 10px solid transparent;
border-bottom: 20px solid #000000;
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

export default PrctScaleChar;