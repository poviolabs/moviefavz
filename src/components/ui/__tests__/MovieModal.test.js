import React from 'react';
import { render } from '../../../utils/testUtils';

import MovieModal from '../MovieModal';

describe('<MovieModal />', () => {
  it('Renders the Component', () => {
    const props = {
      visible: true,
      loading: false,
      onClose: jest.fn(),
      movie: {},
      favorited: true,
      onFavoritesPress: jest.fn(),
    };
    const container = render(<MovieModal {...props} />);
    expect(container).toMatchSnapshot();
  });
});
