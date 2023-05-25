import RestaurantDbSource from '../../data/restaurantdb-source';
import UrlParser from '../../routes/url-parser';
import {createRestaurantDetailTemplate} from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import PostReview from '../../utils/post-review';
import Spinner from '../templates/spinner-creator';
import FavoriteRestoIdb from '../../data/favorite-resto-idb';

const Detail = {
  async render() {
    return `
        <section class="content">
            <div id="loading"></div>
            <div class="content-resto">
                <div id="restaurant-detail">
                </div>
                <div id="form-review">
                    <h1 tabindex="0" class="detail-resto-label">Add Review</h1>
                    <p tabindex="0" class="detail-resto-caption">Beri pendapatmu mengenai restoran ini dengan mengisi add review, dan biarkan kami tahu apa yang kamu pikirkan.</p>
                    <form>
                        <div class="form-type">
                            <label for="inputName" class="form-label">Nama</label>
                            <input type="text" class="form-control" name="inputName" id="inputName" placeholder="Masukkan Nama Anda">
                        </div>
                        <div class="form-type">
                            <label for="inputReview" class="form-label">Review</label>
                            <input type="text" class="form-control" name="inputReview" id="inputReview" placeholder="Masukkan Pesan Review Anda">
                        </div>
                        <button type="submit" id="submit-review" aria-label="Tekan Tombol Untuk Menambahkan Review" class="btn">Submit</button>
                    </form>
                </div>
            </div>
        </section>

        <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantContainer = document.querySelector('#restaurant-detail');
    const loading = document.querySelector('#loading');
    const content = document.querySelector('.content-resto');

    // eslint-disable-next-line new-cap
    loading.innerHTML = Spinner();
    content.style.display = 'none';

    try {
      const restaurant = await RestaurantDbSource.detailRestaurant(url.id);
      restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

      LikeButtonPresenter.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        favoriteRestaurants: FavoriteRestoIdb,
        restaurant: {
          id: restaurant.id,
          name: restaurant.name,
          pictureId: restaurant.pictureId,
          city: restaurant.city,
          rating: restaurant.rating,
          description: restaurant.description,
        },
      });

      content.style.display = 'block';
      loading.style.display = 'none';
    } catch (error) {
      restaurantContainer.innerHTML = `Error: ${error}, swipe up to refresh!`;
      content.style.display = 'block';
      loading.style.display = 'none';
    }

    const buttonSubmit = document.querySelector('#submit-review');
    const nameInput = document.querySelector('#inputName');
    const reviewInput = document.querySelector('#inputReview');

    buttonSubmit.addEventListener('click', (event) => {
      event.preventDefault();
      if (nameInput.value === '' || reviewInput === '') {
        alert('Inputan Tidak Boleh Kosong');
        nameInput.value = '';
        reviewInput.value = '';
      } else {
        // eslint-disable-next-line new-cap
        PostReview(url, nameInput.value, reviewInput.value);
        nameInput.value = '';
        reviewInput.value = '';
      }
    });
  },
};

export default Detail;
