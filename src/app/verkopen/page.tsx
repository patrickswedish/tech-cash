import BuybackCalculator from '@/components/BuybackCalculator';
import { ShieldCheck, Truck, MapPin, DollarSign } from 'lucide-react';

export default function VerkopenPage() {
  return (
    <main style={{ padding: '60px 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div className="badge badge-cyan" style={{ marginBottom: '12px' }}>
            <DollarSign size={14} /> Eerlijke Inkoop Eindhoven
          </div>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>
            Verkoop Je Laptop, Phone, GPU of Console Voor Cash
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', maxWidth: '640px', margin: '0 auto' }}>
            Voer je model en conditie in en zie direct hoeveel cash geld we je vandaag bieden.
          </p>
        </div>

        <BuybackCalculator />

        {/* Legal Trust Info Box */}
        <div className="glass-panel-subtle" style={{ maxWidth: '840px', margin: '40px auto 0 auto', padding: '24px' }}>
          <h3 style={{ fontSize: '1.1rem', color: 'var(--cyan)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ShieldCheck size={18} /> Hoe Werkt Eerlijke Inkoop & DOR Wetgeving?
          </h3>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '12px' }}>
            Om diefstal en heling in Eindhoven tegen te gaan, registreert TechCash alle ingekochte apparatuur in het wettelijk verplichte Digitaal Opkopers Register (DOR).
          </p>
          <ul style={{ fontSize: '0.85rem', color: 'var(--text-muted)', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <li>Neem een geldig legitimatiebewijs (ID/Paspoort/Rijbewijs) mee naar de afspraak.</li>
            <li>Apparaten moeten iCloud-vrij of Google-account vrij worden opgeleverd.</li>
            <li>Contante of Tikkie/iDEAL uitbetaling vindt direct plaats na de hardware test.</li>
          </ul>
        </div>
      </div>
    </main>
  );
}