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
import Sort from '../../client/src/components/ratings&reviews/Sort.jsx';
import NewReview from '../../client/src/components/ratings&reviews/newReview/NewReview.jsx';

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

  it('should have a helpful link', async () => {
    const oneReviews = render(<ReviewTile review={allReviewsEx[0]} />);
    expect(oneReviews.getByText("Helpful", {exact: false}));
  });

});

describe('Reviews List', function () {
  it('should render multiple reviews', async () => {
    const { getAllByText } = render(<ReviewsList reviews={allReviewsEx} />);
    expect(getAllByText('Report', {exact: false})).toHaveLength(7);
  });


  it('should have reviews sorted by text', async () => {
    render(<Sort productId={reviewsMetaData.product_id} metaData={reviewsMetaData} />);
    expect(screen.getByText('Sorted by', {exact: false})).toBeDefined();
  });

  it('should have sorted by Relevance', async () => {
    render(<Sort productId={reviewsMetaData.product_id} metaData={reviewsMetaData} />);
    expect(screen.getByText('Relevance', {exact: false})).toBeDefined();
  });

  it('should have add review button', async () => {
    render(<ReviewsList productId={reviewsMetaData.product_id} reviews={allReviewsEx} metaData={reviewsMetaData} />);
    expect(screen.getByText('Add A Review', {exact: false})).toBeDefined();
  });

});

describe('Reviews Breakdown', function () {
  it('should contain average rating for product', async () => {
    const ratingDB = render(<RatingsBD productId="71697" metaData={reviewsMetaData} ratings={reviewsMetaData.ratings} />);
    expect(ratingDB.getByText('3.9'));
  });
});


describe('New Review', function () {
  it('should have authentication disclaimer on new review modal', async () => {
    render(<ReviewsList
      reviews={allReviewsEx}
      metaData={reviewsMetaData}
    />);

    const AddButton = await waitFor(() => screen.getByText('Add a Review', {exact: false}));
    fireEvent.click(AddButton);
    const modal = await waitFor(() => screen.getByText('Write Your Review', {exact: false}));
    expect(screen.getByText('For authentication reasons, you will not be emailed')).toBeDefined();
  });

  it('should display and close the new review modal', async () => {
    render(<ReviewsList
      reviews={allReviewsEx}
      metaData={reviewsMetaData}
    />);

    const AddButton = await waitFor(() => screen.getByText('Add a Review', {exact: false}));
    fireEvent.click(AddButton);
    const modal = await waitFor(() => screen.getByText('Write Your Review', {exact: false}));
    expect(modal).toBeVisible();

    const CloseButton = await waitFor(() => screen.getByText('Close', {exact: false}));
    fireEvent.click(CloseButton);
    expect(modal).not.toBeVisible();
  });
});