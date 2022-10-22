import React from 'react';
import styled from 'styled-components';

const FullSize = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(200, 200, 200, 0.9);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`

const ImageDisplay = styled.div`
  width: 75%;
  height: inherit;
  flex-basis: fit-content;
  border-radius: 8px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: row;
  padding: 25px;
  position: relative;
`
const ExitButton = styled.button`
  margin-bottom: auto;
  cursor: pointer;
  border: none;
  font-size: x-large;
`

export default function ImageModal ({ image, setFullSize }) {

  return(
    <>
      <FullSize>
        <ImageDisplay>
          <img src={image}/>
          <ExitButton onClick={() => setFullSize(false)}>
            X
          </ExitButton>
        </ImageDisplay>
      </FullSize>
    </>
  )

}