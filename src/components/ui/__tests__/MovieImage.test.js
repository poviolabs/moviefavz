import React from 'react';
import { render } from '../../../utils/testUtils';

import MovieImage from '../MovieImage';

describe('<MovieImage />', () => {
  it('Renders the Component', () => {
    const props = {
      title: 'Card Title',
      poster: 'N/A',
    };
    const container = render(<MovieImage {...props} />);
    expect(container).toMatchSnapshot();
  });
});
