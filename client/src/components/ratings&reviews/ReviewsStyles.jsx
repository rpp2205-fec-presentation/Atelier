import styled from 'styled-components';

/* Rating Breakdown */
export const ScaleText = styled.span`
  float: right;
  padding: 0 3px;
`;

export const RateVal = styled.div`
  border-bottom: 1px dotted black;
  cursor: pointer;
`;

export const BDContainer = styled.div`
  top: 25px;
`;

export const RateRight = styled.span`
  float: right;
`;



/* RatingsReviews Styling */

export const DivCent = styled.div`
width: 85%;
margin: 10px auto;
padding-top: 50px
`;

// export const InnerDiv = styled.div`
//   width: 90%;
//   height: auto;
//   margin: 0 auto;
// `;

export const ReviewsContainer = styled.div`
    border-radius: 15px;
    overflow: auto;
`;

export const RateBD = styled.div`
  float: left;
  position: absolute;
  margin: 10px auto;
  width: 25%;
  height: 1000px;
  overflow: auto;
`;

export const RList = styled.div`
  margin: 50px auto;
  float: right;
  width: 65%;
  left: 25%;
`;

/* Review Tile */
export const Tile = styled.div`
  border-bottom: 1px solid;
  padding: 10px;
`;

export const HoverLink = styled.div`
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
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
    width: 2px;
    background-color: #000000;
    content: "";
    transform: translateX(10px) rotate(-45deg);
    transform-origin: left bottom;
}

  &:after {
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    width: 100%;
    background-color: #000000;
    content: "";
    transform: translateX(10px) rotate(-45deg);
    transform-origin: left bottom;
  }
`;

export const TextCent = styled.span`
  float: center;
  padding-left: 10px
`;
export const BodyText = styled.div`
text-align: left;
font-size: 14px;
margin-left: 5px;
margin-top: 5px;
color: 696969;
`;

export const ShowMore = styled.span`
  font-weight: bold;
  text-decoration: underline;
  ${({ disabled }) =>
    disabled
      ? ''
      : `
    cursor: pointer;
    &:hover:not(:disabled) {
      color: red;
      transform: translateY(-1px);
    }
  `}
`;

export const ImgThumbnail = styled.img`
  width: 50px;
  height: 50px;
  margin: 3px;
  cursor: pointer;
`;

export const HelpfulLine = styled.div`
  display: inline-flex;
  gap: 5px;
`;

/* Reviews List */

export const ListButton = styled.button`
  padding: 5px;
  position: relative;
  top: 10px;
  left: 40px;
  background: #FFFFFF;

`;