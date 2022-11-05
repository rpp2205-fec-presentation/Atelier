import React, { useState } from "react";
import SelectedMain from "./SelectedMain.jsx";

const SelectedProduct = ({ selectedStyle }) => {
	return (
		<>
			{selectedStyle.photos ? (
				<SelectedMain selectedImages={selectedStyle.photos} />
			) : (
				"Loading..."
			)}
		</>
	);
};

export default SelectedProduct;
