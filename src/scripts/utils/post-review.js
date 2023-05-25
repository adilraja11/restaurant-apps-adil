import RestaurantDbSource from '../data/restaurantdb-source';

const PostReview = (url, name, review) => {
  const dataInput = {
    id: url.id,
    name,
    review,
  };

  RestaurantDbSource.postRestaurant(dataInput);

  const reviewContainer = document.querySelector('#reviews-item');
  const options = {year: 'numeric', month: 'long', day: 'numeric'};
  const date = new Date().toLocaleDateString('id-ID', options);
  const newReview = `
  <article tabindex="0" class="review-item">
    <p class="review-item-description">${review}</p>
    <p class="review-item-user"><strong>${name} </strong>- ${date}</p>
  </article>
  `;

  reviewContainer.innerHTML += newReview;
};

export default PostReview;
