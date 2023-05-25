import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import Spinner from '../templates/spinner-creator';
import {createRestaurantItemTemplate} from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <section class="content">
      <div class="content-resto">
          <h1 tabindex="0" class="detail-resto-label">Restoran Favorit</h1>
          <div id="loading"></div>
          <div id="restaurant-item">
          </div>
      </div>
    </section>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const loading = document.querySelector('#loading');
    const content = document.querySelector('.content-resto');
    // eslint-disable-next-line new-cap
    loading.innerHTML = Spinner();
    content.style.display = 'none';

    const restaurantsContainer = document.querySelector('#restaurant-item');
    const dataRestaurants = await FavoriteRestoIdb.getAllResto();

    if (dataRestaurants.length === 0) {
      restaurantsContainer.innerHTML = `
        You dont have any Favorite Cafe or Restaurant
      `;
    }

    try {
      const restaurants = await FavoriteRestoIdb.getAllResto();
      restaurants.forEach((resto) => {
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(resto);
      });
      content.style.display = 'block';
      loading.style.display = 'none';
    } catch (error) {
      content.style.display = 'block';
      loading.style.display = 'none';
      listContainer.innerHTML = `Error: ${error}, swipe up to refresh!`;
    }
  },
};

export default Favorite;
