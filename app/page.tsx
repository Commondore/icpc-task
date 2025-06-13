export default function Home() {
  return (
    <div className="app">
      <div className="header">
        <div className="header-content">
          <h1 className="logo">Screenshoter+</h1>
          <select className="language-select">
            <option value="ru">RU</option>
            <option value="en">EN</option>
          </select>
        </div>
      </div>

      <div className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h2 className="hero-title">Capture and Record Your Screen in One Click</h2>
            <p className="hero-description">
              With Screenshoter+, you can easily take screenshots or record your screen and share
              them instantly.
            </p>
            <button className="download-btn">Download for Free</button>
          </div>
          <div className="hero-image">
            <div className="placeholder-image">[Здесь должно быть изображение]</div>
          </div>
        </div>
      </div>

      <div className="features-section">
        <h2 className="features-title">Meet the Ultimate Screenshot and Recording Tool</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">[Icon]</div>
            <h3 className="feature-title">One-Click Capture</h3>
            <p className="feature-description">
              Quickly and easily take screenshots or record videos.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">[Icon]</div>
            <h3 className="feature-title">Instant Sharing</h3>
            <p className="feature-description">Share your files instantly with unique links.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">[Icon]</div>
            <h3 className="feature-title">Built-in Editor</h3>
            <p className="feature-description">Edit your screenshots directly in the app.</p>
          </div>
        </div>
      </div>

      <div className="footer">&copy; 2025 Screenshoter+. All rights reserved.</div>
    </div>
  );
}
