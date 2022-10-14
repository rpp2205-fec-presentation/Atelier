import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Overview from './overview/Overview.jsx';
import RelatedItems from './relatedItems/RelatedItems.jsx';
import RatingsReviews from './ratings&reviews/RatingsReviews.jsx';
import { reviewsCall, reviewsFilter } from './helpers/reviewsHelpers.js';

const App = () => {
  const [product_id, setId] = useState(71697);
  const [pageLoading, setPageLoading] = useState(true);

  const [reviews, setReviews] = useState();
  const [metaData, setMetaData] = useState();
  const [filter, setFilter] = useState(0);
  const [ratings, setRatings] = useState({1:0, 2:0, 3:0, 4:0, 5:0});
  const [sorted, setSorted] = useState('relevant');



  const getData = () => {
    const fetchReviews = reviewsCall(product_id, sorted)
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

  useEffect(() => {
    reviewsCall(product_id, sorted)
      .then(rvws => {
        setReviews(reviewsFilter(rvws.data.results, filter))
      });
  }, [sorted, filter])

  if (pageLoading) { return 'Page is Loading'}

    return (<div>
      <Overview />
      <RelatedItems />
      <RatingsReviews
        product_id={product_id}
        reviews={reviews}
        setReviews={setReviews}
        metaData={metaData}
        ratings={ratings}
        filter={filter}
        setFilter={setFilter}
        sorted={sorted}
        setSorted={setSorted}
        />
    </div>)

}

export default App;