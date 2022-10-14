import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Overview from '../../client/src/components/overview/Overview';
import ProductInfo from '../../client/src/components/overview/ProductInfo';
import productById from './productSampleData/productById';

const server = setupServer(
  rest.get('/products/:product_Id', (req, res, ctx) => {
    return res(ctx.status(200))
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('<Overview /> Test', () => {
  test('Renders Overview', () => {
    render(<Overview />);
    const header = screen.getByText("Overview");
    expect(header).toBeInTheDocument();
  });
});

describe('<ProductInfo /> Test', () => {
  test('Renders Product Info', () => {
    render(<ProductInfo id={productById.id} />)
    const header = screen.getByText("Product Info");
    expect(header).toBeInTheDocument();;
  })
})
