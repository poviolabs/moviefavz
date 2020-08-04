import React from 'react';
import { render } from '../../../utils/testUtils';

import AuthGraphic from '../AuthGraphic';

describe('<AuthGraphic />', () => {
  it('Renders the Component', () => {
    const props = {};
    const container = render(<AuthGraphic {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
