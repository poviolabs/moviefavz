import { observable, computed, action, decorate, runInAction } from 'mobx';

import { fetchSearchMovies, fetchMovieById } from '../api/omdbApiService';
import { apiValidations } from '../utils';
import { STATE_TYPES, LOCAL_STORAGE } from '../constants';

import analyticsStore from './AnalyticsStore';

class MoviesStore {
  movies = [];
  singleMoviesById = {};
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

  get latestFindingsPreviews() {
    return this.latestFindings.reduce((arr, movieId) => {
      if (!this.singleMoviesById[movieId]) {
        return arr;
      }
      const { Title, Poster, Type, Year, imdbID } = this.singleMoviesById[
        movieId
      ];
      return [...arr, { Title, Poster, Type, Year, imdbID }];
    }, []);
  }

  get favoritesPreviews() {
    return this.favorites.reduce((arr, { id }) => {
      if (!this.singleMoviesById[id]) {
        return arr;
      }
      const { Title, Poster, Type, Year, imdbID } = this.singleMoviesById[id];
      return [...arr, { Title, Poster, Type, Year, imdbID }];
    }, []);
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
        analyticsStore.incrementSearchCount();
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

  searchMoviesNextPage = async ({ page }) => {
    this.searching = STATE_TYPES.pending;
    try {
      const { data, nextPage, status, error } = await fetchSearchMovies({
        query: this.query,
        page,
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

  clearSearchResults = () => {
    this.searchResults = [];
    this.searchNextPage = null;
    this.totalResults = null;
    this.query = '';
  };

  fetchMovieById = async ({ id }) => {
    this.state = STATE_TYPES.pending;
    try {
      const { data, status, error } = await fetchMovieById({
        id,
      });
      if (apiValidations.validResponse(status)) {
        this.singleMoviesById = {
          ...this.singleMoviesById,
          [data.imdbID]: data,
        };
        this.state = STATE_TYPES.done;
      } else {
        throw new Error(error);
      }
    } catch (err) {
      console.error(err);
      runInAction(() => {
        this.error = err.message;
        this.state = STATE_TYPES.error;
      });
    }
  };

  addToLatestFidings = ({ id, user }) => {
    if (this.latestFindings.includes(id)) {
      return;
    }
    this.latestFindings = [id, ...this.latestFindings.splice(0, 3)];
    localStorage.setItem(
      `${LOCAL_STORAGE.findings}_${user}`,
      JSON.stringify(this.latestFindings)
    );
  };

  toggleFavoriteMovie = ({ id, user }) => {
    if (this.favorites.some(({ id: favId }) => favId === id)) {
      this.favorites = [
        ...this.favorites.filter(({ id: favId }) => favId !== id),
      ];
    } else {
      if (!Object.keys(this.singleMoviesById).includes(id)) {
        this.fetchMovieById({ id });
      }
      const timestamp = Date.now();
      this.favorites = [{ id, timestamp }, ...this.favorites];
    }
    localStorage.setItem(
      `${LOCAL_STORAGE.favorites}_${user}`,
      JSON.stringify(this.favorites)
    );
  };

  removeErrors = () => {
    this.searching = STATE_TYPES.inactive;
    this.state = STATE_TYPES.inactive;
    this.error = null;
  };

  initializeFromStorage = ({ user }) => {
    const favorites = localStorage.getItem(
      `${LOCAL_STORAGE.favorites}_${user}`
    );
    const latestFindings = localStorage.getItem(
      `${LOCAL_STORAGE.findings}_${user}`
    );
    this.favorites = JSON.parse(favorites) || [];
    this.latestFindings = JSON.parse(latestFindings) || [];
    this.latestFindings.forEach((movieId) => {
      this.fetchMovieById({ id: movieId });
    });
    this.favorites.forEach(({ id }) => {
      if (!id) {
        // Something was modified/changed in unexpected way in localStorage,
        // to prevent app from breaking, clear localStorage
        localStorage.clear();
        return;
      }
      this.fetchMovieById({ id });
    });
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
  latestFindingsPreviews: computed,
  favoritesPreviews: computed,
  favorites: observable,
  singleMoviesById: observable,
  hasNextPage: computed,
  hasSearchResults: computed,
  searchMovies: action,
  searchMoviesNextPage: action,
  clearSearchResults: action,
  fetchMovieById: action,
  toggleFavoriteMovie: action,
  addToLatestFidings: action,
  removeErrors: action,
});

export default new MoviesStore();
