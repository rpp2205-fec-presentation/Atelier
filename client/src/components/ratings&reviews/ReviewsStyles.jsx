import styled from 'styled-components';

/* Rating Breakdown */
const ScaleText = styled.span`
  float: right;
  padding: 0 3px;
`;

const RateVal = styled.div`
  border-bottom: 1px dotted black;
`;

const BDContainer = styled.div`
  top: 25px;
`;

const RateRight = styled.span`
  float: right;
`;



/* RatingsReviews Styling */

const DivCent = styled.div`
width: 100%;
margin: 10px auto;
`;

const InnerDiv = styled.div`
  width: 90%;
  height: auto;
  margin: 0 auto;
`;

const ReviewsContainer = styled.div`
    border-radius: 15px;
    overflow: auto;
`;

const RateBD = styled.div`
  float: left;
  position: absolute;
  margin: 10px auto;
  padding: 0 1%;
  width: 25%;
  height: 500px;
  overflow: auto;
`;

const RList = styled.div`
  margin: 50px auto;
  float: right;
  width: 65%;
  left: 25%;
  overflow: auto;
`;


export {
  ScaleText, RateVal, BDContainer, RateRight, RateBD, ReviewsContainer, RList, DivCent, InnerDiv
}