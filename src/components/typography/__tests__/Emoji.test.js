import React from 'react';
import { render } from '../../../utils/testUtils';

import Emoji from '../Emoji';

describe('<Emoji />', () => {
  it('Renders the Component', () => {
    const props = {
      emoji: '👌',
      label: 'Label text',
    };
    const container = render(<Emoji {...props} />);
    expect(container).toMatchSnapshot();
  });
});
