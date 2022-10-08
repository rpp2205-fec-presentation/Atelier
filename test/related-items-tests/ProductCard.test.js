import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import ProductCard from '../../client/src/components/relatedItems/ProductCard.jsx';
import React from 'react';

test('finds image div', async() => {
  render(<ProductCard key="71697" productId={71697}/> )

  await screen.findByAltText('product image');

  expect(screen.getByAltText('product image')).toBeVisible();

})