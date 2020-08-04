import React from 'react';
import { render } from '../../../utils/testUtils';

import MoviesGrid from '../MoviesGrid';

describe('<MoviesGrid />', () => {
  it('Renders the Component', () => {
    const props = {
      movies: [],
    };
    const container = render(<MoviesGrid {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
