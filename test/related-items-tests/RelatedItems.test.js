import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import RelatedItems from '../../client/src/components/relatedItems/RelatedItems.jsx';
import React from 'react';

test('should have header', async() => {
  render(<RelatedItems productId={71697}/> );

  var headerDiv = document.getElementById('related-items-and-comparisons').firstChild;

  expect(headerDiv).toHaveTextContent('Related Items and Comparison')
})