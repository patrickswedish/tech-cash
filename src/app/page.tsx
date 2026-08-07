import Link from 'next/link';
import BuybackCalculator from '@/components/BuybackCalculator';
import StoreCatalog from '@/components/StoreCatalog';
import { ShieldCheck, Zap, ArrowRight, CheckCircle, MapPin, Truck, Award, DollarSign, Sparkles, Laptop, Cpu, Smartphone, Gamepad2, Banknote, Flame, Tag } from 'lucide-react';

export default function Home() {
  return (
    <main style={{ position: 'relative' }}>
      {/* Hero Section - High Conversion Commercial Money Theme */}
      <section style={{ padding: '60px 0 50px 0', textAlign: 'center', background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container">
          <div className="badge badge-red" style={{ marginBottom: '18px' }}>
            <Flame size={14} /> SNELSTE CASH UITBETALING VAN EINDHOVEN
          </div>

          <h1 style={{ fontSize: '3.6rem', maxWidth: '1000px', margin: '0 auto 20px auto', lineHeight: 1.1, fontWeight: 900, color: '#0f172a', letterSpacing: '-0.03em' }}>
            ONTVANG DIRECT <span style={{ color: '#dc2626' }}>CASH VOOR JE TECH</span>. <br />
            GEEN GEDOE OP MARKTPLAATS.
          </h1>

          <p style={{ color: '#475569', fontSize: '1.25rem', maxWidth: '760px', margin: '0 auto 36px auto', fontWeight: 600 }}>
            Verkoop je gebruikte MacBook, iPhone, videokaart of spelcomputer in 60 seconden online. <br />
            <strong>Binnen 1 uur geld op je bankrekening of contant in hand in Eindhoven!</strong>
          </p>

          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '46px' }}>
            <Link href="/verkopen" className="btn btn-red">
              <Banknote size={22} /> 💶 CLAIM JE CASH BOD
            </Link>
            <Link href="/winkel" className="btn btn-secondary">
              <Tag size={20} color="#dc2626" /> Bekijk Opruiming Deals (-50%) <ArrowRight size={18} />
            </Link>
          </div>

          {/* Money Valuation Floating Ticker Badges */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '40px' }}>
            {[
              { title: 'MacBook Pro M3 Pro', val: '💰 Direct € 1.450,- Cash' },
              { title: 'NVIDIA RTX 4090 24GB', val: '💰 Direct € 1.400,- Cash' },
              { title: 'iPhone 15 Pro Max', val: '💰 Direct € 850,- Cash' },
              { title: 'PlayStation 5 Slim', val: '💰 Direct € 380,- Cash' },
            ].map((chip, idx) => (
              <div
                key={idx}
                className="commercial-card commercial-card-hover"
                style={{
                  padding: '12px 20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  background: '#ffffff',
                  border: '2px solid #fee2e2',
                }}
              >
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#0f172a' }}>{chip.title}</div>
                  <div style={{ fontSize: '0.82rem', color: '#dc2626', fontWeight: 900 }}>{chip.val}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Key Trust Stats Bar */}
          <div className="commercial-card" style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '20px 30px', maxWidth: '920px', margin: '0 auto', flexWrap: 'wrap', gap: '20px', background: '#ffffff', border: '2px solid #e2e8f0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Banknote size={28} color="#16a34a" />
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '0.92rem', fontWeight: 900, color: '#0f172a' }}>Direct Geld In Hand</div>
                <div style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600 }}>Contant of Tikkie / iDEAL</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <ShieldCheck size={28} color="#dc2626" />
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '0.92rem', fontWeight: 900, color: '#0f172a' }}>DOR Eerlijke Inkoop</div>
                <div style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600 }}>100% Legitiem & Anti-Heling</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Award size={28} color="#16a34a" />
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '0.92rem', fontWeight: 900, color: '#0f172a' }}>6 Maanden Garantie</div>
                <div style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600 }}>Op Alle Webshop Producten</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Buyback Calculator Section */}
      <section style={{ padding: '60px 0 80px 0' }}>
        <div className="container">
          <BuybackCalculator />
        </div>
      </section>

      {/* 3-Step Process Infographic Section */}
      <section style={{ padding: '70px 0', background: '#ffffff', borderTop: '2px solid #e2e8f0', borderBottom: '2px solid #e2e8f0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '46px' }}>
            <p style={{ color: '#dc2626', fontSize: '0.88rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Eenvoudig Geld Verdienen
            </p>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#0f172a' }}>Hoe Krijg Je Vandaag Cash?</h2>
          </div>

          <div className="grid-3">
            <div className="commercial-card commercial-card-hover" style={{ padding: '36px', textAlign: 'center' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '20px', background: '#fee2e2', color: '#dc2626', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto', fontSize: '1.6rem', fontWeight: 900 }}>
                1
              </div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '12px', fontWeight: 900 }}>Bereken Je Cash Bod</h3>
              <p style={{ color: '#475569', fontSize: '0.95rem', fontWeight: 500 }}>
                Selecteer je model en upload foto's. Onze AI rekent direct de hoogste marktwaarde uit voor jouw apparaat.
              </p>
            </div>

            <div className="commercial-card commercial-card-hover" style={{ padding: '36px', textAlign: 'center' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '20px', background: '#dcfce7', color: '#16a34a', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto', fontSize: '1.6rem', fontWeight: 900 }}>
                2
              </div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '12px', fontWeight: 900 }}>Telefonisch Akkoord</h3>
              <p style={{ color: '#475569', fontSize: '0.95rem', fontWeight: 500 }}>
                Onze inkoop-specialist bekijkt je aanvraag en belt/WhatsAppt je binnen 15 minuten voor akkoord op je cash bedrag.
              </p>
            </div>

            <div className="commercial-card commercial-card-hover" style={{ padding: '36px', textAlign: 'center' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '20px', background: '#fee2e2', color: '#dc2626', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto', fontSize: '1.6rem', fontWeight: 900 }}>
                3
              </div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '12px', fontWeight: 900 }}>Ontvang Direct Geld</h3>
              <p style={{ color: '#475569', fontSize: '0.95rem', fontWeight: 500 }}>
                Lever je apparaat af in Eindhoven (Station / TU/e / Strijp-S) of stuur gratis op. Je krijgt direct contant geld of iDEAL!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Refurbished Store Showcase Section */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '46px' }}>
            <div className="badge badge-red" style={{ marginBottom: '14px' }}>
              <Flame size={14} /> GECERTIFICEERDE OPRUIMING DEALS
            </div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#0f172a' }}>Bespaar Tot 50% Op Refurbished Tech</h2>
            <p style={{ color: '#475569', fontSize: '1.05rem', maxWidth: '640px', margin: '0 auto', fontWeight: 500 }}>
              Geteste tweedehands MacBooks, videokaarten en consoles met 6 maanden volledige garantie.
            </p>
          </div>

          <StoreCatalog />
        </div>
      </section>
    </main>
  );
}