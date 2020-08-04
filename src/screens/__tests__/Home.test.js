import React from 'react';
import { render } from '../../utils/testUtils';

import Home from '../Home';

describe('<Home />', () => {
  it('Renders the Component', () => {
    const props = {};
    const container = render(<Home {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
