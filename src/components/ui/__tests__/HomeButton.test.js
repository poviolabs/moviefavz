import React from 'react';
import { render } from '../../../utils/testUtils';

import HomeButton from '../HomeButton';

describe('<HomeButton />', () => {
  it('Renders the Component', () => {
    const props = {};
    const container = render(<HomeButton {...props} />);
    expect(container).toMatchSnapshot();
  });
});
