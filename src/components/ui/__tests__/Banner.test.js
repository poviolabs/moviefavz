import React from 'react';
import { render } from '../../../utils/testUtils';

import Banner from '../Banner';

describe('<Banner />', () => {
  it('Renders the Component', () => {
    const props = {
      image: '',
    };
    const container = render(<Banner {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
