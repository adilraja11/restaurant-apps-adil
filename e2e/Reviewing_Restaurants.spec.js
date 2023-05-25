// eslint-disable-next-line new-cap
Feature('Reviewing Restaurants');

// eslint-disable-next-line new-cap
Before(({I}) => {
  I.amOnPage('/');
});

// eslint-disable-next-line new-cap
Scenario('posting review restaurant', async ({I}) => {
  const review = 'End to End Testing';

  I.waitForElement('#restaurant-item', 100);

  I.seeElement('#restaurant-item');

  I.waitForElement('.resto-item-detail', 30);
  I.click(locate('.resto-item-detail a').first());

  I.waitForElement('form', 30);
  I.seeElement('form');

  I.fillField('inputName', 'User');
  I.fillField('inputReview', 'End to End Testing');

  I.click('#submit-review');

  I.see(review, '.review-item-description');
});
