import FavoriteRestoIdb from '../src/scripts/data/favorite-resto-idb';
import * as TestFactories from './helpers/testFactories';

describe('Unliking a Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestoIdb.putResto({id: 1});
  });

  afterEach(async () => {
    await FavoriteRestoIdb.deleteResto(1);
  });

  it('should display unlike widget when the restaurant has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({id: 1});

    expect(document.querySelector('[aria-label="Tekan Tidak Suka Restoran ini"]'))
        .toBeTruthy();
  });

  it('should not display like widget when the restaurant has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({id: 1});

    expect(document.querySelector('[aria-label="Tekan Sukai Restoran ini"]'))
        .toBeFalsy();
  });

  it('should be able to remove liked restaurant from the list', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({id: 1});

    document.querySelector('[aria-label="Tekan Tidak Suka Restoran ini"]').dispatchEvent(new Event('click'));
    expect(await FavoriteRestoIdb.getAllResto()).toEqual([]);
  });

  it('should not throw error if the unliked restaurant is not in the list', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({id: 1});

    await FavoriteRestoIdb.deleteResto(1);

    document.querySelector('[aria-label="Tekan Tidak Suka Restoran ini"]').dispatchEvent(new Event('click'));
    expect(await FavoriteRestoIdb.getAllResto()).toEqual([]);
  });
});
