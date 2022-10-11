import styled from 'styled-components';

/* Rating Breakdown */
export const ScaleText = styled.span`
  float: right;
  padding: 0 3px;
`;

export const RateVal = styled.div`
  border-bottom: 1px dotted black;
`;

export const BDContainer = styled.div`
  top: 25px;
`;

export const RateRight = styled.span`
  float: right;
`;



/* RatingsReviews Styling */

export const DivCent = styled.div`
width: 100%;
margin: 10px auto;
`;

export const InnerDiv = styled.div`
  width: 90%;
  height: auto;
  margin: 0 auto;
`;

export const ReviewsContainer = styled.div`
    border-radius: 15px;
    overflow: auto;
`;

export const RateBD = styled.div`
  float: left;
  position: absolute;
  margin: 10px auto;
  padding: 0 1%;
  width: 25%;
  height: 1000px;
  overflow: auto;
`;

export const RList = styled.div`
  margin: 50px auto;
  float: right;
  width: 65%;
  left: 25%;
  overflow: auto;
`;

/* Review Tile */
export const Tile = styled.div`
  border-bottom: 1px solid;
  padding: 10px;
`;

export const Check = styled.div`
  & {
    position: relative;
    display: inline-block;
    width: 20px;
    height: 20px;
  }

  &:before {
    position: absolute;
    left: 0;
    top: 50%;
    height: 50%;
    width: 3px;
    background-color: #000000;
    content: "";
    transform: translateX(10px) rotate(-45deg);
    transform-origin: left bottom;
}

  &:after {
    position: absolute;
    left: 0;
    bottom: 0;
    height: 3px;
    width: 100%;
    background-color: #000000;
    content: "";
    transform: translateX(10px) rotate(-45deg);
    transform-origin: left bottom;
  }
`;

export const TextR = styled.span`
  float: right;
`;

// export {
//   ScaleText, RateVal, BDContainer, RateRight, RateBD, ReviewsContainer, RList, DivCent, InnerDiv,
// }