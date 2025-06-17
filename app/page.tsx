import { Play, BookOpen, Users, Award, Clock, Star } from "lucide-react";

const OnlineLearningPage = () => {
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="nav">
            <div className="logo">
              <span className="logo-text">EduMaster</span>
            </div>
            <nav className="nav-links">
              <a href="#" className="nav-link">
                Home
              </a>
              <a href="#" className="nav-link">
                Courses
              </a>
              <a href="#" className="nav-link">
                About
              </a>
              <a href="#" className="nav-link">
                Contact
              </a>
            </nav>
            <button className="login-btn">Login</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Master New Skills with
                <span className="highlight"> Expert Instructors</span>
              </h1>
              <p className="hero-description">
                Join thousands of students learning from industry professionals. Access high-quality
                courses, interactive lessons, and personalized feedback.
              </p>
              <div className="hero-actions">
                <button className="cta-btn">
                  <Play className="btn-icon" />
                  Start Learning
                </button>
                <button className="secondary-btn">
                  <BookOpen className="btn-icon" />
                  Browse Courses
                </button>
              </div>
              <div className="hero-stats">
                <div className="stat">
                  <Users className="stat-icon" />
                  <span className="stat-number">50K+</span>
                  <span className="stat-label">Students</span>
                </div>
                <div className="stat">
                  <BookOpen className="stat-icon" />
                  <span className="stat-number">200+</span>
                  <span className="stat-label">Courses</span>
                </div>
                <div className="stat">
                  <Award className="stat-icon" />
                  <span className="stat-number">95%</span>
                  <span className="stat-label">Success Rate</span>
                </div>
              </div>
            </div>
            <div className="hero-image">
              <img src="/img/main.jpg" alt="Students learning online" className="hero-img" />
              <div className="floating-card">
                <Clock className="card-icon" />
                <div className="card-content">
                  <span className="card-title">Live Classes</span>
                  <span className="card-subtitle">Daily at 7 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-decoration"></div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose EduMaster?</h2>
            <p className="section-description">
              Experience the future of online education with our innovative platform
            </p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <Play />
              </div>
              <h3 className="feature-title">Interactive Video Lessons</h3>
              <p className="feature-description">
                Engage with high-quality video content featuring real-world examples and hands-on
                exercises.
              </p>
              <img src="/img/pic-1.avif" alt="Video lessons" className="feature-image" />
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Users />
              </div>
              <h3 className="feature-title">Expert Mentorship</h3>
              <p className="feature-description">
                Get personalized guidance from industry professionals and experienced instructors.
              </p>
              <img src="/img/pic-2.avif" alt="Mentorship" className="feature-image" />
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Award />
              </div>
              <h3 className="feature-title">Certified Programs</h3>
              <p className="feature-description">
                Earn recognized certifications that boost your career and validate your skills.
              </p>
              <img src="/img/pic-3.avif" alt="Certification" className="feature-image" />
            </div>
          </div>
        </div>
      </section>

      {/* Popular Courses Section */}
      <section className="courses">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Popular Courses</h2>
            <p className="section-description">
              Start your learning journey with our most loved courses
            </p>
          </div>
          <div className="courses-grid">
            <div className="course-card">
              <img src="/img/develop.avif" alt="Web Development" className="course-image" />
              <div className="course-content">
                <div className="course-category">Development</div>
                <h3 className="course-title">Complete Web Development Bootcamp</h3>
                <div className="course-rating">
                  <Star className="star-icon filled" />
                  <Star className="star-icon filled" />
                  <Star className="star-icon filled" />
                  <Star className="star-icon filled" />
                  <Star className="star-icon filled" />
                  <span className="rating-text">4.9 (2,340)</span>
                </div>
                <div className="course-meta">
                  <span className="course-duration">
                    <Clock className="meta-icon" />
                    12 weeks
                  </span>
                  <span className="course-students">
                    <Users className="meta-icon" />
                    5,200 students
                  </span>
                </div>
                <div className="course-price">$99</div>
              </div>
            </div>
            <div className="course-card">
              <img src="/img/data.avif" alt="Data Science" className="course-image" />
              <div className="course-content">
                <div className="course-category">Data Science</div>
                <h3 className="course-title">Python for Data Analysis</h3>
                <div className="course-rating">
                  <Star className="star-icon filled" />
                  <Star className="star-icon filled" />
                  <Star className="star-icon filled" />
                  <Star className="star-icon filled" />
                  <Star className="star-icon" />
                  <span className="rating-text">4.7 (1,890)</span>
                </div>
                <div className="course-meta">
                  <span className="course-duration">
                    <Clock className="meta-icon" />8 weeks
                  </span>
                  <span className="course-students">
                    <Users className="meta-icon" />
                    3,400 students
                  </span>
                </div>
                <div className="course-price">$79</div>
              </div>
            </div>
            <div className="course-card">
              <img src="/img/marketing.avif" alt="Digital Marketing" className="course-image" />
              <div className="course-content">
                <div className="course-category">Marketing</div>
                <h3 className="course-title">Digital Marketing Mastery</h3>
                <div className="course-rating">
                  <Star className="star-icon filled" />
                  <Star className="star-icon filled" />
                  <Star className="star-icon filled" />
                  <Star className="star-icon filled" />
                  <Star className="star-icon filled" />
                  <span className="rating-text">4.8 (3,120)</span>
                </div>
                <div className="course-meta">
                  <span className="course-duration">
                    <Clock className="meta-icon" />
                    10 weeks
                  </span>
                  <span className="course-students">
                    <Users className="meta-icon" />
                    7,800 students
                  </span>
                </div>
                <div className="course-price">$89</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OnlineLearningPage;
