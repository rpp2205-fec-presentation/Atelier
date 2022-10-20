import React from "react";

class ThubnailProductImg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    const { selectedImages, thumbnailClick } = this.props;
    return (
      <div className="po-global-thumbnails">
        {selectedImages.map((img, idx) => (
          <img
            className="po-each-thumbnail"
            key={idx}
            src={img.thumbnail_url}
            onClick={thumbnailClick}
            onKeyPress={thumbnailClick}
            alt="po-each-thumbnail" />
        ))}
      </div>
    );
  }
}

export default ThubnailProductImg;