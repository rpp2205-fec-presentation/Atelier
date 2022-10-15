import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Overview from './overview/Overview.jsx';
import RelatedItems from './relatedItems/RelatedItems.jsx';
import RatingsReviews from './ratings&reviews/RatingsReviews.jsx';

const App = () => {
  const [product_id, setId] = useState(71697);
  const [reviews, setReviews] = useState();
  const [metaData, setMetaData] = useState();
  const [ratings, setRatings] = useState({1:0, 2:0, 3:0, 4:0, 5:0});

  const getData = () => {
    axios.get('/reviews', {params: {product_id: product_id, count: 100}})
      .then(reviews => {setReviews(reviews.data.results)})
      .catch(err => {console.log(err)});
    axios.get('/reviews/meta', {params: {product_id: product_id}})
      .then(meta => {
        setMetaData(meta.data);
        setRatings(meta.data.ratings);
      })
      .catch(err => {console.log(err)});
  }

  const setNewProductId = (newProductId) => {
    setId(newProductId);
  }

  useEffect(() => {
    console.log('HERE');
    getData();
  }, [])

  if (!metaData || !reviews) {
    return null
  }

    return (<div>
      <Overview />
      <RelatedItems key={`ri_${product_id}`} productId={product_id} setNewProductId={setNewProductId}/>
      <RatingsReviews product_id={product_id} reviews={reviews} metaData={metaData} ratings={ratings}/>
    </div>)

}

export default App;