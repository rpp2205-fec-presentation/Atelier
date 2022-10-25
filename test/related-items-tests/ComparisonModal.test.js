import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import ComparisonModal from '../../client/src/components/relatedItems/ComparisonModal.jsx';
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

test('should be visible if show is true', async() => {
  render(<ComparisonModal show={true}/>);

  var modal = document.getElementsByClassName('ri-comparison-table');

  expect(modal[0]).toBeVisible();

});

test('should not exist if show is false', async() => {
  render(<ComparisonModal show={false}/>);

  var modal = document.getElementsByClassName('ri-comparison-table');

  expect(modal[0]).toBe(undefined);

});