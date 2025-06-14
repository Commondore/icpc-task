import React from "react";
import { Coffee, Clock, Gift, Star, ArrowRight, Menu, Play } from "lucide-react";

export default function Home() {
  return (
    <div className="container">
      <div className="header">
        <div className="header-container">
          <div className="header-content">
            <div className="logo-container">
              <div className="logo-icon">
                <Coffee className="icon" />
                <div className="status-dot"></div>
              </div>
              <span className="logo-text">BrewPass</span>
            </div>

            <div className="desktop-nav">
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
            </div>

            <button className="mobile-menu-button">
              <Menu className="icon" />
            </button>
          </div>
        </div>
      </div>

      <div className="hero-section">
        <div className="hero-background"></div>
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-text">
              <div className="hero-badge">
                <span className="badge-dot"></span>
                Now available in 50+ cities
              </div>

              <h2 className="hero-title">
                Your coffee, <span className="highlight">delivered</span> in minutes
              </h2>

              <div className="hero-description">
                Skip the lines, earn rewards, and enjoy perfectly crafted coffee from your favorite
                local cafés. The future of coffee ordering is here.
              </div>

              <div className="hero-buttons">
                <button className="primary-button">
                  Get Started Now
                  <ArrowRight className="button-icon" />
                </button>
                <a className="secondary-button">
                  <Play className="button-icon-left" />
                  Watch Demo
                </a>
              </div>
            </div>

            <div className="hero-image-container">
              <div className="phone-wrapper">
                <div className="floating-bubble purple"></div>
                <div className="floating-bubble green"></div>
                <div className="floating-bubble orange"></div>

                <div className="phone-image"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="stats-section">
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
      </div>

      <section className="features-section">
        <div className="features-container">
          <div className="features-header">
            <h1 className="features-title">
              Why choose <span className="highlight">BrewPass</span>
            </h1>
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
                <h2 className="feature-title">Skip the Queue</h2>
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
                <h2 className="feature-title">Loyalty Rewards</h2>
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
                <h2 className="feature-title">Send Coffee</h2>
                <p className="feature-description">
                  Surprise friends and colleagues with their favorite drinks delivered instantly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-overlay"></div>
        <div className="cta-container">
          <h1 className="cta-title">Ready to transform your coffee experience?</h1>
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

      <div className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-logo">
              <div className="footer-logo-icon">
                <Coffee className="icon" />
              </div>
              <span className="footer-logo-text">BrewPass</span>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 BrewPass. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
