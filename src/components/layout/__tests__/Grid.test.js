import React from 'react';
import { render } from '../../../utils/testUtils';

import Grid from '../Grid';

describe('<Grid />', () => {
  it('Renders the Component', () => {
    const props = {};
    const container = render(
      <Grid {...props}>
        <p>Child element 1</p>
        <p>Child element 2</p>
        <p>Child element 3</p>
      </Grid>
    );
    expect(container).toMatchSnapshot();
  });
});
