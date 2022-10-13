import React from "react";
import getStyleInfoById from "../helpers/getStyleInfoById.js";

class ProductStyle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      images: [],
      defaultStyle: '',
      selectedStyle: '',
    }
  }

  componentDidMount() {
    getStyleInfoById(this.props.id)
      .then(data => {
        const newDefaultStyle =  data.filter(res => res['default?'] ===  true)['0'].name;
        var newImages = [...this.state.images]
        var newData = [...this.state.data]
        data.map((res, idx) => {
          newImages.push(res.photos[0].thumbnail_url);
        })
        this.setState({
          data: newData,
          images: newImages,
          defaultStyle: newDefaultStyle
        })
      })
  }

  render() {
    const { data, images, defaultStyle, selectedStyle } = this.state;
    return (
      <div>
        <h3>Style > {defaultStyle}</h3>
        {images.map((img, idx) => (
          <img key={idx} src={img} alt="Avatar" />
        ))}
      </div>
    )
  }
}

export default ProductStyle;