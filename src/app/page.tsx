import Link from 'next/link';
import BuybackCalculator from '@/components/BuybackCalculator';
import StoreCatalog from '@/components/StoreCatalog';
import { ShieldCheck, Zap, ArrowRight, CheckCircle, MapPin, Truck, Award, DollarSign, Sparkles, Laptop, Cpu, Smartphone, Gamepad2 } from 'lucide-react';

export default function Home() {
  return (
    <main style={{ position: 'relative' }}>
      <div className="grid-overlay" />

      {/* Hero Section with Interactive Visual Depth */}
      <section style={{ padding: '90px 0 70px 0', textAlign: 'center', position: 'relative' }}>
        <div className="container">
          <div className="badge badge-cyan" style={{ marginBottom: '20px' }}>
            <Sparkles size={14} /> #1 High-Tech Inkoop & Refurbished Platform
          </div>

          <h1 style={{ fontSize: '3.6rem', maxWidth: '980px', margin: '0 auto 24px auto', lineHeight: 1.12, fontWeight: 900 }}>
            Direct <span className="text-gradient-cyan">Cash Voor Je Tech</span>. <br />
            Geen Marktplaats Gedoe.
          </h1>

          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '720px', margin: '0 auto 40px auto', fontWeight: 500 }}>
            Verkoop je gebruikte MacBook Pro, iPhone, NVIDIA RTX videokaart of PlayStation 5 direct voor contant geld in Eindhoven. Of koop gecertificeerd geteste apparatuur met 6 maanden garantie!
          </p>

          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '50px' }}>
            <Link href="/verkopen" className="btn btn-primary">
              <DollarSign size={20} /> Direct Bod Aanvragen
            </Link>
            <Link href="/winkel" className="btn btn-secondary">
              Bekijk Refurbished Shop <ArrowRight size={18} />
            </Link>
          </div>

          {/* 3D Floating Tech Badges Visual Grid */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '50px' }}>
            {[
              { icon: <Laptop size={18} color="var(--cyan)" />, title: 'MacBook Pro M3 Pro', val: 'Direct Cash € 1.450,-' },
              { icon: <Cpu size={18} color="var(--green)" />, title: 'NVIDIA RTX 4090 24GB', val: 'Direct Cash € 1.400,-' },
              { icon: <Smartphone size={18} color="var(--cyan)" />, title: 'iPhone 15 Pro Max', val: 'Direct Cash € 850,-' },
              { icon: <Gamepad2 size={18} color="var(--green)" />, title: 'PlayStation 5 Slim', val: 'Direct Cash € 380,-' },
            ].map((chip, idx) => (
              <div
                key={idx}
                className="glass-panel floating-chip"
                style={{
                  padding: '12px 20px',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  animationDelay: `${idx * 0.4}s`,
                }}
              >
                {chip.icon}
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: 800 }}>{chip.title}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--green)', fontWeight: 700 }}>{chip.val}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Key Trust Stats Bar */}
          <div className="glass-panel" style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '24px', maxWidth: '900px', margin: '0 auto', flexWrap: 'wrap', gap: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <ShieldCheck size={24} color="var(--green)" />
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '0.9rem', fontWeight: 800 }}>DOR Geverifieerd</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>100% Eerlijke Inkoop (Anti-Heling)</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Zap size={24} color="var(--cyan)" />
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '0.9rem', fontWeight: 800 }}>Uitbetaling Binnen 1 Uur</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Contant of Tikkie / iDEAL</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Award size={24} color="var(--green)" />
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '0.9rem', fontWeight: 800 }}>6 Maanden Garantie</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Op Alle Webshop Producten</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Buyback Calculator Section */}
      <section style={{ padding: '40px 0 90px 0' }}>
        <div className="container">
          <BuybackCalculator />
        </div>
      </section>

      {/* 3-Step Process Infographic Section */}
      <section style={{ padding: '80px 0', background: 'rgba(255,255,255,0.015)', borderTop: '1px solid var(--border-glass-subtle)', borderBottom: '1px solid var(--border-glass-subtle)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <p style={{ color: 'var(--cyan)', fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Snelle 3-Stappen Workflow
            </p>
            <h2 style={{ fontSize: '2.4rem' }}>Hoe Werkt TechCash Eindhoven?</h2>
          </div>

          <div className="grid-3">
            <div className="glass-panel glass-panel-hover" style={{ padding: '36px', textAlign: 'center' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '20px', background: 'rgba(59, 224, 247, 0.15)', color: 'var(--cyan)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto', fontSize: '1.6rem', fontWeight: 900, border: '1px solid var(--border-glass)' }}>
                1
              </div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '12px' }}>Bereken Je Bod</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                Selecteer je model, specificaties en upload foto's. Onze AI analyseert de marktwaarde en berekent je gegarandeerde cash uitbetaling.
              </p>
            </div>

            <div className="glass-panel glass-panel-hover" style={{ padding: '36px', textAlign: 'center' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '20px', background: 'rgba(16, 185, 129, 0.15)', color: 'var(--green)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto', fontSize: '1.6rem', fontWeight: 900, border: '1px solid rgba(16,185,129,0.3)' }}>
                2
              </div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '12px' }}>Telefonisch Akkoord</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                Onze specialist bekijkt je aanvraag en bel/WhatsAppt je binnen 15 minuten voor een definitief bod en overdrachtsafspraak in Eindhoven.
              </p>
            </div>

            <div className="glass-panel glass-panel-hover" style={{ padding: '36px', textAlign: 'center' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '20px', background: 'rgba(59, 224, 247, 0.15)', color: 'var(--cyan)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto', fontSize: '1.6rem', fontWeight: 900, border: '1px solid var(--border-glass)' }}>
                3
              </div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '12px' }}>Direct Cash Ontvangen</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                Lever je apparaat af bij ons trefpunt in Eindhoven (Station / TU/e / Strijp-S) of stuur gratis op via PostNL. Cash of Tikkie direct uitbetaald!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Refurbished Store Showcase Section */}
      <section style={{ padding: '90px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <div className="badge badge-green" style={{ marginBottom: '14px' }}>
              <CheckCircle size={14} /> 100% Gecertificeerd Getest
            </div>
            <h2 style={{ fontSize: '2.5rem' }}>Bekijk Onze Refurbished Deals</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', maxWidth: '640px', margin: '0 auto' }}>
              Koop gecontroleerde tweedehands MacBooks, videokaarten en consoles met 6 maanden garantie en 14-dagen bedenktijd.
            </p>
          </div>

          <StoreCatalog />
        </div>
      </section>
    </main>
  );
}