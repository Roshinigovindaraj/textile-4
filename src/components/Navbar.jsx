import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  const links = [
    { to: '/', label: 'Shop' },
    { to: '/collections', label: 'Collections' },
    { to: '/collections', label: 'New In' },
    { to: '/about', label: 'About Us' },
    { to: '/journal', label: 'Journal' },
  ];

  const isActive = (to) => location.pathname === to;

  return (
    <nav className={`vayu-navbar ${scrolled ? 'scrolled' : ''} ${isHome && !scrolled ? 'on-dark' : ''}`}>
      {/* Logo */}
      <Link to="/" className="vayu-nav-logo">
        <span className="vayu-logo-main">VĀYU</span>
        <span className="vayu-logo-sub">SILK SAREES</span>
      </Link>

      {/* Desktop Nav */}
      <ul className="vayu-nav-links">
        {links.map((l, i) => (
          <li key={i}>
            <Link
              to={l.to}
              className={`vayu-nav-link ${isActive(l.to) ? 'active' : ''}`}
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Icons */}
      <div className="vayu-nav-icons">
        <button><i className="fas fa-search" /></button>
        <button className="vayu-nav-user"><i className="fas fa-user" /></button>
        <div className="vayu-cart-icon">
          <i className="fas fa-shopping-bag" />
          <span className="vayu-cart-badge">2</span>
        </div>
        {/* Hamburger */}
        <button
          className="vayu-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`vayu-mobile-menu ${menuOpen ? 'open' : ''}`}>
        <ul>
          {links.map((l, i) => (
            <li key={i}>
              <Link
                to={l.to}
                className={`vayu-mobile-link ${isActive(l.to) ? 'active' : ''}`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
