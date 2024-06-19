class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <a href="#mainContent" class="skip-link" tabindex="0">Skip To Content</a>
        <nav class="navbar navbar-expand-lg bg-primary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><span>ECO</span>.TOUR</a>
          <button
            id="hamburgerButton"
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav nav-underline">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/explore">Explore</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/community">Community</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/about-us">About Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
        `;
  }
}

customElements.define('app-bar', AppBar);
