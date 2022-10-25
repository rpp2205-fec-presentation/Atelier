import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductCard from '../../client/src/components/relatedItems/ProductCard.jsx';
import React from 'react';
import {rest} from 'msw';
import {setupServer} from 'msw/node';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX, faStar } from '@fortawesome/free-solid-svg-icons';
import mockData from './riMockData.js'

const server = setupServer(
  rest.get('/products/:product_id', (req, res, ctx) => {
    return res(ctx.json(mockData.productData))
  }),
  rest.get('/reviews/meta', (req, res, ctx) => {
    return res(ctx.json(mockData.ratingData))
  }),
  rest.get('/products/:product_id/styles', (req, res, ctx) => {
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

test('should have visible action button', async() => {
  render(<ProductCard key="71697" productId={71697} actionButtonIcon={faX}/> )

  var actionButtons = document.getElementsByClassName('ri-action-button');

  expect(actionButtons[0]).toBeVisible();
})

test('should get the default product image', async() => {
  render(<ProductCard key="71697" productId={71697} actionButtonIcon={faX}/> )

  var imageBlocks = document.getElementsByClassName('ri-image-block');

  expect(imageBlocks[0].style._values['background-image']).toBe('url(../images/fullstar.jpeg)');
})