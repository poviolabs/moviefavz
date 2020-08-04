import React from 'react';
import { render } from '../../../utils/testUtils';

import MovieRating from '../MovieRating';

describe('<MovieRating />', () => {
  it('Renders the Component', () => {
    const props = {
      source: 'IMDB',
      value: '8.6',
    };
    const container = render(<MovieRating {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
