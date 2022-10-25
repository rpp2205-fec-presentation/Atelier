import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import RelatedProducts from '../../client/src/components/relatedItems/RelatedProducts.jsx';
import React from 'react';
import {setupServer} from 'msw/node';
import {rest} from 'msw';


const server = setupServer(
rest.get('/products/:product_id', (req, res, ctx) => {
  return res(ctx.json(mockData.productData))
}),
rest.get('/reviews/meta', (req, res, ctx) => {
  return res(ctx.json(mockData.ratingData))
}),
rest.get('/products/:product_id/styles', (req, res, ctx) => {
  return res(ctx.json(mockData.styleData))
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

test('should have header', async() => {
  render(<RelatedProducts productId={71697}/> );

  await screen.findByRole('heading');

  expect(screen.getByRole('heading')).toHaveTextContent('RELATED PRODUCTS');

})