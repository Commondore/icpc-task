import React from "react";
import { Coffee, Clock, Gift, Star, ArrowRight, Menu, Play } from "lucide-react";

export default function Home() {
  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <div className="header-container">
          <div className="header-content">
            <div className="logo-container">
              <div className="logo-icon">
                <Coffee className="icon" />
                <div className="status-dot"></div>
              </div>
              <span className="logo-text">BrewPass</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="desktop-nav">
              <a href="#" className="nav-link">
                Cafés
              </a>
              <a href="#" className="nav-link">
                How it Works
              </a>
              <a href="#" className="nav-link">
                Support
              </a>
              <button className="download-button">Download App</button>
            </nav>

            {/* Mobile Menu Button */}
            <button className="mobile-menu-button">
              <Menu className="icon" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background"></div>
        <div className="hero-container">
          <div className="hero-content">
            {/* Left Content */}
            <div className="hero-text">
              <div className="hero-badge">
                <span className="badge-dot"></span>
                Now available in 50+ cities
              </div>

              <h1 className="hero-title">
                Your coffee, <span className="highlight">delivered</span> in minutes
              </h1>

              <p className="hero-description">
                Skip the lines, earn rewards, and enjoy perfectly crafted coffee from your favorite
                local cafés. The future of coffee ordering is here.
              </p>

              <div className="hero-buttons">
                <button className="primary-button">
                  Get Started Now
                  <ArrowRight className="button-icon" />
                </button>
                <button className="secondary-button">
                  <Play className="button-icon-left" />
                  Watch Demo
                </button>
              </div>
            </div>

            {/* Right Content - Phone Image */}
            <div className="hero-image-container">
              <div className="phone-wrapper">
                {/* Floating elements */}
                <div className="floating-bubble purple"></div>
                <div className="floating-bubble green"></div>
                <div className="floating-bubble orange"></div>

                {/* Phone Image */}
                <div className="phone-image">
                  <img src="/img/phone.png" alt="BrewPass Mobile App" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">50K+</div>
              <div className="stat-label">Happy Customers</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">200+</div>
              <div className="stat-label">Partner Cafés</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">1M+</div>
              <div className="stat-label">Orders Delivered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="features-container">
          <div className="features-header">
            <h2 className="features-title">
              Why choose <span className="highlight">BrewPass</span>
            </h2>
            <p className="features-description">
              {
                "We're revolutionizing how you experience coffee with cutting-edge technology and seamless user experience."
              }
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-card-inner">
                <div className="feature-icon orange">
                  <Clock className="icon" />
                </div>
                <h3 className="feature-title">Skip the Queue</h3>
                <p className="feature-description">
                  Order ahead and collect your coffee without waiting. Perfect for busy mornings.
                </p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-card-inner">
                <div className="feature-icon purple">
                  <Star className="icon" />
                </div>
                <h3 className="feature-title">Loyalty Rewards</h3>
                <p className="feature-description">
                  Earn points with every purchase and unlock exclusive drinks and discounts.
                </p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-card-inner">
                <div className="feature-icon green">
                  <Gift className="icon" />
                </div>
                <h3 className="feature-title">Send Coffee</h3>
                <p className="feature-description">
                  Surprise friends and colleagues with their favorite drinks delivered instantly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-overlay"></div>
        <div className="cta-container">
          <h2 className="cta-title">Ready to transform your coffee experience?</h2>
          <p className="cta-description">
            {
              "Join thousands of coffee lovers who've already made the switch to smarter coffee ordering."
            }
          </p>
          <div className="cta-buttons">
            <button className="cta-button-white">
              Download for iOS
              <ArrowRight className="button-icon" />
            </button>
            <button className="cta-button-outline">
              Download for Android
              <ArrowRight className="button-icon" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-logo">
              <div className="footer-logo-icon">
                <Coffee className="icon" />
              </div>
              <span className="footer-logo-text">BrewPass</span>
            </div>
            <div className="footer-links">
              <a href="#" className="footer-link">
                Privacy
              </a>
              <a href="#" className="footer-link">
                Terms
              </a>
              <a href="#" className="footer-link">
                Support
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 BrewPass. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
