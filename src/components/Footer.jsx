import { Link } from 'react-router-dom';

export default function Footer({ showNewsletter = false }) {
  return (
    <footer className="bg-dark-charcoal text-gray-300">
      {showNewsletter && (
        <div className="border-b border-white/10 py-10 px-4">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-xs tracking-[0.2em] text-rose uppercase mb-1">JOIN THE VĀYU CIRCLE</p>
              <h3 className="font-playfair text-2xl text-white">Get exclusive offers & new arrivals</h3>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 md:w-72 px-5 py-3 bg-white/10 border border-white/20 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-gold"
              />
              <button className="bg-rose text-white px-6 py-3 text-xs font-semibold tracking-widest hover:bg-gold transition-colors duration-300 whitespace-nowrap">
                SUBSCRIBE <i className="fas fa-arrow-right ml-2"></i>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Brand */}
        <div className="lg:col-span-2">
          <div className="mb-4">
            <span className="font-playfair text-2xl font-bold text-white tracking-widest block">VĀYU</span>
            <span className="text-[9px] tracking-[0.25em] text-gold font-semibold">SILK SAREES</span>
          </div>
          <p className="text-sm leading-relaxed text-gray-400 mb-6 max-w-xs">
            Celebrating India's weaving heritage through handcrafted silk sarees, made with love by master artisans across the country.
          </p>
          <div className="flex gap-3">
            {['instagram','facebook-f','pinterest-p','youtube'].map(s => (
              <a key={s} href="#" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-sm text-gray-300 hover:bg-rose hover:border-rose hover:text-white transition-all duration-300">
                <i className={`fab fa-${s}`}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xs font-semibold tracking-[0.2em] text-white mb-5">QUICK LINKS</h4>
          <ul className="space-y-3">
            {[['/', 'Shop All'], ['/collections', 'New Arrivals'], ['/collections', 'Collections'], ['#', 'Gift Cards'], ['/journal', 'Journal']].map(([to, label], i) => (
              <li key={i}>
                <Link to={to} className="text-sm text-gray-400 hover:text-rose transition-colors duration-200">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h4 className="text-xs font-semibold tracking-[0.2em] text-white mb-5">CATEGORIES</h4>
          <ul className="space-y-3">
            {['Banarasi Silk','Kanchipuram','Tussar Silk','Paithani','Chanderi','Organza'].map(c => (
              <li key={c}><a href="#" className="text-sm text-gray-400 hover:text-rose transition-colors duration-200">{c}</a></li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xs font-semibold tracking-[0.2em] text-white mb-5">CONTACT US</h4>
          <ul className="space-y-4">
            {[
              { icon: 'fa-map-marker-alt', text: '12, Weavers Lane, Varanasi, Uttar Pradesh — 221001' },
              { icon: 'fa-phone-alt', text: '+91 98765 43210' },
              { icon: 'fa-envelope', text: 'hello@vayusilk.com' },
              { icon: 'fa-clock', text: 'Mon – Sat: 10am – 7pm IST' },
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-sm text-gray-400">
                <i className={`fas ${item.icon} text-gold mt-0.5 shrink-0`}></i>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© 2025 VĀYU Silk Sarees. All rights reserved.</p>
          <div className="flex items-center gap-3">
            {['Privacy Policy', 'Terms of Use', 'Cookie Settings'].map((link, i) => (
              <span key={i} className="flex items-center gap-3">
                {i > 0 && <span>·</span>}
                <a href="#" className="hover:text-rose transition-colors duration-200">{link}</a>
              </span>
            ))}
          </div>
          <div className="flex gap-3 text-2xl text-gray-500">
            {['cc-visa','cc-mastercard','cc-paypal','cc-amex'].map(c => (
              <i key={c} className={`fab fa-${c}`}></i>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
