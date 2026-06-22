import TrustBadges from '../components/TrustBadges';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const articles = [
  { cat: 'SILK ORIGINS', title: 'Kanchipuram: Where Every Thread Tells a Temple Tale', desc: 'Discover the divine geometry woven into every Kanchipuram saree — patterns inspired by temple architecture and sacred motifs.', date: 'May 18, 2025', read: '6 min read', img: 'w1.png', tag: 'CULTURE' },
  { cat: 'STYLING GUIDE', title: 'How to Style a Tussar Silk Saree for a Modern Look', desc: 'Tussar\'s natural texture and earthy tones make it endlessly versatile. Here are five ways to wear it from morning to moonlight.', date: 'May 5, 2025', read: '5 min read', img: 'w3.png', tag: 'STYLE' },
  { cat: 'ARTISAN SPOTLIGHT', title: 'Chanderi\'s Weavers: Keeping a Mughal Era Craft Alive', desc: 'In the small town of Chanderi, families have woven the same patterns for 300 years. We spent a week with three master weavers.', date: 'Apr 22, 2025', read: '7 min read', img: 'w5.png', tag: 'CRAFT' },
  { cat: 'SEASONAL EDIT', title: 'Organza Sarees: The Season\'s Most Sought-After Weave', desc: 'Sheer, structured, and impossibly elegant — organza silk is having its moment. Here\'s why every wardrobe needs one.', date: 'Apr 10, 2025', read: '4 min read', img: 'nn1.png', tag: 'TRENDS' },
  { cat: 'WEAVE STORIES', title: 'Paithani\'s Peacock: The Icon That Never Goes Out of Style', desc: 'The Paithani peacock motif has graced sarees for over 2,000 years. We trace its journey from the Satavahana dynasty to today\'s runways.', date: 'Mar 28, 2025', read: '6 min read', img: 'w2.png', tag: 'HERITAGE' },
  { cat: 'CARE GUIDE', title: 'How to Store and Care for Your Silk Sarees the Right Way', desc: 'A silk saree can last a lifetime if treated well. Our complete guide to cleaning, storing, and preserving your most treasured pieces.', date: 'Mar 14, 2025', read: '5 min read', img: 'nn2.png', tag: 'CARE' },
];

const tagColors = {
  CULTURE: 'bg-purple-100 text-purple-700',
  STYLE: 'bg-rose-100 text-rose-700',
  CRAFT: 'bg-amber-100 text-amber-700',
  TRENDS: 'bg-blue-100 text-blue-700',
  HERITAGE: 'bg-green-100 text-green-700',
  CARE: 'bg-teal-100 text-teal-700',
  FEATURED: 'bg-gold/20 text-gold',
};

export default function Journal() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[340px] md:h-[480px] pt-16 overflow-hidden">
        <img src="images/jr.png" alt="Journal" className="w-full h-full object-cover object-top" />
        <div className="absolute inset-0 bg-dark-charcoal/55"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <p className="text-xs tracking-[0.25em] text-rose uppercase mb-3">STORIES & CRAFT</p>
          <h1 className="font-playfair text-4xl md:text-7xl font-bold text-white leading-tight">
            The VĀYU<br /><span className="text-gold italic">Journal</span>
          </h1>
          <p className="text-gray-200 mt-4 font-cormorant text-lg md:text-xl">Threads of culture, craft, and style.</p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 md:py-20 px-4 bg-cream">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="relative overflow-hidden rounded-lg group">
            <img src="images/mid6.png" alt="Featured Article" className="w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <span className={`absolute top-4 left-4 px-3 py-1 text-xs font-bold tracking-widest ${tagColors.FEATURED}`}>FEATURED</span>
          </div>
          <div>
            <p className="section-tag">WEAVE STORIES</p>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-dark-charcoal leading-snug mb-5">
              The Art of Banarasi: A 500-Year Old Legacy Still Being Woven Today
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              Walk through the narrow lanes of Varanasi and you'll hear the rhythmic clatter of looms — a sound that has defined this city for half a millennium. We sit down with three generations of weavers to understand what keeps this tradition alive.
            </p>
            <div className="flex items-center gap-5 text-xs text-gray-400 mb-7">
              <span><i className="fas fa-calendar-alt mr-2 text-gold"></i>June 2, 2025</span>
              <span><i className="fas fa-clock mr-2 text-gold"></i>8 min read</span>
            </div>
            <Link to="/journal" className="btn-primary">
              READ ARTICLE <i className="fas fa-arrow-right"></i>
            </Link>          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-tag">LATEST STORIES</p>
            <h2 className="section-title">From the <span className="text-gold">Journal</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map(art => (
              <article key={art.title} className="group border border-gray-100 hover:border-gold transition-all duration-300 hover:shadow-lg overflow-hidden">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img src={`images/${art.img}`} alt={art.title} className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                  <span className={`absolute top-4 left-4 px-3 py-1 text-xs font-bold tracking-widest ${tagColors[art.tag]}`}>{art.tag}</span>
                </div>
                <div className="p-6">
                  <p className="text-xs font-bold tracking-widest text-rose mb-2">{art.cat}</p>
                  <h3 className="font-playfair text-xl font-bold text-dark-charcoal mb-3 leading-snug group-hover:text-rose transition-colors duration-300">{art.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{art.desc}</p>
                  <div className="flex items-center justify-between text-xs text-gray-400 border-t border-gray-100 pt-4">
                    <div className="flex gap-4">
                      <span>{art.date}</span>
                      <span>{art.read}</span>
                    </div>
                    <Link
                      to="/journal"
                      className="text-xs font-bold tracking-widest text-dark-charcoal hover:text-rose transition-colors duration-200"
                    >
                      READ MORE <i className="fas fa-arrow-right ml-1"></i>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <TrustBadges />
      <Footer showNewsletter />
    </div>
  );
}
