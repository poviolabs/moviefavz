import React from 'react';
import { render } from '../../../utils/testUtils';

import Loader from '../Loader';

describe('<Loader />', () => {
  it('Renders the Component', () => {
    const props = {};
    const container = render(<Loader {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
