import Link from 'next/link';
import { ShieldCheck, MapPin, Phone, Mail, Award } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ background: '#040d14', borderTop: '1px solid var(--border-glass-subtle)', padding: '60px 0 30px 0', marginTop: '100px' }}>
      <div className="container">
        <div className="grid-4" style={{ marginBottom: '40px' }}>
          <div>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '12px' }}>TechCash Eindhoven</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '16px' }}>
              Het #1 digitale inkoop- en verkoop platform voor gebruikte en refurbished laptops, iPhones, videokaarten en spelcomputers in Eindhoven.
            </p>
            <div className="badge badge-green" style={{ marginBottom: '8px' }}>
              <ShieldCheck size={14} /> Digitaal Opkopers Register (DOR) Gevalideerd
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: '1rem', color: 'var(--cyan)', marginBottom: '16px' }}>Snel naar</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem' }}>
              <li><Link href="/verkopen" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>MacBook Verkopen</Link></li>
              <li><Link href="/verkopen" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>iPhone & iPad Inleveren</Link></li>
              <li><Link href="/verkopen" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>NVIDIA RTX GPU Verkopen</Link></li>
              <li><Link href="/verkopen" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>PlayStation 5 Inruilen</Link></li>
              <li><Link href="/winkel" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Refurbished Webshop</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '1rem', color: 'var(--cyan)', marginBottom: '16px' }}>Locaties & Ophalen</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><MapPin size={16} color="var(--cyan)" /> Eindhoven Central Station Pickup</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><MapPin size={16} color="var(--cyan)" /> TU/e Campus Pick-Up Point</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><MapPin size={16} color="var(--cyan)" /> Strijp-S & High Tech Campus</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Award size={16} color="var(--green)" /> Landelijk per PostNL (Verzekerd)</li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '1rem', color: 'var(--cyan)', marginBottom: '16px' }}>Contact & Service</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              <a href="tel:+31685607432" style={{ color: 'var(--text-white)', fontWeight: 700, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Phone size={16} color="var(--cyan)" /> +31 6 85607432
              </a>
              <a href="mailto:hello@techcash.nl" style={{ color: 'var(--text-muted)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Mail size={16} color="var(--cyan)" /> hello@techcash.nl
              </a>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)', marginTop: '8px' }}>
                Direct uitbetaling via iDEAL / Tikkie of contant bij overdracht.
              </p>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--border-glass-subtle)', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', fontSize: '0.8rem', color: 'var(--text-dim)' }}>
          <p>© 2026 TechCash Eindhoven. Alle rechten voorbehouden.</p>
          <p>
            Realisatie: {' '}
            <a href="https://www.ribbsaetersystems.com" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(59, 224, 247, 0.8)', textDecoration: 'none', fontWeight: 600 }}>
              Ribbsaeter Systems
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}