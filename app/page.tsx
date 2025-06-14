export default function Home() {
  return (
    <div className="pet-pharmacy">
      {/* Header */}
      <header className="header">
        <nav className="nav">
          <div className="logo">
            <h2>PetCare+</h2>
          </div>
          <ul className="nav-menu">
            <li>
              <a href="#services">Услуги</a>
            </li>
            <li>
              <a href="#about">О нас</a>
            </li>
            <li>
              <a href="#contact">Контакты</a>
            </li>
            <li>
              <a href="#shop">Магазин</a>
            </li>
          </ul>
          <button className="cta-button">Заказать</button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Ветеринарная аптека
              <br />
              которой доверяют
            </h1>
            <p className="hero-subtitle">
              Более 10 лет заботимся о здоровье ваших питомцев.
              <br />
              Качественные лекарства и профессиональные консультации.
            </p>
            <div className="hero-stats">
              <span className="rating">★★★★★ 4.9</span>
              <span className="reviews">на основе 2847 отзывов</span>
            </div>
            <button className="hero-cta">Получить консультацию</button>
          </div>
          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=500&h=400&fit=crop"
              alt="Ветеринар с собакой"
            />
          </div>
        </div>
        <div className="hero-decoration">
          <div className="decoration-item decoration-1"></div>
          <div className="decoration-item decoration-2"></div>
          <div className="decoration-item decoration-3"></div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission">
        <div className="container">
          <div className="mission-content">
            <div className="mission-image">
              <img
                src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=500&fit=crop"
                alt="Кот у ветеринара"
              />
            </div>
            <div className="mission-text">
              <h2>
                Мы создали аптеку,
                <br />о которой мечтали
                <br />
                все владельцы питомцев
              </h2>
              <p>
                Когда наш собственный питомец заболел, мы поняли, как сложно найти качественные
                лекарства и получить профессиональную консультацию. Именно тогда мы решили создать
                PetCare+ — место, где каждый питомец получает лучший уход.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <img
                  src="https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=80&h=80&fit=crop"
                  alt="Быстрая доставка"
                />
              </div>
              <h3>Питомцы — наш приоритет</h3>
              <p>
                Мы понимаем, как важно быстро получить помощь, когда питомец болен. Поэтому
                предлагаем доставку в день заказа по Москве и области. Ваш любимец не будет ждать.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <img
                  src="https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=80&h=80&fit=crop"
                  alt="Индивидуальный подход"
                />
              </div>
              <h3>Индивидуальный подход</h3>
              <p>
                Работаем с вами и вашим ветеринаром, чтобы найти оптимальное решение. Изготавливаем
                лекарства по индивидуальным рецептам, подбираем дозировку и форму выпуска. Даже вкус
                можем сделать привлекательным!
              </p>
              <small>P.S. Большинство собак обожают вкус курицы! 🐕</small>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <img
                  src="https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=80&h=80&fit=crop"
                  alt="Круглосуточная поддержка"
                />
              </div>
              <h3>Поддержка 24/7</h3>
              <p>
                Вы не останетесь один на один с проблемой. Звоните, пишите или приезжайте к нам — мы
                ответим и поможем в любое время. Немного солнечного настроения прилагается! ☀️
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Готовы позаботиться о здоровье питомца?</h2>
            <p>Получите бесплатную консультацию и узнайте, как мы можем помочь</p>
            <button className="cta-button-large">Начать сейчас</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>PetCare+</h3>
              <p>Забота о питомцах — наша страсть</p>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>Услуги</h4>
                <ul>
                  <li>
                    <a href="#">Лекарства</a>
                  </li>
                  <li>
                    <a href="#">Консультации</a>
                  </li>
                  <li>
                    <a href="#">Доставка</a>
                  </li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>Компания</h4>
                <ul>
                  <li>
                    <a href="#">О нас</a>
                  </li>
                  <li>
                    <a href="#">Контакты</a>
                  </li>
                  <li>
                    <a href="#">Отзывы</a>
                  </li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>Контакты</h4>
                <p>+7 (495) 123-45-67</p>
                <p>info@petcareplus.ru</p>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 PetCare+. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
