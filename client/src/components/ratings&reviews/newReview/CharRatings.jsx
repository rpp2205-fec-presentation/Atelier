import React, { useState } from 'react';
import styled from 'styled-components';

const CharRatings = ({metaData, charData}) => {
  const [characteristics, setCharacteristics] = useState({});
  const selectSize = {1: 'A size too small', 2: '½ a size too small', 3: 'Perfect' , 4 : '½ a size too big', 5: 'A size too wide'};
  const selectWidth = {1: 'Too narrow', 2: 'Slightly narrow', 3: 'Perfect' , 4 : 'Slightly wide', 5: 'Too wide'};
  const selectComfort = {1: 'Uncomfortable', 2: 'Slightly uncomfortable', 3: 'Ok' , 4 : 'Comfortable', 5: 'Perfect'};
  const selectQuality = {1: 'Poor', 2: 'Below average', 3: 'What I expected' , 4 : 'Pretty great', 5: 'Perfect'};
  const selectLength = {1: 'Runs Short', 2: 'Runs slightly short', 3: 'Perfect' , 4 : 'Runs slightly long', 5: 'Runs long'};
  const selectFit = {1: 'Runs tight', 2: 'Runs slightly tight', 3: 'Perfect' , 4 : 'Runs slightly long', 5: 'Runs long'};
  const [renderChar, setRenderChar] = useState({Size: '', Width: '', Comfort: '', Quality: '', Length: '', Fit: ''});

  var charSelectionChange = (characteristicName, ratingValue) => {
    if (characteristicName === 'Size') {
      setRenderChar({...renderChar, Size: selectSize[ratingValue]})
    } else if(characteristicName === 'Width') {
      setRenderChar({...renderChar, Width: selectWidth[ratingValue]})
    } else if(characteristicName === 'Comfort') {
      setRenderChar({...renderChar, Comfort: selectComfort[ratingValue]})
    } else if(characteristicName === 'Quality') {
      setRenderChar({...renderChar, Quality: selectQuality[ratingValue]})
    } else if(characteristicName === 'Length') {
      setRenderChar({...renderChar, Length: selectLength[ratingValue]})
    } else if(characteristicName === 'Fit') {
      setRenderChar({...renderChar, Fit: selectFit[ratingValue]})
    }

  }

  var onCharChange = (event) => {
    var charName = event.target.getAttribute('name')
    var charValue = Number(event.target.value);
    var charId = metaData.characteristics[charName].id;
    setCharacteristics({...characteristics, [charId] : charValue});
    charSelectionChange(charName, charValue);
  }

  return (
    <CharContainer>
            <SingleCharact>
            {/* {metaData.characteristics.Size && renderChar.Size === '' ? <span>None Selected</span>  : <span>{renderChar.Size}</span>} */}
            {metaData.Size &&
            <OverallRadioContainer>
            <SizeContainer>Size*</SizeContainer>
            <SingleRadioContainer><input type="radio" value="1" name="Size" onChange={onCharChange}/> A size too small</SingleRadioContainer>
               <SingleRadioContainer><input type="radio" value="2" name="Size" onChange={onCharChange}/> ½ a size too small</SingleRadioContainer>
               <SingleRadioContainer><input type="radio" value="3" name="Size" onChange={onCharChange}/> Perfect</SingleRadioContainer>
               <SingleRadioContainer><input type="radio" value="4" name="Size" onChange={onCharChange}/> ½ a size too big</SingleRadioContainer>
               <SingleRadioContainer><input type="radio" value="5" name="Size" onChange={onCharChange}/> A size too wide</SingleRadioContainer>
               </OverallRadioContainer>
              }

              </SingleCharact>
              <SingleCharact>
            {/* {metaData.characteristics.Width  ? <span>None Selected</span> : <span>{renderChar.Width}</span>} */}
            {metaData.characteristics.Width &&
            <OverallRadioContainer><WidthContainer>Width*</WidthContainer>
              <SingleRadioContainer><input type="radio" value="1" name="Width" onChange={onCharChange}/>Too narrow</SingleRadioContainer>
              <SingleRadioContainer><input type="radio" value="2" name="Width" onChange={onCharChange}/>Slightly narrow</SingleRadioContainer>
              <SingleRadioContainer><input type="radio" value="3" name="Width" onChange={onCharChange}/>Perfect</SingleRadioContainer>
              <SingleRadioContainer><input type="radio" value="4" name="Width" onChange={onCharChange}/>Slightly wide</SingleRadioContainer>
              <SingleRadioContainer><input type="radio" value="5" name="Width" onChange={onCharChange}/>Too wide</SingleRadioContainer>
            </OverallRadioContainer>
              }
              </SingleCharact>
              <SingleCharact>
              {/* {metaData.characteristics.Comfort  ? <span>None Selected</span> : <span>{renderChar.Comfort}</span>} */}
              {metaData.characteristics.Comfort &&
              <OverallRadioContainer>
                       <ComfortContainer>Comfort*</ComfortContainer>
                  <SingleRadioContainer><input type="radio" value="1" name="Comfort" onChange={onCharChange}/>Uncomfortable</SingleRadioContainer>
                  <SingleRadioContainer><input type="radio" value="2" name="Comfort" onChange={onCharChange}/>Slightly uncomfortable</SingleRadioContainer>
                  <SingleRadioContainer><input type="radio" value="3" name="Comfort" onChange={onCharChange}/>Ok</SingleRadioContainer>
                  <SingleRadioContainer><input type="radio" value="4" name="Comfort" onChange={onCharChange}/>Comfortable</SingleRadioContainer>
                  <SingleRadioContainer><input type="radio" value="5" name="Comfort" onChange={onCharChange}/>Perfect</SingleRadioContainer>
                  </OverallRadioContainer>
              }
              </SingleCharact>
              <SingleCharact>
              {/* {metaData.characteristics.Quality && renderChar.Quality === '' ? <span>None Selected</span> : <span>{renderChar.Quality}</span>} */}
              {metaData.characteristics.Quality &&
                <OverallRadioContainer><QualityContainer>Quality*</QualityContainer>
                    <SingleRadioContainer><input type="radio" value="1" name="Quality" onChange={onCharChange}/>Poor</SingleRadioContainer>
                    <SingleRadioContainer><input type="radio" value="2" name="Quality" onChange={onCharChange}/>Below average</SingleRadioContainer>
                    <SingleRadioContainer><input type="radio" value="3" name="Quality" onChange={onCharChange}/>What I expected</SingleRadioContainer>
                    <SingleRadioContainer><input type="radio" value="4" name="Quality" onChange={onCharChange}/>Pretty great</SingleRadioContainer>
                    <SingleRadioContainer><input type="radio" value="5" name="Quality" onChange={onCharChange}/>Perfect</SingleRadioContainer>
                </OverallRadioContainer>
              }
              </SingleCharact>
              <SingleCharact>
              {/* {metaData.characteristics.Length && renderChar.Length === '' ? <span>None Selected</span>: <span>{renderChar.Length}</span>} */}
              {metaData.characteristics.Length &&
                <OverallRadioContainer><LengthContainer>Length*</LengthContainer>
                    <SingleRadioContainer><input type="radio" value="1" name="Length" onChange={onCharChange}/>Runs Short</SingleRadioContainer>
                    <SingleRadioContainer><input type="radio" value="2" name="Length" onChange={onCharChange}/>Runs slightly short</SingleRadioContainer>
                    <SingleRadioContainer><input type="radio" value="3" name="Length" onChange={onCharChange}/>Perfect</SingleRadioContainer>
                    <SingleRadioContainer><input type="radio" value="4" name="Length" onChange={onCharChange}/>Runs slightly long</SingleRadioContainer>
                    <SingleRadioContainer><input type="radio" value="5" name="Length" onChange={onCharChange}/>Runs long</SingleRadioContainer>
                </OverallRadioContainer>
              }
              </SingleCharact>
              {/* {metaData.characteristics.Fit  && renderChar.Fit === '' ? <span>None Selected</span> : <span>{renderChar.Fit}</span>} */}
              {metaData.characteristics.Fit &&
                <OverallRadioContainer><FitContainer>Fit*</FitContainer>
                    <SingleRadioContainer><input type="radio" value="1" name="Fit" onChange={onCharChange}/>Runs tight</SingleRadioContainer>
                    <SingleRadioContainer><input type="radio" value="2" name="Fit" onChange={onCharChange}/>Runs slightly tight</SingleRadioContainer>
                    <SingleRadioContainer><input type="radio" value="3" name="Fit" onChange={onCharChange}/>Perfect</SingleRadioContainer>
                    <SingleRadioContainer><input type="radio" value="4" name="Fit" onChange={onCharChange}/>Runs slightly long</SingleRadioContainer>
                    <SingleRadioContainer> <input type="radio" value="5" name="Fit" onChange={onCharChange}/>Runs long</SingleRadioContainer>
                </OverallRadioContainer>
              }

              </CharContainer>
  )
}

