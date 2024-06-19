const AboutUs = {
  async render() {
    return `
      <section id="about-us" class="about-us-container">
        <h2 data-aos="fade-up"><b>About Us</b></h2>
        <p class="welcome-text" data-aos="fade-up">Welcome to <strong>ECO.TOUR</strong></p>
        <p class="text-align" data-aos="fade-up">At ECO.TOUR, we are passionate about promoting sustainable tourism and showcasing the natural beauty of Bali. Our mission is to provide travelers with unforgettable experiences while ensuring that our environmental footprint is minimized. We believe that travel should not only be enjoyable but also responsible.</p>

        <h2 class="developer-title" data-aos="fade-up">Meet Our Developer Team</h2>
        <p class="developer-text" data-aos="fade-up">Our talented developer team powers ECO.TOUR, delivering a seamless and engaging user experience through their unique skills and expertise.</p>
        <div class="developer-team">
          <div class="developer-card" data-aos="fade-up" data-aos-delay="100">
            <img src="/images/foto-daffa.jpg" alt="Developer Photo 1" class="developer-photo"/>
            <h3>Ananda Rizky Daffana</h3>
            <p>Designer & Front-End Developer</p>
            <div class="developer-links">
              <a href="https://www.linkedin.com/in/rizky-daffa-b1894930b/" target="_blank" class="fa fa-linkedin"></a>
              <a href="https://www.instagram.com/rizkydaffa_?igsh=MXhkOHpxdnptOWx4Zw%3D%3D&utm_source=qr" target="_blank" class="fa fa-instagram"></a>
              <a href="https://github.com/rizkydaffa" target="_blank" class="fa fa-github"></a>
            </div>
          </div>
          <div class="developer-card" data-aos="fade-up" data-aos-delay="200">
            <img src="/images/foto-denta.jpeg" alt="Developer Photo 2" class="developer-photo"/>
            <h3>Denta Nurol Azman</h3>
            <p>Designer & Front-End Developer</p>
            <div class="developer-links">
              <a href="https://www.linkedin.com/in/denta-nurol-azman-23a6bb2b4/" target="_blank" class="fa fa-linkedin"></a>
              <a href="https://www.instagram.com/denta.azman?igsh=cjF1aXFkZWJleHd0" target="_blank" class="fa fa-instagram"></a>
              <a href="https://github.com/DentaAzman" target="_blank" class="fa fa-github"></a>
            </div>
          </div>
          <div class="developer-card" data-aos="fade-up" data-aos-delay="300">
            <img src="path-to-photo3.jpg" alt="Developer Photo 3" class="developer-photo"/>
            <h3>Ridhwan Tsalasah Putra</h3>
            <p>Designer & Back-End Developer</p>
            <div class="developer-links">
              <a href="https://www.linkedin.com/in/developer3" target="_blank" class="fa fa-linkedin"></a>
              <a href="https://www.instagram.com/developer3" target="_blank" class="fa fa-instagram"></a>
              <a href="https://github.com/developer3" target="_blank" class="fa fa-github"></a>
            </div>
          </div>
        </div>

        <h2 class="developer-title" data-aos="fade-up">Team Advisor</h2>
        <p class="developer-text text-align" data-aos="fade-up">Our Front-End advisors provide invaluable guidance to our project team. Their expertise helps us enhance our technical skills and strategic approach, ensuring the success and excellence of our development efforts.</p>
        <div class="developer-team">
          <div class="developer-card" data-aos="fade-up">
            <img src="/images/foto-advisor.jpg" alt="Advisor Photo" class="developer-photo"/>
            <h3>Muhammad Fauzan Amzar</h3>
            <p>Front-End Advisor</p>
            <div class="developer-links">
              <a href="https://www.linkedin.com/in/mfauzanamzar/" target="_blank" class="fa fa-linkedin"></a>
              <a href="https://www.instagram.com/mfauzanamzar/" target="_blank" class="fa fa-instagram"></a>
              <a href="https://github.com/mfauzanamzar" target="_blank" class="fa fa-github"></a>
            </div>
          </div>
        </div>

        <h2 data-aos="fade-up">Our Story</h2>
        <p class="text-align" data-aos="fade-up">ECO.TOUR was founded by a group of travel enthusiasts who share a deep love for nature and a commitment to preserving it. We noticed a growing demand for eco-friendly travel options and decided to create a platform that highlights the most stunning and Instagrammable destinations in Bali. Our goal is to inspire travelers to explore Bali's hidden gems while respecting and protecting the environment.</p>

        <button id="read-more-btn" data-aos="fade-up">Read More</button>
        <div id="more-content" style="display: none;">
            <h2>What We Offer</h2>
            <ul>
                <li><strong>Curated Destinations:</strong> Discover the most breathtaking spots in Bali, carefully selected for their natural beauty and photogenic appeal.</li>
                <li><strong>Sustainable Practices:</strong> Learn about eco-friendly travel tips and practices to ensure that your adventures have a positive impact on the environment.</li>
                <li><strong>Community Engagement:</strong> Join our community of like-minded travelers who share your passion for sustainable tourism and love for Bali.</li>
                <li><strong>Expert Guides:</strong> Benefit from the knowledge of our experienced guides who can provide insights and recommendations for your trip.</li>
            </ul>
            <h2>Our Commitment</h2>
            <p class="text-align">ECO.TOUR is dedicated to promoting sustainable tourism practices. We collaborate with local communities and environmental organizations to support conservation efforts and ensure that our tours benefit the local economy. By choosing ECO.TOUR, you are contributing to the preservation of Bali's natural wonders for future generations to enjoy.</p>
            <h2>Join Us</h2>
            <p class="text-align">Embark on a journey with ECO.TOUR and discover the magic of Bali in a way that respects and honors nature. Whether you're seeking adventure, relaxation, or the perfect photo, we are here to help you create lasting memories.</p>
            <p>Thank you for choosing ECO.TOUR. Together, we can make a difference.</p>
        </div>
      </section>
    `;
  },

  async afterRender() {
    const readMoreBtn = document.getElementById('read-more-btn');
    const moreContent = document.getElementById('more-content');

    readMoreBtn.addEventListener('click', () => {
      if (
        moreContent.style.display === 'none' ||
        moreContent.style.display === ''
      ) {
        moreContent.style.display = 'block';
        readMoreBtn.textContent = 'Read Less';
      } else {
        moreContent.style.display = 'none';
        readMoreBtn.textContent = 'Read More';
      }
    });

    AOS.init({
      once: true,
      duration: 1000,
    });
    AOS.refresh();
  },
};

export default AboutUs;
