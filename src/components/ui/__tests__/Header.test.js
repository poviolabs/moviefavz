import React from 'react';
import { render } from '../../../utils/testUtils';

import Header from '../Header';

describe('<Header />', () => {
  it('Renders the Component', () => {
    const props = {};
    const container = render(<Header {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