export default CharRatings;

const Container = styled.div`
margin-top: 8px;
`

const Input = styled.input`
margin-left: 10px;
`

const FitContainer = styled.div`
flex-direction:column;
font-size: 14px;
font-weight:bold;
padding-right:44px;
`;

const QualityContainer = styled.div`
flex-direction:column;
font-size: 14px;
font-weight:bold;
padding-right:21px;
`;
const LengthContainer = styled.div`
flex-direction:column;
font-size: 14px;
font-weight:bold;
padding-right:25px;
`;
const ComfortContainer = styled.div`
flex-direction:column;
font-size: 14px;
font-weight:bold;
padding-right:3px;
`;
const SizeContainer = styled.div`
flex-direction:column;
font-size: 14px;
font-weight:bold;
padding-right:20px;
`;
const WidthContainer = styled.div`
flex-direction:column;
font-size: 14px;
font-weight:bold;
padding-right:20px;
`;

const OverallRadioContainer = styled.label`
input[type=radio] {
  display: flex;
}
align-items: center;
flex-direction:row;
display: flex;
justify-content: space-between;
`;

const CharContainer = styled.div`
font-size: 15px;
font-weight:bold;
padding-top: 5px;
display: flex;
align-items: left;
flex-direction:column;
`;
const SingleCharact = styled.div`
font-size: 15px;
font-weight:bold;
padding-right: 5px;
display: flex;
align-items: left;
flex-direction:column;
`;

const SingleRadioContainer = styled.label`
font-size: 9px;
padding:8px;
input[type=radio] {
  display: block;
  margin: 0 auto;
  font-size: 5px;
}
label {
  font-size: 5px;
  display: inline-block;
}
`;
