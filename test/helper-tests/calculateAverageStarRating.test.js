import calculateAverageRating from '../../client/src/components/helpers/calculateAverageRating.js';
import {rest} from 'msw';
import {setupServer} from 'msw/node';
import mockData from '../related-items-tests/riMockData.js'

const server = setupServer(
  rest.get('/reviews/meta', (req, res, ctx) => {
    // respond using a mocked JSON body
    return res(ctx.json(mockData.ratingData))
  }),
);

// establish API mocking before all tests
beforeAll(() => server.listen())
// reset any request handlers that are declared as a part of our tests
// (i.e. for testing one-time error scenarios)
afterEach(() => server.resetHandlers())
// clean up once the tests are done
afterAll(() => server.close())

describe("Calculate Average Star Rating", () => {
  it("appropriately calculates the average", () => {
    var average;
    calculateAverageRating(2).
    then(result => {
      average = result;

      expect(average).toBe(3.1);
    });
  });
});
