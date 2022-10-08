import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RatingsReviews from '../client/src/components/ratings&reviews/RatingsReviews.jsx';
import ReviewsList from '../client/src/components/ratings&reviews/ReviewsList.jsx';
import ReviewTile from '../client/src/components/ratings&reviews/ReviewTile.jsx';

describe('Ratings and Reviews', function () {
  it('should have a Ratings & Reviews title', function () {
    render(<RatingsReviews />);
    expect(screen.getByText('Ratings & Reviews')).toBeDefined();
  });
});