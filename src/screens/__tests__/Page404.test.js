import React from 'react';
import { render } from '../../utils/testUtils';

import Page404 from '../Page404';

describe('<Page404 />', () => {
  it('Renders the Component', () => {
    const props = {};
    const container = render(<Page404 {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
