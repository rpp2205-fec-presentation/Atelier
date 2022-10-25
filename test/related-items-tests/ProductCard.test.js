import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import ProductCard from '../../client/src/components/relatedItems/ProductCard.jsx';
import React from 'react';
import {rest} from 'msw';
import {setupServer} from 'msw/node';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX, faStar } from '@fortawesome/free-solid-svg-icons';
import mockData from './riMockData.js'

const server = setupServer(
  // capture "GET /greeting" requests
  rest.get('/products/:product_Id', (req, res, ctx) => {
    // respond using a mocked JSON body
    return res(ctx.json(mockData.productData))
  }),
  rest.get('/reviews/meta', (req, res, ctx) => {
    // respond using a mocked JSON body
    return res(ctx.json(mockData.ratingData))
  }),
  rest.get('/products/:product_id/styles', (req, res, ctx) => {
    // respond using a mocked JSON body
    return res(ctx.json(mockData.styleData))
  })
)

// establish API mocking before all tests
beforeAll(() => server.listen())
// reset any request handlers that are declared as a part of our tests
// (i.e. for testing one-time error scenarios)
afterEach(() => server.resetHandlers())
// clean up once the tests are done
afterAll(() => server.close())

test('finds image div', async() => {
  render(<ProductCard key="71697" productId={71697} actionButtonIcon={faX}/> )

  await screen.findByAltText('product image');

  expect(screen.getByAltText('product image')).toBeVisible();

})