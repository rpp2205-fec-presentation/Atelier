import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RatingsReviews from '../../client/src/components/ratings&reviews/RatingsReviews.jsx';
import ReviewsList from '../../client/src/components/ratings&reviews/ReviewsList.jsx';
import ReviewTile from '../../client/src/components/ratings&reviews/ReviewTile.jsx';

// const server = setupServer(
//   rest.get('/reviews/:product_id', (req, res, ctx) => {
//     return res(
//       ctx.json({

//           "product": "2",
//           "page": 0,
//           "count": 5,
//           "results": [
//             {
//               "review_id": 5,
//               "rating": 3,
//               "summary": "I'm enjoying wearing these shades",
//               "recommend": false,
//               "response": null,
//               "body": "Comfortable and practical.",
//               "date": "2019-04-14T00:00:00.000Z",
//               "reviewer_name": "shortandsweeet",
//               "helpfulness": 5,
//               "photos": [{
//                   "id": 1,
//                   "url": "urlplaceholder/review_5_photo_number_1.jpg"
//                 },
//                 {
//                   "id": 2,
//                   "url": "urlplaceholder/review_5_photo_number_2.jpg"
//                 }
//               ]
//             },
//             {
//               "review_id": 3,
//               "rating": 4,
//               "summary": "I am liking these glasses",
//               "recommend": false,
//               "response": "Glad you're enjoying the product!",
//               "body": "They are very dark. But that's good because I'm in very sunny spots",
//               "date": "2019-06-23T00:00:00.000Z",
//               "reviewer_name": "bigbrotherbenjamin",
//               "helpfulness": 5,
//               "photos": [],
//             }
//           ]

//       })
//     )
//   })
// )

// beforeAll(() => server.listen())
// afterEach(() => server.resetHandlers())
// afterAll(() => server.close())

describe('Ratings and Reviews', function () {
  it('should have a Ratings & Reviews title', function () {
    render(<RatingsReviews />);
    expect(screen.getByText('Ratings & Reviews')).toBeDefined();
  });
});

describe('Reviews Tile', function () {
  it('should render a review', async () => {
    const oneReviews = render(<ReviewTile review={{"review_id": 3,
    "rating": 4,
    "summary": "I am liking these glasses",
    "recommend": false,
    "response": "Glad you're enjoying the product!",
    "body": "They are very dark. But that's good because I'm in very sunny spots",
    "date": "2019-06-23T00:00:00.000Z",
    "reviewer_name": "bigbrotherbenjamin",
    "helpfulness": 5,
    "photos": []}} />);
    expect(oneReviews.getByText("I am liking these glasses"));
  });
});