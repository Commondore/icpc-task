import { Phone, Mail, MapPin, Clock, Coffee, Users, Award } from "lucide-react";

const HomePage = () => {
  return (
    <div className="restaurant-layout">
      <div className="header">
        <div className="container">
          <div className="logo">
            <span className="logo-icon">F</span>
            <span className="logo-text">OODI</span>
          </div>
          <div className="nav">
            <a href="#home">Home</a>
            <a href="#menu">Menu</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
          <button className="reservation-btn">RESERVATION</button>
        </div>
      </div>

      <div className="hero">
        <div className="hero-overlay">
          <div className="container">
            <div className="hero-content">
              <p className="hero-subtitle">HELLO, NEW FRIEND</p>
              <h5 className="hero-title">RESERVE YOUR TABLE</h5>
              <div className="hero-buttons">
                <button className="btn btn-primary">BOOK A TABLE</button>
                <button className="btn btn-secondary">OUR MENU</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <p className="section-subtitle">ABOUT US</p>
              <h2 className="section-title">We Invite You to Visit Our Coffee House</h2>
              <p className="section-text">
                Lorem ipsum dolor sit amet consectetur. Dolor elit vitae nunc varius. Facilisis eget
                cras sit semper at enim. Turpis aliquet ut ac eu donec ut. Sagittis vestibulum at
                quis non massa tellus.
              </p>
              <button className="btn btn-primary">READ MORE</button>
            </div>
            <div className="about-image">Картинка с изображением кофе</div>
          </div>
        </div>
      </div>

      <div className="menu">
        <div className="container">
          <div className="menu-grid">
            <div className="menu-image">Картинка с изображением меню или кофе</div>
            <div className="menu-content">
              <p className="section-subtitle">COFFEE MENU</p>
              <h2 className="section-title">Quality Kava Beans</h2>
              <p className="section-text">
                Lorem ipsum dolor sit amet consectetur. Dolor elit vitae nunc varius. Facilisis eget
                cras sit semper at enim. Turpis aliquet ut ac eu donec ut. Sagittis vestibulum at
                quis non massa tellus.
              </p>
              <button className="btn btn-primary">READ MORE</button>
            </div>
          </div>
        </div>
      </div>

      <div className="features">
        <div className="container">
          <div className="features-header">
            <p className="section-subtitle">WHY CHOOSE US</p>
            <h2 className="section-title">Experience Excellence</h2>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <Coffee />
              </div>
              <h3>Premium Coffee</h3>
              <p>Fresh roasted beans from the finest plantations around the world</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Users />
              </div>
              <h3>Expert Team</h3>
              <p>Professional baristas with years of experience in coffee making</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Award />
              </div>
              <h3>Award Winning</h3>
              <p>Recognized for our exceptional quality and customer service</p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-section">
              <div className="logo">
                <span className="logo-icon">F</span>
                <span className="logo-text">OODI</span>
              </div>
              <p>Creating memorable dining experiences with passion and quality.</p>
            </div>
            <div className="footer-section">
              <h4>Contact Info</h4>
              <div className="contact-item">
                <Phone size={16} />
                <span>+1 234 567 8900</span>
              </div>
              <div className="contact-item">
                <Mail size={16} />
                <span>info@foodi.com</span>
              </div>
              <div className="contact-item">
                <MapPin size={16} />
                <span>123 Restaurant St, City</span>
              </div>
            </div>
            <div className="footer-section">
              <h4>Opening Hours</h4>
              <div className="contact-item">
                <Clock size={16} />
                <span>Mon-Fri: 8AM - 10PM</span>
              </div>
              <div className="contact-item">
                <Clock size={16} />
                <span>Sat-Sun: 9AM - 11PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
