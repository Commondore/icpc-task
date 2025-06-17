import React from "react";
import { Pizza, Smartphone, Star, MapPin, Clock, Users } from "lucide-react";

const FoodDeliveryPage = () => {
  return (
    <div className="food-delivery-page">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo">
            <Pizza className="logo-icon" />
            <span className="logo-text">FoodieDelivery</span>
          </div>
          <nav className="nav">
            <div className="nav-link">
              {" "}
              {/* Заменим a на div */}
              Restaurants
            </div>
            <div className="nav-link">Recipes</div>
            <div className="nav-link">About</div>
            <div className="nav-link">Contact</div>
          </nav>
          <div className="auth-buttons">
            <button className="login-btn">Login</button>
            <button className="signup-btn">Sign Up</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h3 className="hero-title">
                {" "}
                {/* Сломаем иерархию заголовков h1->h3 */}
                Your Favorite Food
                <br />
                Delivery Partner
              </h3>
              <p className="hero-description">
                The food at your doorstep. Why starve when you have us. Your hunger partner.
                Straight out of the oven to your doorstep.
              </p>
              <div className="hero-actions">
                <div className="location-input">
                  <MapPin className="input-icon" />
                  <input
                    type="text"
                    placeholder="Enter your delivery location"
                    className="location-field"
                  />
                </div>
                <button className="order-btn">Order Now</button>
              </div>
              <div className="app-downloads">
                <div className="download-btn">
                  <Smartphone className="download-icon" />
                  <div className="download-text">
                    <span className="download-label">Download on the</span>
                    <span className="download-store">App Store</span>
                  </div>
                </div>
                <div className="download-btn">
                  <Smartphone className="download-icon" />
                  <div className="download-text">
                    <span className="download-label">Get it on</span>
                    <span className="download-store">Google Play</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-image">
              <img
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Delivery person"
                className="hero-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="features-header">
            <h2 className="features-title">
              More Than <span className="highlight">10,000</span> Dishes
              <br />
              To Order!
            </h2>
            <p className="features-subtitle">
              Welcome to The Biggest Network of Food Ordering & Delivery
            </p>
          </div>

          <div className="categories">
            {" "}
            {/* Уберем семантику списка */}
            <div className="category-item">
              <div className="category-icon">
                <img src="/img/pizza.jpg" alt="Pizza" />
              </div>
              <h3 className="category-name">Pizza</h3>
            </div>
            <div className="category-item">
              <div className="category-icon">
                <img
                  src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                  alt="Burger"
                />
              </div>
              <h3 className="category-name">Burger</h3>
            </div>
            <div className="category-item">
              <div className="category-icon">
                <img
                  src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                  alt="Sushi"
                />
              </div>
              <h3 className="category-name">Sushi</h3>
            </div>
            <div className="category-item">
              <div className="category-icon">
                <img
                  src="https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                  alt="Pasta"
                />
              </div>
              <h3 className="category-name">Pasta</h3>
            </div>
            <div className="category-item">
              <div className="category-icon">
                <img
                  src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                  alt="Salad"
                />
              </div>
              <h3 className="category-name">Salad</h3>
            </div>
            <div className="category-item">
              <div className="category-icon">
                <img
                  src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                  alt="Desserts"
                />
              </div>
              <h3 className="category-name">Desserts</h3>
            </div>
          </div>

          <div className="delivery-info">
            <div className="delivery-text">
              <p className="delivery-description">
                Find <span className="text-orange">deals</span>,{" "}
                <span className="text-green">free delivery</span>, and more from our restaurant
                partners.
              </p>
            </div>
            <div className="delivery-illustration">
              <img
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                alt="Delivery scooter"
                className="delivery-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-content">
            <div className="testimonial">
              <p className="testimonial-text">
                Amazing service! The food arrived hot and fresh, exactly as ordered. The delivery
                was incredibly fast and the app is so easy to use. Definitely my go-to food delivery
                service!
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <img src="/img/avatar.jpg" alt="Customer" />
                </div>
                <div className="author-info">
                  <div className="author-name">Sarah Johnson</div>
                  <div className="author-rating">
                    <Star className="star-icon" />
                    <Star className="star-icon" />
                    <Star className="star-icon" />
                    <Star className="star-icon" />
                    <Star className="star-icon" />
                  </div>
                </div>
              </div>
            </div>

            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-icon">
                  <Users className="icon" />
                </div>
                <div className="stat-number">50K+</div>
                <div className="stat-label">Happy Customers</div>
              </div>
              <div className="stat-item">
                <div className="stat-icon">
                  <Clock className="icon" />
                </div>
                <div className="stat-number">15 min</div>
                <div className="stat-label">Average Delivery</div>
              </div>
              <div className="stat-item">
                <div className="stat-icon">
                  <Pizza className="icon" />
                </div>
                <div className="stat-number">500+</div>
                <div className="stat-label">Restaurant Partners</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FoodDeliveryPage;
