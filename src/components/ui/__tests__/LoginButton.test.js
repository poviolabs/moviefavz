import React from 'react';
import { render } from '../../../utils/testUtils';

import LoginButton from '../LoginButton';

describe('<LoginButton />', () => {
  it('Renders the Component', () => {
    const props = {};
    const container = render(<LoginButton {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
