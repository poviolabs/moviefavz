import { observable, decorate } from 'mobx';

class MoviesStore {
  movies = [];
}

decorate(MoviesStore, {
  movies: observable,
});
