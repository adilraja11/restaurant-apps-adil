import FavoriteRestoIdb from '../src/scripts/data/favorite-resto-idb';
import {itActsAsFavoriteRestaurantModel} from './contract/favoriteRestaurantContract';

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestoIdb.getAllResto()).forEach(async (restaurant) => {
      await FavoriteRestoIdb.deleteResto(restaurant.id);
    });
  });

  itActsAsFavoriteRestaurantModel(FavoriteRestoIdb);
});
