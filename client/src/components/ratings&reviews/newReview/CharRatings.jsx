import React from 'react';
import styled from "styled-components";

const CharRatings = ({metaData, setChar}) => {

  const characteristics = {
    Size: ['A size too small', '½ a size too small', 'Perfect', '½ a size too big', 'A size too wide'],

    Width: ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'],

    Comfort: [ 'Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'],

    Quality: ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'],

    Length: ['Runs Short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'],

    Fit: ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long']
  }

  const charChange = (e) => {
    if (e.target.getAttribute('name') === 'Size') {
      const id = metaData.Size.id
      const value = Number(e.target.value)
      setChar(id, value)

    } else if ((e.target.getAttribute('name') === 'Width')) {
      const id = metaData.Width.id
      const value = Number(e.target.value)
      setChar(id, value)

    } else if ((e.target.getAttribute('name') === 'Comfort')) {
      const id = metaData.Comfort.id
      const value = Number(e.target.value)
      setChar(id, value)

    } else if ((e.target.getAttribute('name') === 'Quality')) {
      const id = metaData.Quality.id
      const value = Number(e.target.value)
      setChar(id, value)

    } else if ((e.target.getAttribute('name') === 'Length')) {
      const id = metaData.Length.id
      const value = Number(e.target.value)
      setChar(id, value)

    } else if ((e.target.getAttribute('name') === 'Fit')) {
      const id = metaData.Fit.id
      const value = Number(e.target.value)
      setChar(id, value)
    }
  }

  const selectSize = characteristics.Size.map((data, index) => {
    return (
      <label key={index}><Input type='radio' name='Size' value={index+1} onChange={charChange}/>{data}</label>)
  })

  const selectWidth = characteristics.Width.map((data, index) => { return (
      <label key={index}><Input type='radio' name='Width' value={index+1} onChange={charChange}/>{data}</label>)
  })

  const selectComfort = characteristics.Comfort.map((data, index) => { return (
    <label key={index}><Input type='radio' name='Comfort' value={index+1} onChange={charChange}/>{data}</label>)
  })

  const selectQuality = characteristics.Quality.map((data, index) => { return (
    <label key={index}><Input type='radio' name='Quality' value={index+1} onChange={charChange}/>{data}</label>)
  })

  const selectLength = characteristics.Length.map((data, index) => { return (
    <label key={index}><Input type='radio' name='Length' value={index+1} onChange={charChange}/>{data}</label>)
  })

  const selectFit = characteristics.Fit.map((data, index) => { return (
    <label key={index}><Input type='radio' name='Fit' value={index+1} onChange={charChange}/>{data}</label>)
  })


  return (
    <Container>
      {metaData.Size &&
        <div>
          <label>Sizes: </label>
          {selectSize}
        </div>}


      {metaData.Width &&
        <div>
          <label>Width: </label>
          {selectWidth}
        </div>}


      {metaData.Comfort &&
        <div>
          <label>Comfort: </label>
          {selectComfort}
        </div>}

      {metaData.Quality &&
        <div>
          <label>Quality: </label>
          {selectQuality}
        </div>}

      {metaData.Length &&
        <div>
          <label>Length: </label>
          {selectLength}
        </div>}

      {metaData.Fit &&
        <div>
          <label>Fit: </label>
          {selectFit}
        </div>}
    </Container>
  );
}

export default CharRatings;

const Container = styled.div`
margin-top: 8px;
`

const Input = styled.input`
margin-left: 10px;
`