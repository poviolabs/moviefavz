import React from 'react';
import { render } from '../../../utils/testUtils';

import AuthModal from '../AuthModal';

describe('<AuthModal />', () => {
  it('Renders the Component', () => {
    const props = {
      visible: true,
      onCancel: jest.fn(),
      onConfirm: jest.fn(),
    };
    const container = render(<AuthModal {...props} />);
    expect(container).toMatchSnapshot();
  });
});
