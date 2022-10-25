import React, { useState } from 'react';
import styled from 'styled-components';

const ImageUpload = (props) => {
  const [photoArray, setPhotoArray] = useState([]);
  let temp = [];

  const upload = (event) => {
    event.preventDefault();
    let widget = window.cloudinary.createUploadWidget(
      {
        cloudName: "dnawad7p8",
        uploadPreset: "wqtvcjd2",
      },

      (error, result) => {
        if (!error && result && result.event === "success") {
          temp = photoArray.concat(temp);
          temp.push(result.info.url);
          props.upload(temp.slice(0, 5));
          setPhotoArray(temp.slice(0, 5));
        }
      }
    );
    widget.open();
  };

  return (
    <Container>
      <br />
      {[...Array(5)].map((_, index) =>
        photoArray[index] ? (
          <img src={photoArray[index]} key={index} className="ansPhotos" />
        ) : (
          <Empty key={index} onClick={upload} />
        )
      )}
    </Container>
  );
};

export default ImageUpload;

const Container = styled.div`
margin-bottom: 8px;
`;

const Empty = styled.img`
width: 50px;
height: 50px;
margin-right: 10px;
border: solid;
cursor: pointer;
`;