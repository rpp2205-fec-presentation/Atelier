import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import RelatedItems from '../../client/src/components/relatedItems/RelatedItems.jsx';
import React from 'react';
import {setupServer} from 'msw/node';
import {rest} from 'msw';


const server = setupServer(
  rest.get('/products/:product_id', (req, res, ctx) => {
    return res(ctx.json(mockData.productData))
  }),
  rest.get('/products/:product_id/related', (req, res, ctx) => {
    return res(ctx.json(mockData.relatedData))
  }));
// establish API mocking before all tests
beforeAll(() => server.listen())
// reset any request handlers that are declared as a part of our tests
// (i.e. for testing one-time error scenarios)
afterEach(() => server.resetHandlers())
// clean up once the tests are done
afterAll(() => server.close())

test('should be visible', async() => {
  render(<RelatedItems productId={71697}/> );

  var relatedItems = document.getElementById('related-items-and-comparisons');

  expect(relatedItems).toBeVisible();
})