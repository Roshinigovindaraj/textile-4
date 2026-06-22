import { Link } from 'react-router-dom';
import TrustBadges from '../components/TrustBadges';
import Footer from '../components/Footer';

const values = [
  { icon: 'fa-hands', title: 'Artisan First', desc: 'Every saree is handwoven by skilled craftspeople. We ensure fair wages and direct sourcing, keeping the artisan at the heart of everything.' },
  { icon: 'fa-leaf', title: 'Sustainable Craft', desc: 'We champion natural dyes, eco-conscious packaging, and sustainable practices that honour both tradition and the planet.' },
  { icon: 'fa-certificate', title: 'Uncompromising Quality', desc: 'Each piece passes a rigorous quality check before it reaches you — inspected for weave integrity, colour fastness, and finish.' },
  { icon: 'fa-heart', title: 'Made to Be Cherished', desc: 'We curate sarees meant to be worn, gifted, and treasured — pieces that outlast trends and become heirlooms.' },
];

const stats = [
  { num: '12+', label: 'Years of Heritage' },
  { num: '500+', label: 'Artisan Families' },
  { num: '8', label: 'Weave Traditions' },
  { num: '40+', label: 'Countries Delivered' },
];

const team = [
  { name: 'Ananya Sharma', role: 'Founder & Creative Director', img: 'w1.png' },
  { name: 'Priya Menon', role: 'Head of Curation', img: 'w2.png' },
  { name: 'Ritu Bose', role: 'Artisan Relations Lead', img: 'w3.png' },
  { name: 'Kavya Nair', role: 'Brand & Storytelling', img: 'w4.png' },
];

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[340px] md:h-[500px] pt-16 overflow-hidden">
        <img src="images/abt.png" alt="About VAYU" className="w-full h-full object-cover object-top" />
        <div className="absolute inset-0 bg-dark-charcoal/55"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <p className="text-xs tracking-[0.25em] text-rose uppercase mb-3">OUR STORY</p>
          <h1 className="font-playfair text-4xl md:text-7xl font-bold text-white leading-tight">
            Woven with<br /><span className="text-rose italic">Purpose</span>
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-4 bg-cream">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-tag">WHO WE ARE</p>
            <h2 className="section-title mb-6">A Legacy of <span className="text-gold">Silk & Soul</span></h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              VĀYU was born from a deep reverence for India's centuries-old weaving traditions. We believe that every saree is more than fabric — it is a story, a ritual, a piece of living art passed down through generations of master weavers.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Our name, VĀYU — the Sanskrit word for wind — captures the effortless grace with which our sarees drape, move, and breathe. Each piece in our collection is handpicked directly from artisan clusters across India, ensuring authenticity and fair trade at every step.
            </p>
            <Link to="/collections" className="btn-primary">
              EXPLORE OUR COLLECTIONS <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
          <div className="overflow-hidden rounded-lg">
            <img src="images/mid5.png" alt="Artisan weaving" className="w-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-tag">WHAT DRIVES US</p>
            <h2 className="section-title">Our <span className="text-gold">Core Values</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map(v => (
              <div key={v.title} className="text-center p-8 border border-gray-100 hover:border-gold hover:shadow-lg transition-all duration-300 group">
                <div className="w-14 h-14 rounded-full border-2 border-gold flex items-center justify-center text-gold text-xl mx-auto mb-5 group-hover:bg-gold group-hover:text-white transition-all duration-300">
                  <i className={`fas ${v.icon}`}></i>
                </div>
                <h3 className="font-playfair text-lg font-bold text-dark-charcoal mb-3">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-4 bg-dark-charcoal">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map(s => (
            <div key={s.label}>
              <p className="font-playfair text-5xl md:text-6xl font-bold text-gold mb-2">{s.num}</p>
              <p className="text-xs tracking-widest text-gray-300 uppercase">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-tag">THE PEOPLE</p>
            <h2 className="section-title">Faces Behind <span className="text-gold">VĀYU</span></h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {team.map(t => (
              <div key={t.name} className="text-center group">
                <div className="overflow-hidden rounded-t-[100px] rounded-b-lg aspect-[3/4] mb-4 bg-gray-100">
                  <img src={`images/${t.img}`} alt={t.name} className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                </div>
                <h4 className="font-playfair text-lg font-bold text-dark-charcoal">{t.name}</h4>
                <p className="text-xs text-gray-500 tracking-wider mt-1">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TrustBadges />
      <Footer showNewsletter />
    </div>
  );
}
