import StoreCatalog from '@/components/StoreCatalog';
import { Award, ShieldCheck, Truck } from 'lucide-react';

export default function WinkelPage() {
  return (
    <main style={{ padding: '60px 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div className="badge badge-green" style={{ marginBottom: '12px' }}>
            <Award size={14} /> 6 Maanden Volledige Garantie
          </div>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>
            Refurbished Tech Shop Eindhoven
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', maxWidth: '640px', margin: '0 auto' }}>
            Gecertificeerd geteste MacBooks, iPhones, NVIDIA RTX videokaarten en consoles. Bespaar tot 50% op de nieuwprijs met volledige garantie.
          </p>
        </div>

        <StoreCatalog />
      </div>
    </main>
  );
}