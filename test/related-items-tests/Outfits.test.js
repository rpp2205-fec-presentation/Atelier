import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import Outfits from '../../client/src/components/relatedItems/Outfits.jsx';
import React from 'react';
import {setupServer} from 'msw/node';
import {rest} from 'msw';


const server = setupServer();
// establish API mocking before all tests
beforeAll(() => server.listen())
// reset any request handlers that are declared as a part of our tests
// (i.e. for testing one-time error scenarios)
afterEach(() => server.resetHandlers())
// clean up once the tests are done
afterAll(() => server.close())

test('should have header', async() => {
  render(<Outfits/> );

  await screen.findByRole('heading');

  expect(screen.getByRole('heading')).toHaveTextContent('YOUR OUTFIT');

})