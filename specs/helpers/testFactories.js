import FavoriteRestoIdb from '../../src/scripts/data/favorite-resto-idb';
import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';

const createLikeButtonPresenterWithResto = async (restaurant) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestaurants: FavoriteRestoIdb,
    restaurant,
  });
};

export {createLikeButtonPresenterWithResto};
