import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import TrustBadges from '../components/TrustBadges';
import Footer from '../components/Footer';

const categories = [
  { name: 'BANARASI', img: 'w1.png' },
  { name: 'KANCHIPURAM', img: 'w2.png' },
  { name: 'TUSSAR', img: 'w3.png' },
  { name: 'PAITHANI', img: 'w4.png' },
  { name: 'CHANDERI', img: 'w5.png' },
];

const newArrivals = [
  { name: 'Mehraon Glow', price: '₹14,800', img: 'nn1.png' },
  { name: 'Golden Lotus', price: '₹16,500', img: 'nn2.png' },
  { name: 'Emerald Grace', price: '₹15,200', img: 'nn3.png' },
  { name: 'Midnight Blue', price: '₹13,900', img: 'nn4.png' },
];

export default function Home() {
  const [dot, setDot] = useState(0);
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);
  const catRef = useRef(null);
  const [catOffset, setCatOffset] = useState(0);
  const [sliderGlowing, setSliderGlowing] = useState(false);

  useEffect(() => {
    const t = setInterval(() => setDot(d => (d + 1) % 4), 3000);
    return () => clearInterval(t);
  }, []);

  const playVideo = () => {
    if (videoRef.current && !playing) {
      videoRef.current.play().catch(() => {
        // Ignore autoplay failures on unsupported browsers
      });
      setPlaying(true);
    }
  };

  const pauseVideo = () => {
    if (videoRef.current && playing) {
      videoRef.current.pause();
      setPlaying(false);
    }
  };

  const handleWatchStory = () => {
    if (playing) {
      pauseVideo();
    } else {
      playVideo();
    }
  };

  const slideCats = (dir) => {
    const cardW = 194; // 180px + 14px gap
    const max = (categories.length - 1) * cardW;
    setCatOffset(prev => {
      const next = prev + dir * cardW;
      if (next < 0) return 0;
      if (next > max) return max;
      return next;
    });
    setSliderGlowing(true);
    setTimeout(() => setSliderGlowing(false), 900);
  };

  return (
    <div className="overflow-x-hidden">

      {/* ===== HERO ===== */}
      <section
        className="vayu-hero"
        onMouseEnter={playVideo}
        onMouseLeave={pauseVideo}
      >
        {/* Dark gradient overlay */}
        <div className="vayu-hero-overlay" />

        {/* Background image + video */}
        <div className={`vayu-hero-image-wrap ${playing ? 'playing' : ''}`}>
          <video
            ref={videoRef}
            className="vayu-hero-video"
            muted
            loop
            playsInline
          >
            <source src="images/hero-vid.mp4" type="video/mp4" />
          </video>
          <img
            src="images/web4-hero.png"
            alt="Model in silk saree"
            className={`vayu-hero-img ${heroLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setHeroLoaded(true)}
          />
        </div>

        {/* Hero content - LEFT side */}
        <div className="vayu-hero-content">
          <p className="vayu-hero-label">WOVEN TO PERFECTION</p>
          <h1 className="vayu-hero-title">
            Timeless<br />
            <span className="vayu-hero-title-pink">Weaves</span>
          </h1>
          <p className="vayu-hero-desc">
            Discover the finest silk sarees,<br />
            crafted for every unforgettable you.
          </p>
          <Link to="/collections" className="vayu-btn-explore">
            EXPLORE COLLECTION <i className="fas fa-arrow-right" />
          </Link>
        </div>

        {/* Watch Story button */}
        <button className="vayu-watch-story" onClick={handleWatchStory}>
          <div className={`vayu-play-btn ${playing ? 'story-active' : ''}`}>
            <i className={`fas ${playing ? 'fa-pause' : 'fa-play'}`} />
          </div>
          <span>WATCH<br />OUR STORY</span>
        </button>

        {/* Slide indicators */}
        <div className="vayu-hero-slider-dots">
          <span className="vayu-dot-num active">01</span>
          <span className="vayu-dot-sep" />
          <span className="vayu-dot-num inactive">04</span>
          <div className="vayu-dots-line">
            {[0,1,2,3].map(i => (
              <span
                key={i}
                className={`vayu-line ${i === dot ? 'active' : ''}`}
                onClick={() => setDot(i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===== CATEGORIES ===== */}
      <section className="vayu-categories">
        <div className="vayu-category-label">
          <p className="vayu-explore-by">EXPLORE BY</p>
          <h2 className="vayu-category-title">CATEGORY</h2>
          <div className="vayu-ornament">✦</div>
        </div>

        <div className="vayu-category-slider-wrap">
          <button className="vayu-slider-btn prev" onClick={() => slideCats(-1)}>
            <i className="fas fa-chevron-left" />
          </button>
          <div className="vayu-category-cards" ref={catRef}>
            <div
              className="vayu-cards-inner"
              style={{ transform: `translateX(-${catOffset}px)` }}
            >
              {categories.map(cat => (
                <Link
                  key={cat.name}
                  to="/collections"
                  className={`vayu-cat-card ${sliderGlowing ? 'glow' : ''}`}
                >
                  <div className="vayu-cat-img-wrap arch">
                    <img src={`images/${cat.img}`} alt={cat.name} />
                  </div>
                  <p className="vayu-cat-name">{cat.name}</p>
                  <span className="vayu-view-all">VIEW ALL</span>
                </Link>
              ))}
            </div>
          </div>
          <button className="vayu-slider-btn next" onClick={() => slideCats(1)}>
            <i className="fas fa-chevron-right" />
          </button>
        </div>
      </section>

      {/* ===== FEATURED COLLECTION ===== */}
      <section className="vayu-featured">
        <div className="vayu-featured-left">
          <p className="vayu-feat-label">FEATURED COLLECTION ✦</p>
          <h2 className="vayu-feat-title">
            The Royal<br /><span className="vayu-feat-title-gold">Heritage</span>
          </h2>
          <p className="vayu-feat-desc">
            A tribute to India's rich legacy<br />woven in every thread.
          </p>
          <Link to="/collections" className="vayu-btn-shop">
            SHOP THE COLLECTION <i className="fas fa-arrow-right" />
          </Link>
        </div>

        <div className="vayu-featured-right">
          <Link to="/collections" className="vayu-featured-center">
            <img src="images/mid6.png" alt="Royal Heritage Saree" className="vayu-feat-img" />
            {/* Desktop overlay card — hidden on mobile via CSS */}
            <div className="vayu-featured-card vayu-feat-card-desktop">
              <div className="vayu-feat-card-icon">
                <i className="fas fa-spa" />
              </div>
              <h3>Pure Silk<br />Pure Luxury</h3>
              <p>Handpicked. Handwoven.<br />Heartfelt.</p>
              <span className="vayu-know-more">
                KNOW MORE <i className="fas fa-arrow-right" />
              </span>
            </div>
          </Link>
          {/* Mobile info bar — hidden on desktop via CSS */}
          <div className="vayu-feat-card-mobile">
            <div className="vayu-feat-card-icon">
              <i className="fas fa-spa" />
            </div>
            <div className="vayu-feat-card-mobile-text">
              <h3>Pure Silk &middot; Pure Luxury</h3>
              <p>Handpicked. Handwoven. Heartfelt.</p>
              <Link to="/collections" className="vayu-know-more">
                KNOW MORE <i className="fas fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== NEW ARRIVALS ===== */}
      <section className="vayu-new-arrivals">
        <div className="vayu-arrivals-left">
          <p className="vayu-arrivals-tag">NEW ARRIVALS</p>
          <h2 className="vayu-arrivals-title">Fresh Threads,<br />New Stories</h2>
          <Link to="/collections" className="vayu-btn-shop-now">
            SHOP NOW <i className="fas fa-arrow-right" />
          </Link>
        </div>

        <div className="vayu-arrivals-grid">
          {newArrivals.map(p => (
            <Link key={p.name} to="/collections" className="vayu-product-card">
              <div className="vayu-product-img-wrap">
                <img src={`images/${p.img}`} alt={p.name} />
                <button
                  className="vayu-wishlist-btn"
                  onClick={e => e.preventDefault()}
                >
                  <i className="far fa-heart" />
                </button>
              </div>
              <p className="vayu-product-name">{p.name}</p>
              <p className="vayu-product-price">{p.price}</p>
            </Link>
          ))}
        </div>
      </section>

      <TrustBadges />
      <Footer />
    </div>
  );
}
