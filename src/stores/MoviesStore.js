import { observable, computed, action, decorate, runInAction } from 'mobx';

import { fetchSearchMovies } from '../api/omdbApiService';
import { apiValidations } from '../utils';
import { STATE_TYPES } from '../constants';

class MoviesStore {
  movies = [];
  query = '';
  totalResults = null;
  state = STATE_TYPES.inactive;
  searching = STATE_TYPES.inactive;
  searchResults = [];
  searchNextPage = null;
  error = null;
  latestFindings = [];
  favorites = [];

  get hasSearchResults() {
    return this.searchResults.length > 0;
  }

  get hasNextPage() {
    return this.totalResults >
      this.searchResults.length * (this.searchNextPage - 1)
      ? true
      : false;
  }

  searchMovies = async ({ query }) => {
    this.searching = STATE_TYPES.pending;
    try {
      const {
        data,
        nextPage,
        totalResults,
        status,
        error,
      } = await fetchSearchMovies({
        query,
      });
      if (apiValidations.validResponse(status)) {
        runInAction(() => {
          this.query = query;
          this.searchResults = data;
          this.totalResults = totalResults;
          this.searchNextPage = nextPage;
          this.searching = STATE_TYPES.done;
        });
      } else {
        throw new Error(error);
      }
    } catch (err) {
      console.error(err);
      runInAction(() => {
        this.error = err.message;
        this.searching = STATE_TYPES.error;
      });
    }
  };

  searchMoviesNextPage = async () => {
    this.searching = STATE_TYPES.pending;
    try {
      const { data, nextPage, status, error } = await fetchSearchMovies({
        query: this.query,
        page: this.searchNextPage,
      });
      if (apiValidations.validResponse(status)) {
        runInAction(() => {
          this.searchResults.push(...data);
          this.searchNextPage = nextPage;
          this.searching = STATE_TYPES.done;
        });
      } else {
        throw new Error(error);
      }
    } catch (err) {
      console.error(err);
      runInAction(() => {
        this.error = err.message;
        this.searching = STATE_TYPES.error;
      });
    }
  };

  removeErrors = () => {
    this.searching = STATE_TYPES.inactive;
    this.state = STATE_TYPES.inactive;
    this.error = null;
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
  hasNextPage: computed,
  hasSearchResults: computed,
  searchMovies: action,
  searchMoviesNextPage: action,
  removeErrors: action,
});

export default MoviesStore;
