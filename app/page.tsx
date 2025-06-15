export default function Home() {
  return (
    <div className="page-container">
      {/* Header Section */}
      <header className="header">
        <nav className="navbar">
          <div className="logo">
            <span className="logo-icon">🌏</span>
            <span className="logo-text">EXPLORE INDONESIA</span>
          </div>
          <ul className="nav-menu">
            <li>
              <a href="#destinations">DESTINATIONS</a>
            </li>
            <li>
              <a href="#experiences">EXPERIENCES</a>
            </li>
            <li>
              <a href="#about">ABOUT</a>
            </li>
            <li>
              <a href="#gallery">GALLERY</a>
            </li>
          </ul>
          <div className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <img src="/img/main.jpg" alt="Indonesian landscape" className="hero-image" />
        </div>
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
            <h3>Amazing Temples</h3>
            <p>Discover ancient temples and rich cultural heritage across the archipelago</p>
          </div>
          <div className="feature-card">
            <span className="feature-number">02</span>
            <h3>Pristine Beaches</h3>
            <p>Relax on world-class beaches with crystal clear waters and white sand</p>
          </div>
          <div className="feature-card">
            <span className="feature-number">03</span>
            <h3>Jungle Adventures</h3>
            <p>Experience wildlife and nature in some of the world oldest rainforests</p>
          </div>
        </div>
      </section>

      {/* Walkways Section */}
      <section className="post-section walkways-section">
        <div className="section-container">
          <div className="content-row">
            <div className="image-column">
              <img
                src="/img/pic-1.jpg"
                alt="Wooden walkway in Indonesian nature"
                className="section-image"
              />
            </div>
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
      </section>

      {/* Beaches Section */}
      <section className="post-section beaches-section">
        <div className="section-container">
          <div className="content-row reverse">
            <div className="text-column">
              <h2 className="section-title">Perfect beaches exude relaxation and fun</h2>
              <p className="section-description">
                Escape to paradise on Indonesia magnificent coastlines where turquoise waters meet
                golden sands, creating the perfect setting for both adventure and tranquility under
                swaying palm trees.
              </p>
              <button className="learn-more-button">Learn More</button>
            </div>
            <div className="image-column">
              <img
                src="/img/pic-2.jpg"
                alt="Tropical beach in Indonesia"
                className="section-image"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
