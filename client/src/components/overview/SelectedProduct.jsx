import React from "react";

const SelectedProduct = ({ selectedStyle }) => {
  return (
    <div>
      {console.log('SelectedProduct>>', selectedStyle.photos)}
      {selectedStyle.photos ?
        selectedStyle.photos.map((res, idx) => (
          <img key={idx} src={res.thumbnail_url} alt="Selected Style Photo" />
        ))
      :
      "Loading..."
      }
      <br />
    </div>
  )
}

export default SelectedProduct;