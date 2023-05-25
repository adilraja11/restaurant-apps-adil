import {itActsAsFavoriteRestaurantModel} from './contract/favoriteRestaurantContract';

let favoriteRestaurants = [];

const FavoriteRestaurantArray = {
  getResto(id) {
    if (!id) {
      return;
    }

    return favoriteRestaurants.find((restaurant) => restaurant.id == id);
  },

  getAllResto() {
    return favoriteRestaurants;
  },

  putResto(restaurant) {
    if (!restaurant.hasOwnProperty('id')) {
      return;
    }

    if (this.getResto(restaurant.id)) {
      return;
    }

    favoriteRestaurants.push(restaurant);
  },

  deleteResto(id) {
    favoriteRestaurants = favoriteRestaurants.filter((restaurant) => restaurant.id != id);
  },
};

describe('Favorite Restaurant Array Contract Test Implementation', () => {
  afterEach(() => favoriteRestaurants = []);

  itActsAsFavoriteRestaurantModel(FavoriteRestaurantArray);
});
