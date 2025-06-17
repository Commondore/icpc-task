import { ShoppingCart, Heart, Search, Leaf, Star, Shield, Truck } from "lucide-react";

const SeedraPage = () => {
  return (
    <div className="app">
      <div className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <Leaf className="logo-icon" />
              <span>SEEDRA</span>
            </div>
            <div className="nav">
              <div className="nav-link">ВСЕ ТОВАРЫ</div>
              <div className="nav-link">О SEEDRA</div>
              <div className="nav-link">БЛОГ</div>
              <div className="nav-link">КОНТАКТЫ</div>
            </div>
            <div className="header-actions">
              <button className="icon-btn">
                <Search size={20} />
              </button>
              <button className="icon-btn">
                <Heart size={20} />
              </button>
              <button className="icon-btn">
                <ShoppingCart size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h3>SEEDRA Семена базилика для выращивания дома и в саду</h3>
              <p>
                Убедитесь в нашем качестве - самые свежие партии этого сезона. Без ГМО, семейная
                реликвия - наши семена протестированы и имеют лучшие показатели всхожести. Ваш
                легкий опыт выращивания - наша гарантия.
              </p>

              <div className="price-section">
                <div className="price-badge">🔥</div>
                <span className="current-price">₽899</span>
                <span className="old-price">₽1,199</span>
              </div>

              <div className="hero-actions">
                <button className="btn-primary">В корзину</button>
                <button className="btn-secondary">Подробнее</button>
              </div>
            </div>

            <div className="hero-image">Картинка с семенами базилика</div>
          </div>
        </div>
      </div>

      <div className="features">
        <div className="container">
          <div className="features-header">
            <h2>Мы продаем семена</h2>
            <p>которые всегда прорастают, и садовые принадлежности, которые никогда не ломаются</p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <Shield size={40} />
              </div>
              <h3>Гарантия качества</h3>
              <p>Все наши семена проходят строгий контроль качества и имеют высокую всхожесть</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Truck size={40} />
              </div>
              <h3>Быстрая доставка</h3>
              <p>Доставляем по всей России в течение 2-5 рабочих дней</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Leaf size={40} />
              </div>
              <h3>Экологично</h3>
              <p>Только органические семена без ГМО и химических обработок</p>
            </div>
          </div>
        </div>
      </div>

      <div className="products-preview">
        <div className="container">
          <h2>Популярные товары</h2>
          <div className="products-grid">
            <div className="product-card">
              <div className="product-image-container">
                Картинка с семенами томатов
                <button className="favorite-btn">
                  <Heart size={20} />
                </button>
              </div>
              <div className="product-info">
                <h1 className="product-title">Семена томатов</h1>
                <div className="rating">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <span>(4.9)</span>
                </div>
                <div className="product-footer">
                  <div className="product-price">₽659</div>
                  <button className="add-to-cart-btn">
                    <ShoppingCart size={18} />
                  </button>
                </div>
              </div>
            </div>

            <div className="product-card">
              <div className="product-image-container">
                Картинка с семенами огурцов
                <button className="favorite-btn">
                  <Heart size={20} />
                </button>
              </div>
              <div className="product-info">
                <h1 className="product-title">Семена огурцов</h1>
                <div className="rating">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} />
                  <span>(4.7)</span>
                </div>
                <div className="product-footer">
                  <div className="product-price">₽549</div>
                  <button className="add-to-cart-btn">
                    <ShoppingCart size={18} />
                  </button>
                </div>
              </div>
            </div>

            <div className="product-card">
              <div className="product-image-container">
                Картинка с семенами моркови
                <button className="favorite-btn">
                  <Heart size={20} />
                </button>
              </div>
              <div className="product-info">
                <h1 className="product-title">Семена моркови</h1>
                <div className="rating">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <span>(5.0)</span>
                </div>
                <div className="product-footer">
                  <div className="product-price">₽449</div>
                  <button className="add-to-cart-btn">
                    <ShoppingCart size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeedraPage;
