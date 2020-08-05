import { computed, decorate } from 'mobx';

import moviesStore from './MoviesStore';

import { dateFunctions, arrayFunctions } from '../utils';

class AnalyticsStore {
  movies = null;

  constructor() {
    this.movies = moviesStore;
  }

  get favoritesStatistic() {
    const dataArr = arrayFunctions.groupByDay(this.movies.favorites);
    if (dataArr.length >= 7) {
      return dataArr.slice(0, 7).reverse();
    } else {
      const fillUpArray = dateFunctions.fillDaysToMatch(7, dataArr);
      return [...fillUpArray, ...dataArr];
    }
  }

  get hasFavoritesStatistic() {
    return this.favoritesStatistic.length > 0;
  }
}

decorate(AnalyticsStore, {
  favoritesStatistic: computed,
  hasFavoritesStatistic: computed,
});

export default new AnalyticsStore();
