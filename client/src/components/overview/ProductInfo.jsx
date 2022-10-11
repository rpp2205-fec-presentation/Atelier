import React from "react";
import axios from "axios";
import stars from "../helpers/stars.js";
import calculateAverageRating from '../helpers/calculateAverageRating.js';
import ProductCategory from "./ProductCategory.jsx";
import ProductPrice from "./ProductPrice.jsx";

class ProductInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 71697,
      category: '',
      name: '',
      originalPrice: 0,
      ratings: 0,
    }
    this.getProductById =this.getProductById.bind(this);
  }

  getProductById() {
    const { id,
            category,
            name,
            originalPrice,
            ratings
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
            ratings
          } = this.state;
    return (
      <div id="po-product-info">
        <h4>{stars(ratings)}</h4>
        {console.log('info', this.state)}
        <ProductCategory category={category} name={name}/>
        <ProductPrice price={originalPrice}/>
      </div>
    )
  }
}

export default ProductInfo;