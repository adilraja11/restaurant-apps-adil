import RestaurantDbSource from '../../data/restaurantdb-source';
import Spinner from '../templates/spinner-creator';
import {createRestaurantItemTemplate} from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <div class="hero">
        <div class="hero-overlay">
            <div id="maincontent" class="hero-inner">
                <h1 tabindex="0" class="hero-title">Welcome to Foodify</h1>
                <p tabindex="0" class="hero-tagline">Dengan Foodify, anda dapat mencari dan menikmati restoran terbaik di kota dengan mudah.</p>
                <a tabindex="-1" href="#explore"><button type="button" aria-label="Tekan Tombol ini Untuk Menuju Konten Jelajahi Restoran" class="hero-button primary-button">Jelajahi Sekarang</button></a>
                <a tabindex="-1" href="#testimonial"><button type="button" aria-label="Tekan Tombol ini Untuk Menuju Konten Apa Kata Mereka" class="hero-button secondary-button">Apa Kata Mereka</button></a>
            </div>
        </div>
    </div>
    
    <section class="content">
        <div id="loading"></div>
        <div class="content-resto">
            <h1 tabindex="0" id="explore" class="content-resto-label">Jelajahi Restoran</h1>
            <p tabindex="0" class="content-resto-caption">Temukan tempat makan terbaik di kota Anda dengan Jelajahi Restoran.</p>
            <div id="restaurant-item">
            </div>
        </div>

        <div class="content-resto">
            <h1 tabindex="0" id="testimonial" class="testi-resto-label">Apa Kata Mereka</h1>
            <p tabindex="0" class="testi-resto-caption">Dengarkan apa kata pengguna kami tentang pengalaman mereka dengan Foodify.</p>
            <div id="testimonial-item">
                <article tabindex="0" class="testi-item">
                    <p class="testi-item-description">Saya sangat senang menggunakan Foodify untuk mencari restoran di sekitar tempat saya tinggal. Sebagai seorang mahasiswa, saya selalu mencari tempat makan yang terjangkau dan dengan Foodify saya dapat menemukannya dengan mudah.</p>
                    <p class="testi-item-user"><strong>Rachmy </strong>- Mahasiswa</p>
                </article>
                <article tabindex="0" class="testi-item">
                    <p class="testi-item-description">Sebagai seorang pebisnis, saya sering bepergian ke berbagai kota di Indonesia. Foodify menjadi teman yang baik dalam mencari restoran terbaik di setiap kota yang saya kunjungi. Saya sangat merekomendasikan Foodify untuk siapa saja
                        yang mencari tempat makan yang enak dan berkualitas.</p>
                    <p class="testi-item-user"><strong>Andi </strong>- Pebisnis</p>
                </article>
                <article tabindex="0" class="testi-item">
                    <p class="testi-item-description">Saya suka berkuliner dan mencoba restoran baru setiap kali saya keluar rumah. Dengan Foodify, saya dapat menemukan restoran yang belum pernah saya kunjungi sebelumnya. Selalu menyenangkan mencoba menu baru dan berkualitas tinggi.</p>
                    <p class="testi-item-user"><strong>Rani </strong>- Food Enthusiast</p>
                </article>
                <article tabindex="0" class="testi-item">
                    <p class="testi-item-description">Foodify membuat hidup saya lebih mudah. Sebagai penggemar kuliner, saya sering merasa kesulitan menemukan restoran yang baru dan unik. Namun, dengan Foodify, saya menemukan tempat-tempat yang luar biasa yang belum pernah saya kunjungi
                        sebelumnya.
                    </p>
                    <p class="testi-item-user"><strong>Maria </strong>- Traveler</p>
                </article>
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

    try {
      const restaurants = await RestaurantDbSource.listRestaurant();
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
        content.style.display = 'block';
        loading.style.display = 'none';
      });
    } catch (error) {
      content.style.display = 'block';
      loading.style.display = 'none';
      listContainer.innerHTML = `Error: ${error}, swipe up to refresh!`;
    }
  },
};

export default Home;
