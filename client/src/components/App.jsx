import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Overview from './overview/Overview.jsx';
import RelatedItems from './relatedItems/RelatedItems.jsx';
import RatingsReviews from './ratings&reviews/RatingsReviews.jsx';
import { reviewsCall } from './helpers/reviewsCall.js';

const App = () => {
  const [product_id, setId] = useState(71697);
  const [reviews, setReviews] = useState();
  const [metaData, setMetaData] = useState();
  const [ratings, setRatings] = useState({1:0, 2:0, 3:0, 4:0, 5:0});
  const [pageLoading, setPageLoading] = useState(true);

  const getData = () => {
    const fetchReviews = reviewsCall(product_id, 'relevant')
      .then(reviews => {setReviews(reviews.data.results)});
    const fetchMeta = axios.get('/reviews/meta', {params: {product_id: product_id}})
      .then(meta => {
        setMetaData(meta.data);
        setRatings(meta.data.ratings);
      });

      Promise.all([fetchReviews, fetchMeta])
      .then(() => {setPageLoading(false)})
      .catch(err => console.log(err));
  }

  useEffect(() => {
    getData();
  }, [])

  if (pageLoading) { return 'Page is Loading'}

    return (<div>
      <Overview />
      <RelatedItems />
      <RatingsReviews product_id={product_id} reviews={reviews} metaData={metaData} ratings={ratings}/>
    </div>)

}

export default App;