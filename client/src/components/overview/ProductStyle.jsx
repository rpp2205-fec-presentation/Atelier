import React from "react";
import getStyleInfoById from "../helpers/getStyleInfoById.js";
import SelectedProduct from "./SelectedProduct.jsx";
import { BiCheckCircle } from 'react-icons/bi';
import ProductCart from "./ProductCart.jsx";

class ProductStyle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      images: [],
      skus: [],
      defaultStyle: '',
      selectedStyle: '',
    }
    this.getData = this.getData.bind(this);
    this.stlyeClickhandler = this.stlyeClickhandler.bind(this);
  }

  getData(id) {
    getStyleInfoById(id)
      .then(data => {
        const newDefaultStyle =  data.filter(res => res['default?'] ===  true)['0'];
        var newImages = []
        var newSkus = []
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
        });
      })
  }

  stlyeClickhandler(e) {
    const { data, selectedStyle } = this.state;
    const clickedStyle = e.target.name;
    this.setState({selectedStyle : data[clickedStyle]});
  }

  componentDidMount() {
    this.getData(this.props.id);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      this.getData(this.props.id);
    }
  }


  render() {
    const { data, images, defaultStyle, selectedStyle } = this.state;
    return (
      <div>
        <SelectedProduct selectedStyle={selectedStyle} />
        <div>
          <h3 id="po-all-style">{`Style > ${selectedStyle.name}`}</h3>
          {images.map((img, idx) => {
            if (img === selectedStyle.photos[0].thumbnail_url) {
              return (
                <div key={`po_${idx}`} id="po-all-style-photo">
                  <img
                    name={idx}
                    className="po-each-style-photo clickable"
                    onClick={this.stlyeClickhandler}
                    src={img}
                    alt="po-each-style-photo" />
                  <BiCheckCircle id="tick" />
                </div>
              )
            } else {
              return (
                <div key={`po_${idx}`} id="po-all-style-photo" >
                  <img
                    name={idx}
                    className="po-each-style-photo clickable"
                    onClick={this.stlyeClickhandler}
                    src={img}
                    alt="po-each-style-photo" />
                </div>
              )
            }
          })}
        </div>
        <ProductCart selectedStyle={selectedStyle}/>
      </div>
    )
  }
}

export default ProductStyle;