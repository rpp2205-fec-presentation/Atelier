import React from "react";
import axios from "axios";
import stars from "../helpers/stars.js";
import calculateAverageRating from '../helpers/calculateAverageRating.js';
import ProductCategory from "./ProductCategory.jsx";
import ProductPrice from "./ProductPrice.jsx";
import ProductStyle from "./ProductStyle.jsx";
import ProductDetail from "./ProductDetail.jsx";

class ProductInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id || 71697,
      category: '',
      name: '',
      originalPrice: 0,
      ratings: 0,
      slogan: '',
      description: '',
    }
    this.getProductById =this.getProductById.bind(this);
  }

  getProductById() {
    const { id,
            category,
            name,
            originalPrice,
            ratings,
            slogan,
            description
          } = this.state;
    axios({
      method: 'get',
      url: `/products/${id}`,
      params: {product_id: id}
    })
    .then((res) => {
      calculateAverageRating(res.data.id)
        .then(avgRating => this.setState({
          ratings : avgRating
        }))
      this.setState({
        category : res.data.category,
        name : res.data.name,
        originalPrice : res.data.default_price,
        slogan: res.data.slogan,
        description: res.data.description,
      })
    })
  }

  componentDidMount() {
    this.getProductById();
  }

  render () {
    const { id,
            category,
            name,
            originalPrice,
            ratings,
            slogan,
            description
          } = this.state;
    return (
      <div id="po-product-info">
        <h5>Product Info</h5>
        <h4>{stars(ratings)}</h4>
        {console.log('info', this.state)}
        <ProductCategory category={category} name={name} />
        <ProductPrice price={originalPrice} />
        <ProductStyle id={id} />
        <ProductDetail slogan={slogan} description={description} />
      </div>
    )
  }
}

export default ProductInfo;