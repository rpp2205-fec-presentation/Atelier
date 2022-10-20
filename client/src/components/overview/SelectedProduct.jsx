import React, { useState } from "react";
import SelectedMain from "./SelectedMain.jsx";

const SelectedProduct = ({ selectedStyle }) => {
  return (
    <div>
      {selectedStyle.photos ?
        <SelectedMain selectedImages={selectedStyle.photos} />
      :
      "Loading..."
      }
    </div>
  )
}

export default SelectedProduct;