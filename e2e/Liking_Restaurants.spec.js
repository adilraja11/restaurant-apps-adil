const assert = require('assert');

// eslint-disable-next-line new-cap
Feature('Liking Restaurants');

// eslint-disable-next-line new-cap
Before(({I}) => {
  I.amOnPage('/#/favorite');
});

// eslint-disable-next-line new-cap
Scenario('showing empty liked restaurants', ({I}) => {
  I.seeElement('#restaurant-item');
  I.see('You dont have any Favorite Cafe or Restaurant', '#restaurant-item');
});

// eslint-disable-next-line new-cap
Scenario('liking one restaurant', async ({I}) => {
  // Like Restaurant
  I.see('You dont have any Favorite Cafe or Restaurant', '#restaurant-item');

  I.amOnPage('/');

  I.waitForElement('#restaurant-item', 100);

  I.seeElement('#restaurant-item');

  const firstLocateResto = locate('.resto-item-detail a').first();
  const firstResto = locate('.resto-item-detail .resto-item-name').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstResto);

  I.click(firstLocateResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('#restaurant-item');

  const favoritedRestoTitle = await I.grabTextFrom('.resto-item-detail .resto-item-name');
  assert.strictEqual(firstRestaurantTitle, favoritedRestoTitle);

  //   Unlike Restaurant
  I.click(firstLocateResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.see('You dont have any Favorite Cafe or Restaurant', '#restaurant-item');
});
