import {
  Search,
  Heart,
  ExternalLink,
  Code,
  Palette,
  Facebook,
  Instagram,
  Twitter,
  Figma,
} from "lucide-react";

const DesignToolsLanding = () => {
  return (
    <div className="app">
      <div className="header">
        <div className="container">
          <div className="nav">
            <div className="logo">
              <div className="logo-icon">DT</div>
              <span className="logo-text">designtools.</span>
            </div>
            <div className="nav-links">
              <div className="nav-link">Home</div>
              <div className="nav-link">Categories</div>
              <div className="nav-link">My Collections</div>
              <div className="nav-link">Blog</div>
            </div>
            <div className="auth-buttons">
              <button className="btn-login">Login</button>
              <button className="btn-signup">Sign Up</button>
            </div>
          </div>
        </div>
      </div>

      <div className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h5 className="hero-title">
                Awesome tools for
                <br />
                Designer & <span className="highlight">Developer</span>.
              </h5>
              <p className="hero-description">
                DesignTool is a web collection of information on paid or
                <br />
                free Design and Development tools
              </p>
              <div className="search-bar">
                <div className="search-input-wrapper">
                  <Search className="search-icon" size={20} />
                  <input
                    type="text"
                    placeholder="find more than 430+ tools..."
                    className="search-input"
                  />
                </div>
                <button className="search-button">Search</button>
              </div>
              <div className="social-links">
                <Facebook size={20} />
                <Instagram size={20} />
                <Twitter size={20} />
              </div>
            </div>
            <div className="hero-image">Картинка</div>
          </div>
        </div>
      </div>

      <div className="popular-tools">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Most Popular Tools</h2>
            <p className="section-description">
              Tools for the best Designers and Developers
              <br />
              most popularly used in the world
            </p>
          </div>

          <div className="tools-grid">
            <div className="tool-card">
              <div className="tool-icon figma-icon">
                <Figma size={32} />
              </div>
              <div className="tool-info">
                <h3 className="tool-name">Figma</h3>
                <span className="tool-price free">Free</span>
                <p className="tool-description">
                  Collaborative interface design tool with real-time editing and prototyping
                  capabilities.
                </p>
                <div className="tool-actions">
                  <Heart className="action-icon" size={16} />
                  <ExternalLink className="action-icon" size={16} />
                  <button className="visit-btn">Visit</button>
                </div>
              </div>
            </div>

            <div className="tool-card">
              <div className="tool-icon sketch-icon">
                <Palette size={32} />
              </div>
              <div className="tool-info">
                <h3 className="tool-name">Sketch</h3>
                <span className="tool-price paid">Trial & Paid</span>
                <p className="tool-description">
                  Professional vector graphics app for designing user interfaces and digital
                  products.
                </p>
                <div className="tool-actions">
                  <Heart className="action-icon" size={16} />
                  <ExternalLink className="action-icon" size={16} />
                  <button className="visit-btn">Visit</button>
                </div>
              </div>
            </div>

            <div className="tool-card">
              <div className="tool-icon vscode-icon">
                <Code size={32} />
              </div>
              <div className="tool-info">
                <h3 className="tool-name">Visual Studio Code</h3>
                <span className="tool-price free">Free</span>
                <p className="tool-description">
                  Lightweight but powerful source code editor with built-in Git support and
                  extensions.
                </p>
                <div className="tool-actions">
                  <Heart className="action-icon" size={16} />
                  <ExternalLink className="action-icon" size={16} />
                  <button className="visit-btn">Visit</button>
                </div>
              </div>
            </div>
          </div>

          <button className="load-more-btn">Load more</button>
        </div>
      </div>
    </div>
  );
};

export default DesignToolsLanding;
