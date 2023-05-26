import CONFIG from '../../global/config';

const createRestaurantItemTemplate = (resto) => `
    <article tabindex="0" class="resto-item">
        <img tabindex="0" class="resto-item-thumbnail lazyload" data-src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="Gambar Restoran ${resto.name}">
        <div class="resto-item-detail">
            <span tabindex="0" aria-label="Rating ${resto.rating}" class="tag"><i class="fa-solid fa-star"></i>${resto.rating}</span>
            <span tabindex="0" aria-label="Kota ${resto.city}" class="tag"><i class="fa-solid fa-location-dot"></i>${resto.city}</span>
            <div tabindex="0" class="resto-item-name">${resto.name}</div>
            <p tabindex="0" class="resto-item-description">${resto.description}</p>
            <a href="/#/detail/${resto.id}"><button type="button" aria-label="Tekan Tombol ini Untuk Lihat Detail Restoran ${resto.name}" class="tag">Lihat Selengkapnya</button></a>
        </div>
    </article>
`;

const createRestaurantDetailTemplate = (resto) => `
    <div class="detail-resto">
        <img tabindex="0" class="resto-thumbnail" src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="Gambar Restoran ${resto.name}">
        <h1 tabindex="0" class="detail-resto-label">${resto.name}</h1>
        <div tabindex="0" aria-label="Kota ${resto.city}" class="tag-detail">${resto.city}</div>
        <div tabindex="0" aria-label="Alamat ${resto.address}" class="tag-detail"><i class="fa-solid fa-location-dot"></i>${resto.address}</div>
        <p tabindex="0" class="detail-resto-caption">${resto.description}</p>
        <div id="resto-menu-detail">
            <article tabindex="0" class="resto-menu-item">
                <h2 tabindex="0" class="resto-menu-item-label">Menu Makanan</h2>
                <ul class="resto-menu-item-description">
                    ${resto.menus.foods.map((food) => `
                    <li tabindex="0">${food.name}</li>`).join('')}
                </ul>
            </article>
            <article tabindex="0" class="resto-menu-item">
                <h2 tabindex="0" class="resto-menu-item-label">Menu Minuman</h2>
                <ul class="resto-menu-item-description">
                    ${resto.menus.drinks.map((drink) => `
                    <li tabindex="0">${drink.name}</li>`).join('')}
                </ul>
            </article>
        </div>
        <h1 tabindex="0" class="detail-resto-label">Reviews</h1>
        <p tabindex="0" class="detail-resto-caption">Lihatlah tanggapan para pengguna mengenai Restoran ${resto.name}.</p>
        <div id="reviews-item">
            ${resto.customerReviews.map((review) => `
                <article tabindex="0" class="review-item">
                    <p class="review-item-description">${review.review}</p>
                    <p class="review-item-user"><strong>${review.name} </strong>- ${review.date}</p>
                </article>`).join('')}
        </div>
    </div>

`;

const createLikeButtonTemplate = () => `
  <button aria-label="Tekan Sukai Restoran ini" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="Tekan Tidak Suka Restoran ini" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
