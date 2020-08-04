import React from 'react';
import { render } from '../../../utils/testUtils';

import Container from '../Container';

describe('<Container />', () => {
  it('Renders the Component', () => {
    const props = {};
    const container = render(
      <Container {...props}>
        <p>Some child element</p>
      </Container>
    );
    expect(container).toMatchSnapshot();
  });
});
