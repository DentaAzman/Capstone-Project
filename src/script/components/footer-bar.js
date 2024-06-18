class FooterBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <footer class="text-center text-lg-start text-black">
        <div class="container p-4 pb-0">
          <section class="footer__content">
            <div class="row">
              <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h2 class="text-uppercase"><b><span>ECO</span>.TOUR</b></h2>
                <p>
                  ECO.TOUR merupakan website tentang informasi lengkap tentang
                  wisata populer yang ada di Bali, tidak hanya itu, himbauan
                  kepada wisatawan akan menjaga kelestarian lingkungan juga harus
                  diperhatikan. Nama website diambil dari kata
                  <i>Ecotourism</i> yang berarti perjalanan dan kegiatan wisata
                  yang dirancang untuk meminimalkan dampak negatif pada lingkungan
                  alam.
                </p>
              </div>
              <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                <h5 class="text-uppercase">Links</h5>
                <ul class="list-unstyled mb-0">
                  <li><a href="#/explore-canggu" class="text-black">Canggu</a></li>
                  <li><a href="#/explore-nusadua" class="text-black">Nusa Dua</a></li>
                  <li><a href="#/explore-seminyak" class="text-black">Seminyak</a></li>
                  <li><a href="#/explore-ubud" class="text-black">Ubud</a></li>
                  <li><a href="#/explore-kuta" class="text-black">Kuta</a></li>
                  <li><a href="#/explore-kintamani" class="text-black">Kintamani</a></li>
                </ul>
              </div>
              <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                <h5 class="text-uppercase">Links</h5>
                <ul class="list-unstyled mb-0">
                  <li><a href="#/explore" class="text-black">Explore</a></li>
                  <li><a href="#/community" class="text-black">Community</a></li>
                  <li><a href="#/about-us" class="text-black">About Us</a></li>
                </ul>
              </div>
            </div>
          </section>
          <hr class="mb-4" />
          <section class="mb-4 text-center footer__content">
            <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="fa fa-facebook-f"></i></a>
            <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="fa fa-twitter"></i></a>
            <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="fa fa-google"></i></a>
            <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="fa fa-instagram"></i></a>
            <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="fa fa-linkedin"></i></a>
            <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="fa fa-github"></i></a>
          </section>
        </div>
        <div class="text-center p-3" style="background-color: rgba(5, 107, 3, 0.2)">
          &copy; 2024 Copyright: ECO.TOUR
        </div>
      </footer>
    `;
  }
}

customElements.define('footer-bar', FooterBar);
