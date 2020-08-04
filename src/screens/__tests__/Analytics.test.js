import React from 'react';
import { render } from '../../utils/testUtils';

import Analytics from '../Analytics';

describe('<Analytics />', () => {
  it('Renders the Component', () => {
    const props = {};
    const container = render(<Analytics {...props} />);
    expect(container).toMatchSnapshot();
  });
});
