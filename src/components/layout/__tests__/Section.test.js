import React from 'react';
import { render } from '../../../utils/testUtils';

import Section from '../Section';

describe('<Section />', () => {
  it('Renders the Component', () => {
    const props = {};
    const container = render(
      <Section {...props}>
        <p>Some child element</p>
      </Section>
    );
    expect(container).toMatchSnapshot();
  });
});
