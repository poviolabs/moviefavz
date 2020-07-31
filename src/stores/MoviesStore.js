import { observable, computed, action, decorate, runInAction } from 'mobx';

import { fetchSearchMovies, fetchMovieById } from '../api/omdbApiService';
import { apiValidations } from '../utils';
import { STATE_TYPES, LOCAL_STORAGE } from '../constants';

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
    return Object.keys(this.singleMoviesById)
      .filter((movieId) => this.latestFindings.includes(movieId))
      .reduce((arr, movieId) => {
        const { Title, Poster, Type, Year, imdbID } = this.singleMoviesById[
          movieId
        ];
        return [{ Title, Poster, Type, Year, imdbID }, ...arr];
      }, []);
  }

  get favoritesPreviews() {
    return Object.keys(this.singleMoviesById)
      .filter((movieId) => this.favorites.includes(movieId))
      .reduce((arr, movieId) => {
        const { Title, Poster, Type, Year, imdbID } = this.singleMoviesById[
          movieId
        ];
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

  addToLatestFidings = ({ id }) => {
    if (this.latestFindings.includes(id)) {
      return;
    }
    this.latestFindings = [id, ...this.latestFindings.splice(0, 3)];
    localStorage.setItem(
      LOCAL_STORAGE.findings,
      JSON.stringify(this.latestFindings)
    );
  };

  toggleFavoriteMovie = ({ id }) => {
    if (this.favorites.includes(id)) {
      this.favorites = [...this.favorites.filter((movieId) => movieId !== id)];
    } else {
      if (!Object.keys(this.singleMoviesById).includes(id)) {
        this.fetchMovieById({ id });
      }
      this.favorites = [id, ...this.favorites];
    }
    localStorage.setItem(
      LOCAL_STORAGE.favorites,
      JSON.stringify(this.favorites)
    );
  };

  removeErrors = () => {
    this.searching = STATE_TYPES.inactive;
    this.state = STATE_TYPES.inactive;
    this.error = null;
  };

  initializeFromStorage = () => {
    const favorites = localStorage.getItem(LOCAL_STORAGE.favorites);
    const latestFindings = localStorage.getItem(LOCAL_STORAGE.findings);
    this.favorites = JSON.parse(favorites);
    this.latestFindings = JSON.parse(latestFindings) || [];
    [...this.favorites, ...this.latestFindings].forEach((movieId) => {
      this.fetchMovieById({ id: movieId });
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

export default MoviesStore;
