import React from 'react';
import { render } from '../../utils/testUtils';

import Favorites from '../Favorites';

describe('<Favorites />', () => {
  it('Renders the Component', () => {
    const props = {};
    const container = render(<Favorites {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
