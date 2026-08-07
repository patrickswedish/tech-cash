import Link from 'next/link';
import BuybackCalculator from '@/components/BuybackCalculator';
import StoreCatalog from '@/components/StoreCatalog';
import { ShieldCheck, Zap, ArrowRight, RefreshCw, CheckCircle, MapPin, Truck, Award, DollarSign } from 'lucide-react';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section style={{ padding: '80px 0 60px 0', textAlign: 'center' }}>
        <div className="container">
          <div className="badge badge-cyan" style={{ marginBottom: '16px' }}>
            <Zap size={14} /> #1 Tech Buyback & Refurbished Store in Eindhoven
          </div>
          <h1 style={{ fontSize: '3rem', maxWidth: '900px', margin: '0 auto 20px auto', lineHeight: 1.15 }}>
            Direct <span style={{ color: 'var(--cyan)' }}>Cash voor je Tech</span>. Geen Gedoe op Marktplaats.
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', maxWidth: '680px', margin: '0 auto 36px auto' }}>
            Verkoop je gebruikte MacBook, iPhone, videokaart of console in 60 seconden online. Of koop gecertificeerd geteste apparatuur met 6 maanden garantie!
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '40px' }}>
            <Link href="/verkopen" className="btn btn-primary" style={{ padding: '16px 32px', fontSize: '1.05rem' }}>
              <DollarSign size={20} /> Direct Bod Berekenen
            </Link>
            <Link href="/winkel" className="btn btn-secondary" style={{ padding: '16px 32px', fontSize: '1.05rem' }}>
              Bekijk Refurbished Shop <ArrowRight size={18} />
            </Link>
          </div>

          {/* Key Trust Stats */}
          <div className="glass-panel-subtle" style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '20px', maxWidth: '840px', margin: '0 auto', flexWrap: 'wrap', gap: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <ShieldCheck size={20} color="var(--green)" />
              <span style={{ fontSize: '0.88rem', color: 'var(--text-muted)', fontWeight: 600 }}>DOR Geverifieerde Inkoop</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Zap size={20} color="var(--cyan)" />
              <span style={{ fontSize: '0.88rem', color: 'var(--text-muted)', fontWeight: 600 }}>Uitbetaling Binnen 1 Uur</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Award size={20} color="var(--green)" />
              <span style={{ fontSize: '0.88rem', color: 'var(--text-muted)', fontWeight: 600 }}>6 Maanden Garantie op Shop</span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Buyback Calculator Section */}
      <section style={{ padding: '40px 0 80px 0' }}>
        <div className="container">
          <BuybackCalculator />
        </div>
      </section>

      {/* 3-Step Process */}
      <section style={{ padding: '60px 0', background: 'rgba(255,255,255,0.02)', borderTop: '1px solid var(--border-glass-subtle)', borderBottom: '1px solid var(--border-glass-subtle)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <p className="eyebrow" style={{ color: 'var(--cyan)', fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase' }}>
              Eenvoudig & Transparant
            </p>
            <h2 style={{ fontSize: '2rem' }}>Hoe Werkt TechCash Eindhoven?</h2>
          </div>

          <div className="grid-3">
            <div className="glass-panel" style={{ padding: '28px', textAlign: 'center' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'rgba(59, 224, 247, 0.15)', color: 'var(--cyan)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto', fontSize: '1.4rem', fontWeight: 900 }}>
                1
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Bereken Je Bod</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                Selecteer je MacBook, iPhone, GPU of console. Onze AI berekent direct je gegarandeerde cash uitbetaling.
              </p>
            </div>

            <div className="glass-panel" style={{ padding: '28px', textAlign: 'center' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'rgba(16, 185, 129, 0.15)', color: 'var(--green)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto', fontSize: '1.4rem', fontWeight: 900 }}>
                2
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Inleveren of Opsturen</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                Geef je apparaat af bij ons trefpunt in Eindhoven (Station / TU/e / Strijp-S) of verstuur gratis per PostNL.
              </p>
            </div>

            <div className="glass-panel" style={{ padding: '28px', textAlign: 'center' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'rgba(59, 224, 247, 0.15)', color: 'var(--cyan)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto', fontSize: '1.4rem', fontWeight: 900 }}>
                3
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Direct Cash Ontvangen</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                Na een snelle 3-minuten hardware controle ontvang je direct contant geld of een Tikkie / iDEAL overboeking op je bank!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Refurbished Store Showcase Section */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div className="badge badge-green" style={{ marginBottom: '12px' }}>
              <CheckCircle size={14} /> 100% Gecertificeerd Getest
            </div>
            <h2 style={{ fontSize: '2.2rem' }}>Bekijk Onze Refurbished Deals</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: '600px', margin: '0 auto' }}>
              Koop gecontroleerde tweedehands MacBooks, videokaarten en consoles met 6 maanden garantie en 14-dagen bedenktijd.
            </p>
          </div>

          <StoreCatalog />
        </div>
      </section>
    </main>
  );
}