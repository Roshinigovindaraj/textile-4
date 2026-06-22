const badges = [
  { icon: 'fa-qrcode', title: 'AUTHENTIC WEAVES', desc: '100% genuine silk sarees from pure origins' },
  { icon: 'fa-hands', title: 'HANDWOVEN BY ARTISANS', desc: 'Crafted by skilled hands, celebrated for generations' },
  { icon: 'fa-shield-alt', title: 'SECURE & EASY PAYMENTS', desc: 'Safe transactions with multiple payment options' },
  { icon: 'fa-globe', title: 'WORLDWIDE DELIVERY', desc: 'Delivering elegance to your doorstep' },
];

export default function TrustBadges() {
  return (
    <section className="vayu-trust-badges">
      {badges.map((b) => (
        <div key={b.title} className="vayu-badge">
          <div className="vayu-badge-icon">
            <i className={`fas ${b.icon}`} />
          </div>
          <div className="vayu-badge-text">
            <p className="vayu-badge-title">{b.title}</p>
            <p className="vayu-badge-desc">{b.desc}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
