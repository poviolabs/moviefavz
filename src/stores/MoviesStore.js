import { observable, computed, action, decorate, runInAction } from 'mobx';

import { fetchSearchMovies } from '../api/omdbApiService';

class MoviesStore {
  movies = [];
  state = 'pending'; // pending | done | error
  searching = 'pending'; // pending | done | error
  searchResults = [];
  searchNextPage = null;
  error = null;
  latestFindings = [];
  favorites = [];

  get hasSearchResults() {
    return this.searchResults.length > 0;
  }

  searchMovies = async ({ query, page }) => {
    try {
      const { data, nextPage } = await fetchSearchMovies({ query, page });
      runInAction(() => {
        this.searchResults = [...this.searchResults, ...data];
        this.searchNextPage = nextPage;
      });
    } catch (err) {
      console.error(err);
      runInAction(() => {
        this.error = err;
      });
    }
  };
}

decorate(MoviesStore, {
  movies: observable,
  state: observable,
  searching: observable,
  searchResults: observable,
  searchNextPage: observable,
  error: observable,
  latestFindings: observable,
  favorites: observable,
  hasSearchResults: computed,
  searchMovies: action,
});

export default MoviesStore;
