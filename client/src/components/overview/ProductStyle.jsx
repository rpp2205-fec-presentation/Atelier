import React from "react";
import getStyleInfoById from "../helpers/getStyleInfoById.js";
import SelectedProduct from "./SelectedProduct.jsx";

class ProductStyle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      images: [],
      defaultStyle: '',
      selectedStyle: '',
    }
    this.getData = this.getData.bind(this);
  }

  getData(id) {
    getStyleInfoById(id)
      .then(data => {
        const newDefaultStyle =  data.filter(res => res['default?'] ===  true)['0'];
        var newImages = []
        var newData = [...this.state.data]
        var newData = [...data]
        data.map((res, idx) => {
          newImages.push(res.photos[0].thumbnail_url);
        })
        this.setState({
          data: newData,
          images: newImages,
          defaultStyle: newDefaultStyle,
          selectedStyle: newDefaultStyle
        })
      })
  }

  componentDidMount() {
    this.getData(this.props.id);
  }

  componentWillReceiveProps(nextProps) {
    this.getData(nextProps.id);
  }


  render() {
    const { data, images, defaultStyle, selectedStyle } = this.state;
    return (
      <div>
        {<SelectedProduct selectedStyle={selectedStyle} />}
        <div>
          <h3>Style > {defaultStyle.name}</h3>
          {images.map((img, idx) => (
            <img key={idx} src={img} alt="Style Photo" />
          ))}
        </div>
      </div>
    )
  }
}

export default ProductStyle;