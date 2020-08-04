import React from 'react';
import { render } from '../../../utils/testUtils';

import UserDropdown from '../UserDropdown';

describe('<UserDropdown />', () => {
  it('Renders the Component', () => {
    const props = {
      user: {},
      onLogout: jest.fn(),
    };
    const container = render(<UserDropdown {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
