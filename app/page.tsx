import { Play, Search, Bell, ChevronLeft, ChevronRight } from "lucide-react";

const StreamingPage = () => {
  return (
    <div className="streaming-page">
      <div className="header">
        <div className="container">
          <div className="nav-brand">
            <div className="logo">
              <Play className="logo-icon" />
              <span className="logo-text">StreamVibe</span>
            </div>
          </div>

          <div className="nav-menu">
            <a href="#" className="nav-link active">
              Home
            </a>
            <a href="#" className="nav-link">
              Movies & Shows
            </a>
            <a href="#" className="nav-link">
              Support
            </a>
            <a href="#" className="nav-link">
              Subscriptions
            </a>
          </div>

          <div className="nav-actions">
            <button className="icon-btn">
              <Search size={20} />
            </button>
            <button className="icon-btn">
              <Bell size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="hero">
        <div className="hero-background">
          <div className="movie-grid">
            <div className="movie-card">
              <img src="/img/film-1.jpeg" alt="Movie 1" />
            </div>
            <div className="movie-card">
              <img src="/img/film-2.jpeg" alt="Movie 2" />
            </div>
            <div className="movie-card">
              <img src="/img/film-3.jpeg" alt="Movie 3" />
            </div>
            <div className="movie-card">
              <img src="/img/film-4.jpeg" alt="Movie 4" />
            </div>
            <div className="movie-card">
              <img src="/img/film-5.jpeg" alt="Movie 5" />
            </div>
            <div className="movie-card">
              <img src="/img/film-6.jpeg" alt="Movie 6" />
            </div>
            <div className="movie-card">
              <img src="/img/film-7.jpeg" alt="Movie 7" />
            </div>
            <div className="movie-card">
              <img src="/img/film-8.jpeg" alt="Movie 8" />
            </div>
            <div className="movie-card">
              <img src="/img/film-9.jpeg" alt="Movie 9" />
            </div>
            <div className="movie-card">
              <img src="/img/film-10.jpeg" alt="Movie 10" />
            </div>
            <div className="movie-card">
              <img src="/img/film-11.jpeg" alt="Movie 11" />
            </div>
            <div className="movie-card">
              <img src="/img/film-12.jpeg" alt="Movie 12" />
            </div>
          </div>
          <div className="hero-overlay"></div>
        </div>

        <div className="hero-content">
          <div className="play-button-large">
            <Play size={60} />
          </div>
          <h1 className="hero-title">The Best Streaming Experience</h1>
          <p className="hero-description">
            StreamVibe is the best streaming experience for watching your favorite movies and shows
            on demand, anytime, anywhere. With StreamVibe, you can enjoy a wide variety of content,
            including the latest blockbusters, classic movies, popular TV shows, and more. You can
            also create your own watchlists, so you can easily find the content you want to watch.
          </p>
          <button className="cta-button">
            <Play size={20} />
            Start Watching Now
          </button>
        </div>
      </div>

      <div className="categories">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Explore our wide variety of categories</h2>
            <p className="section-description">
              Whether you are looking for a comedy to make you laugh, a drama to make you think, or
              a documentary to learn something new
            </p>
            <div className="section-controls">
              <button className="control-btn">
                <ChevronLeft size={20} />
              </button>
              <div className="pagination-dots">
                <span className="dot active"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
              <button className="control-btn">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div className="categories-grid">
            <div className="category-card">
              <div className="category-images">
                <img src="/img/film-1.jpeg" alt="Action 1" />
                <img src="/img/film-2.jpeg" alt="Action 2" />
                <img src="/img/film-3.jpeg" alt="Action 3" />
                <img src="/img/film-4.jpeg" alt="Action 4" />
              </div>
              <div className="category-info">
                <h1 className="category-title">Action</h1>
                <ChevronRight className="category-arrow" />
              </div>
            </div>

            <div className="category-card">
              <div className="category-images">
                <img src="/img/film-5.jpeg" alt="Adventure 1" />
                <img src="/img/film-6.jpeg" alt="Adventure 2" />
                <img src="/img/film-7.jpeg" alt="Adventure 3" />
                <img src="/img/film-8.jpeg" alt="Adventure 4" />
              </div>
              <div className="category-info">
                <h1 className="category-title">Adventure</h1>
                <ChevronRight className="category-arrow" />
              </div>
            </div>

            <div className="category-card">
              <div className="category-images">
                <img src="/img/film-9.jpeg" alt="Comedy 1" />
                <img src="/img/film-10.jpeg" alt="Comedy 2" />
                <img src="/img/film-11.jpeg" alt="Comedy 3" />
                <img src="/img/film-12.jpeg" alt="Comedy 4" />
              </div>
              <div className="category-info">
                <h1 className="category-title">Comedy</h1>
                <ChevronRight className="category-arrow" />
              </div>
            </div>

            <div className="category-card">
              <div className="category-images">
                <img src="/img/film-13.jpeg" alt="Drama 1" />
                <img src="/img/film-14.jpeg" alt="Drama 2" />
                <img src="/img/film-15.jpeg" alt="Drama 3" />
                <img src="/img/film-16.jpeg" alt="Drama 4" />
              </div>
              <div className="category-info">
                <h1 className="category-title">Drama</h1>
                <ChevronRight className="category-arrow" />
              </div>
            </div>

            <div className="category-card">
              <div className="category-images">
                <img src="/img/film-17.jpeg" alt="Horror 1" />
                <img src="/img/film-18.jpeg" alt="Horror 2" />
                <img src="/img/film-19.jpeg" alt="Horror 3" />
                <img src="/img/film-20.jpeg" alt="Horror 4" />
              </div>
              <div className="category-info">
                <h1 className="category-title">Horror</h1>
                <ChevronRight className="category-arrow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StreamingPage;
