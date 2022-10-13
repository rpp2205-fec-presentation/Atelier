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

const RateBD = styled.div`
    float: left;
    position: absolute;
    margin: 20px auto;
    padding: 0 1%;
    width: 25%;
    height: 500px;
    overflow: auto;
  `;

export {
  ScaleText, RateVal, BDContainer, RateRight, RateBD
}