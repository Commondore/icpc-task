export default function Home() {
  return (
    <div className="page-container">
      {/* Header Section */}
      <div className="header">
        <div className="navbar">
          <div className="logo">
            <span className="logo-icon">🌏</span>
            <span className="logo-text">EXPLORE INDONESIA</span>
          </div>
          <div className="nav-menu">
            <div>
              <a href="#destinations">DESTINATIONS</a>
            </div>
            <div>
              <a href="#experiences">EXPERIENCES</a>
            </div>
            <div>
              <a href="#about">ABOUT</a>
            </div>
            <div>
              <a href="#gallery">GALLERY</a>
            </div>
          </div>
          <div className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="hero">
        <div className="hero-background">Карта Индонезии с яркими цветами и текстурой</div>
        <div className="hero-content">
          <h1 className="hero-title">
            EXPLORE
            <br />
            INDONESIA
          </h1>
          <button className="cta-button">Start travelling</button>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <span className="feature-number">01</span>
            <h3 className="feature-card-title">Amazing Temples</h3>
            <p>Discover ancient temples and rich cultural heritage across the archipelago</p>
          </div>
          <div className="feature-card">
            <span className="feature-number">02</span>
            <h3 className="feature-card-title">Pristine Beaches</h3>
            <p>Relax on world-class beaches with crystal clear waters and white sand</p>
          </div>
          <div className="feature-card">
            <span className="feature-number">03</span>
            <h3 className="feature-card-title">Jungle Adventures</h3>
            <p>Experience wildlife and nature in some of the world oldest rainforests</p>
          </div>
        </div>
      </div>

      {/* Walkways Section */}
      <div className="post-section walkways-section">
        <div className="section-container">
          <div className="content-row">
            <div className="image-column">Картинка деревянных дорожек в джунглях Индонезии</div>
            <div className="text-column">
              <h2 className="section-title">The walkways of Indonesia spellbind</h2>
              <p className="section-description">
                Journey through breathtaking landscapes on wooden pathways that wind through
                pristine nature reserves, offering unforgettable views of Indonesia diverse
                ecosystems and stunning natural beauty.
              </p>
              <button className="learn-more-button">Learn More</button>
            </div>
          </div>
        </div>
      </div>

      {/* Beaches Section */}
      <div className="post-section beaches-section">
        <div className="section-container">
          <div className="content-row">
            <div className="image-column">
              Картинка пляжа с пальмами и белым песком на фоне заката
            </div>
            <div className="text-column">
              <h2 className="section-title">Perfect beaches exude relaxation and fun</h2>
              <p className="section-description">
                Escape to paradise on Indonesia magnificent coastlines where turquoise waters meet
                golden sands, creating the perfect setting for both adventure and tranquility under
                swaying palm trees.
              </p>
              <button className="learn-more-button">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
