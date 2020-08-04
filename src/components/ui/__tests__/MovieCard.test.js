import React from 'react';
import { render } from '../../../utils/testUtils';

import MovieCard from '../MovieCard';

describe('<MovieCard />', () => {
  it('Renders the Component', () => {
    const props = {
      Title: 'Card Title',
      Poster: 'N/A',
      Type: 'movie',
      Year: '2020',
      imdbID: 'tt7653',
      onPress: jest.fn(),
      favorited: true,
      onFavoritePress: jest.fn(),
    };
    const container = render(<MovieCard {...props} />);
    expect(container).toMatchSnapshot();
  });
});
