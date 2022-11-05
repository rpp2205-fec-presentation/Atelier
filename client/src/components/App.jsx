import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Overview from './overview/Overview.jsx';
import RelatedItems from './relatedItems/RelatedItems.jsx';
import RatingsReviews from './ratings&reviews/RatingsReviews.jsx';
import ErrorBoundary from './ErrorBoundary.jsx';
import Header from './Header.jsx';
import { reviewsCall, reviewsFilter } from './helpers/reviewsHelpers.js';

const App = () => {
  const [product_id, setId] = useState(71851);
  const [pageLoading, setPageLoading] = useState(true);
  const [reviews, setReviews] = useState();
  const [metaData, setMetaData] = useState();
  const [filter, setFilter] = useState(0);
  const [ratings, setRatings] = useState({1:0, 2:0, 3:0, 4:0, 5:0});
  const [sorted, setSorted] = useState('newest');
  const [outfits, setOutfits] = useState([]);
  const [mode, setMode] = useState('light');

  const getData = (id = 71697) => {

    const fetchReviews = reviewsCall(id, sorted)
      .then(reviews => {setReviews(reviews.data.results)});
    const fetchMeta = axios.get('/reviews/meta', {params: {product_id: id}})
      .then(meta => {
        setMetaData(meta.data);
        setRatings(meta.data.ratings);
      });

      Promise.all([fetchReviews, fetchMeta])
      .then(() => {setPageLoading(false)})
      .catch(err => console.log(err));

      if (localStorage.getItem('myOutfits') === null) {
        localStorage.setItem('myOutfits', '');
      } else if (localStorage.getItem('myOutfits') !== '') {
        setOutfits(localStorage.getItem('myOutfits').split(","));
      }
  }

  const setNewProductId = (newProductId) => {
    setId(newProductId);
  }

  const addNewOutfit = (productId) => {
    if (!outfits.includes(productId)) {
      var tempOutfits = [productId].concat(outfits);
      localStorage.setItem('myOutfits', tempOutfits);
      setOutfits(tempOutfits);
    }
  }

  const removeOutfit = (productId) => {
    var tempOutfits = [];

    for (var outfit of outfits) {
      if (outfit !== productId) {
        tempOutfits.push(outfit);
      }
    }

    localStorage.setItem('myOutfits', tempOutfits);
    setOutfits(tempOutfits);
  }

  useEffect(() => {
    getData();
  }, [])

  useEffect(() => {
    const url = new URL(document.URL);
    const id = parseInt(url.search.split('=')[1], 10);
    if (id) {
      getData(id);
    } else {
      getData(product_id);
    }
    setSorted('newest');
    setFilter(0);
  }, [product_id]);

  useEffect(() => {
    reviewsCall(product_id, sorted)
      .then(rvws => {
        setReviews(reviewsFilter(rvws.data.results, filter))
      });
  }, [sorted, filter])

  const clickTracking = (e, widgetName) => {
    axios.post('/interactions', {
      element: e.target.outerHTML,
      widget: widgetName,
      time: new Date()
    })
      // .then((res) => console.log('Click Tracked', res))
      .catch(err => console.log(err))
  }

  const toggleMode = () => {
    const changeMode = mode === "light" ? "dark" : "light";
    setMode(changeMode);
  };

  if (pageLoading) { return 'Page is Loading'}

    return (<div color-mode={mode}>
      <ErrorBoundary>
        <Header toggleMode={toggleMode}/>
      </ErrorBoundary>
      <ErrorBoundary>
        <Overview productId={product_id} clickTracking={clickTracking} addNewOutfit={addNewOutfit} />
      </ErrorBoundary>
      <ErrorBoundary>
        <RelatedItems
          key={`ri_${product_id}`}
          productId={product_id}
          setNewProductId={setNewProductId}
          clickTracking={clickTracking}
          addNewOutfit={addNewOutfit}
          removeOutfit={removeOutfit}
          outfits={outfits}/>
      </ErrorBoundary>
      <ErrorBoundary>
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
        clickTracking={clickTracking} />
      </ErrorBoundary>
    </div>)

}

export default App;