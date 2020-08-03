import React from 'react';
import { render } from '../../../utils/testUtils';

import Footer from '../Footer';

describe('<Footer />', () => {
  it('Renders the Component', () => {
    const props = {};
    const container = render(<Footer {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
