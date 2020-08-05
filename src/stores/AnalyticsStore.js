import { observable, action, computed, decorate } from 'mobx';

import moviesStore from './MoviesStore';

import { dateFunctions, arrayFunctions } from '../utils';
import { LOCAL_STORAGE } from '../constants';

class AnalyticsStore {
  user = null;

  get favoritesStatistic() {
    const dataArr = arrayFunctions.groupByDay(moviesStore.favorites);
    if (dataArr.length >= 7) {
      return dataArr.slice(0, 7).reverse();
    } else {
      const fillUpArray = dateFunctions.fillDaysToMatch(7, dataArr);
      return [...fillUpArray, ...dataArr];
    }
  }

  get searchCountStatistics() {
    if (!this.user) {
      return [];
    }
    const data = JSON.parse(
      localStorage.getItem(`${LOCAL_STORAGE.searchCount}_${this.user}`)
    );
    if (data) {
      const dataArr = Object.values(data);
      if (dataArr.length >= 7) {
        return dataArr;
      } else {
        const fillUpArray = dateFunctions.fillDaysToMatch(7, dataArr);
        return [...fillUpArray, ...dataArr];
      }
    } else {
      return [];
    }
  }

  get groupedStatistics() {
    if (this.searchCountStatistics.length === 0) {
      return null;
    }
    return this.searchCountStatistics.map(({ timestamp, value }) => {
      return {
        timestamp,
        searchValue: value,
        favsValue:
          this.favoritesStatistic.find(
            (fav) =>
              dateFunctions.getUnixDay(fav.timestamp) ===
              dateFunctions.getUnixDay(timestamp)
          )?.value ?? 0,
      };
    });
  }

  get hasStatistics() {
    return this.groupedStatistics && this.groupedStatistics.length > 0;
  }

  incrementSearchCount = () => {
    if (!this.user) {
      return;
    }

    const storageKey = `${LOCAL_STORAGE.searchCount}_${this.user}`;
    const today = dateFunctions.getUnixDay();
    const countData = JSON.parse(localStorage.getItem(storageKey)) || {};

    if (countData && countData[today]) {
      countData[today].value = parseInt(countData[today].value) + 1;
    } else {
      countData[today] = {
        timestamp: Date.now(),
        value: 1,
      };
    }
    localStorage.setItem(storageKey, JSON.stringify(countData));
  };

  setUser = ({ user }) => {
    this.user = user;
  };
}

decorate(AnalyticsStore, {
  favoritesStatistic: computed,
  hasStatistics: computed,
  user: observable,
  setUser: action,
  groupedStatistics: computed,
});

export default new AnalyticsStore();
