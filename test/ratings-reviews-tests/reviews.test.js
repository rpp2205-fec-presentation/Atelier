import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RatingsReviews from '../../client/src/components/ratings&reviews/RatingsReviews.jsx';
import ReviewsList from '../../client/src/components/ratings&reviews/ReviewsList.jsx';
import ReviewTile from '../../client/src/components/ratings&reviews/ReviewTile.jsx';
import RatingsBD from '../../client/src/components/ratings&reviews/RatingsBD.jsx';
import allReviewsEx from './reviewsExamples/allReviewsEx.js';
import reviewsMetaData from './reviewsExamples/reviewsMetaData.js';

const server = setupServer(
  rest.get('/reviews', (req, res, ctx) => {
    return res(ctx.status(200))
  })
)


beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('Ratings and Reviews', function () {
  it('should have a Ratings & Reviews title', async () => {
    render(<RatingsReviews product_id={reviewsMetaData.product_id} reviews={allReviewsEx} metaData={reviewsMetaData} ratings={reviewsMetaData.ratings}/>);
    expect(screen.getByText('Ratings & Reviews')).toBeDefined();
  });
});

describe('Reviews Tile', function () {
  it('should render a review', async () => {
    const oneReviews = render(<ReviewTile review={allReviewsEx[0]} />);
    expect(oneReviews.getByText("Great product! Must buy!"));
  });
});

describe('Reviews List', function () {
  it('should render multiple reviews', async () => {
    const { getAllByText } = render(<ReviewsList reviews={allReviewsEx} />);
    expect(getAllByText('Report', {exact: false})).toHaveLength(7);
  });
});

describe('Reviews Breakdown', function () {
  it('should contain average rating for product', async () => {
    const ratingDB = render(<RatingsBD productId="71697" metaData={reviewsMetaData} ratings={reviewsMetaData.ratings} />);
    expect(ratingDB.getByText('3.9'));
  });
});