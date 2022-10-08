import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import ProductCard from '../../client/src/components/relatedItems/ProductCard.jsx';
import React from 'react';
import {rest} from 'msw';
import {setupServer} from 'msw/node';

const server = setupServer(
  // capture "GET /greeting" requests
  rest.get('/products/:product_Id', (req, res, ctx) => {
    // respond using a mocked JSON body
    return res(ctx.json({
      "id": 11,
      "name": "Air Minis 250",
      "slogan": "Full court support",
      "description": "This optimized air cushion pocket reduces impact but keeps a perfect balance underfoot.",
      "category": "Basketball Shoes",
      "default_price": "0",
      "features": [
      {
              "feature": "Sole",
              "value": "Rubber"
          },
      {
              "feature": "Material",
              "value": "FullControlSkin"
          },
      ],
  }))
  }),
  rest.get('/reviews/meta', (req, res, ctx) => {
    // respond using a mocked JSON body
    return res(ctx.json({  "product_id": "2",
    "ratings": {
      1: 3,
      2: 1,
      3: 1,
      4: 2,
      5: 3
    }}))
  }),
)

// establish API mocking before all tests
beforeAll(() => server.listen())
// reset any request handlers that are declared as a part of our tests
// (i.e. for testing one-time error scenarios)
afterEach(() => server.resetHandlers())
// clean up once the tests are done
afterAll(() => server.close())

test('finds image div', async() => {
  render(<ProductCard key="71697" productId={71697}/> )

  await screen.findByAltText('product image');

  expect(screen.getByAltText('product image')).toBeVisible();

})