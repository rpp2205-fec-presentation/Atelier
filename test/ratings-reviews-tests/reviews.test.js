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
  rest.get('/reviews/:product_id', (req, res, ctx) => {
    return res(
      ctx.json({

          "product": "2",
          "page": 0,
          "count": 5,
          "results": [
            {
              "review_id": 5,
              "rating": 3,
              "summary": "I'm enjoying wearing these shades",
              "recommend": false,
              "response": null,
              "body": "Comfortable and practical.",
              "date": "2019-04-14T00:00:00.000Z",
              "reviewer_name": "shortandsweeet",
              "helpfulness": 5,
              "photos": [{
                  "id": 1,
                  "url": "urlplaceholder/review_5_photo_number_1.jpg"
                },
                {
                  "id": 2,
                  "url": "urlplaceholder/review_5_photo_number_2.jpg"
                }
              ]
            },
            {
              "review_id": 3,
              "rating": 4,
              "summary": "I am liking these glasses",
              "recommend": false,
              "response": "Glad you're enjoying the product!",
              "body": "They are very dark. But that's good because I'm in very sunny spots",
              "date": "2019-06-23T00:00:00.000Z",
              "reviewer_name": "bigbrotherbenjamin",
              "helpfulness": 5,
              "photos": [],
            }
          ]

      })
    )
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('Ratings and Reviews', function () {
  it('should have a Ratings & Reviews title', async () => {
    render(<RatingsReviews />);
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
    expect(getAllByText('Rating', {exact: false})).toHaveLength(7);
  });
});

describe('Reviews Breakdown', function () {
  it('should contain average rating for product', async () => {
    const ratingDB = render(<RatingsBD productId="71697" metaData={reviewsMetaData} ratings={reviewsMetaData.ratings} />);
    expect(ratingDB.getByText('3.9'));
  });
});