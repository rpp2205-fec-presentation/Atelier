import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import RelatedProducts from '../../client/src/components/relatedItems/RelatedProducts.jsx';
import React from 'react';

test('should have header', async() => {
  render(<RelatedProducts productId={71697}/> );

  await screen.findByRole('heading');

  expect(screen.getByRole('heading')).toHaveTextContent('Related Products');

})