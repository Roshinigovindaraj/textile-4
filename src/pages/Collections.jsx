import TrustBadges from '../components/TrustBadges';
import Footer from '../components/Footer';

const collections = [
  { name: 'BANARASI', count: '24 ITEMS', img: 'w1.png' },
  { name: 'KANCHIPURAM', count: '32 ITEMS', img: 'w2.png' },
  { name: 'TUSSAR', count: '18 ITEMS', img: 'w3.png' },
  { name: 'PAITHANI', count: '22 ITEMS', img: 'w4.png' },
  { name: 'CHANDERI', count: '16 ITEMS', img: 'w5.png' },
  { name: 'ORGANZA', count: '14 ITEMS', img: 'nn1.png' },
  { name: 'SOFT SILK', count: '20 ITEMS', img: 'nn2.png' },
  { name: 'PURE SILK', count: '28 ITEMS', img: 'nn3.png' },
];

const filters = ['Category', 'Fabric', 'Color', 'Price'];

export default function Collections() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[340px] md:h-96 pt-16 overflow-hidden">
        <img src="images/col1.png" alt="Collections" className="w-full h-full object-cover object-top" />
        <div className="absolute inset-0 bg-dark-charcoal/55"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-playfair text-4xl md:text-7xl font-bold text-white leading-tight">
            Our<br /><span className="text-rose italic">Collections</span>
          </h1>
          <p className="text-gray-200 mt-4 font-cormorant text-lg md:text-xl">
            Timeless weaves. Thoughtful curation.<br />For every moment, and every you.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="bg-white border-b border-gray-200 sticky top-16 md:top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-xs font-bold tracking-widest text-gray-400">FILTER BY</span>
            {filters.map(f => (
              <button key={f} className="flex items-center gap-1.5 border border-gray-200 px-3 py-1.5 text-xs font-semibold text-dark-charcoal hover:border-rose hover:text-rose transition-all duration-200">
                {f} <i className="fas fa-chevron-down text-[10px]"></i>
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold tracking-widest text-gray-400">SORT BY</span>
            <button className="flex items-center gap-1.5 border border-gray-200 px-3 py-1.5 text-xs font-semibold text-dark-charcoal hover:border-rose hover:text-rose transition-all duration-200">
              Featured <i className="fas fa-chevron-down text-[10px]"></i>
            </button>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 px-4 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {collections.map(col => (
              <div key={col.name} className="group cursor-pointer bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="overflow-hidden aspect-[3/4]">
                  <img
                    src={`images/${col.img}`}
                    alt={col.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center justify-between p-4">
                  <div>
                    <p className="text-sm font-bold tracking-widest text-dark-charcoal">{col.name}</p>
                    <p className="text-xs text-gray-400 tracking-wider mt-0.5">{col.count}</p>
                  </div>
                  <button className="w-9 h-9 rounded-full bg-dark-charcoal text-white flex items-center justify-center hover:bg-rose transition-colors duration-300">
                    <i className="fas fa-arrow-right text-sm"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TrustBadges />
      <Footer />
    </div>
  );
}
