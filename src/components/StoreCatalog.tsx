'use client';

import { useState } from 'react';
import { REFURBISHED_STORE, RefurbishedItem } from '../data/techData';
import { ShieldCheck, BatteryCharging, Check, ShoppingBag, X, Zap } from 'lucide-react';

export default function StoreCatalog() {
  const [selectedCat, setSelectedCat] = useState<string>('all');
  const [activeItem, setActiveItem] = useState<RefurbishedItem | null>(null);
  const [orderCompleted, setOrderCompleted] = useState<boolean>(false);

  const filteredItems = selectedCat === 'all' 
    ? REFURBISHED_STORE 
    : REFURBISHED_STORE.filter((item) => item.category === selectedCat);

  return (
    <div>
      {/* Category Tabs */}
      <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '32px' }}>
        {[
          { id: 'all', label: 'Alle Refurbished Deals' },
          { id: 'macbook', label: 'Apple MacBooks' },
          { id: 'iphone', label: 'iPhones & iPads' },
          { id: 'gpu', label: 'NVIDIA RTX GPUs' },
          { id: 'console', label: 'PlayStation & Xbox' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSelectedCat(tab.id)}
            style={{
              padding: '10px 20px',
              borderRadius: '12px',
              background: selectedCat === tab.id ? 'var(--cyan)' : 'rgba(255,255,255,0.04)',
              color: selectedCat === tab.id ? '#051421' : 'var(--text-white)',
              border: `1px solid ${selectedCat === tab.id ? 'var(--cyan)' : 'var(--border-glass-subtle)'}`,
              fontWeight: 700,
              fontSize: '0.9rem',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid-3">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="glass-panel"
            style={{
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'transform 0.22s ease, border-color 0.22s ease',
            }}
          >
            <div>
              {/* Image Container */}
              <div style={{ position: 'relative', height: '220px', background: '#000', overflow: 'hidden' }}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9 }}
                />
                {item.badge && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      background: 'rgba(59, 224, 247, 0.9)',
                      color: '#051421',
                      padding: '4px 10px',
                      borderRadius: '8px',
                      fontWeight: 900,
                      fontSize: '0.75rem',
                    }}
                  >
                    {item.badge}
                  </div>
                )}
                <div
                  style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    background: 'rgba(7, 21, 33, 0.85)',
                    backdropFilter: 'blur(8px)',
                    color: 'var(--green)',
                    padding: '4px 10px',
                    borderRadius: '8px',
                    fontWeight: 800,
                    fontSize: '0.75rem',
                    border: '1px solid var(--green)',
                  }}
                >
                  Grade {item.conditionGrade}
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '20px' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '8px', lineHeight: 1.3 }}>{item.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', marginBottom: '14px' }}>{item.specs}</p>

                {item.batteryHealth && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: 'var(--cyan)', fontWeight: 600, marginBottom: '12px' }}>
                    <BatteryCharging size={14} /> {item.batteryHealth}
                  </div>
                )}

                <div style={{ fontSize: '0.8rem', color: 'var(--green)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ShieldCheck size={14} /> {item.warranty}
                </div>
              </div>
            </div>

            {/* Footer Pricing & CTA */}
            <div style={{ padding: '16px 20px 20px 20px', borderTop: '1px solid var(--border-glass-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textDecoration: 'line-through' }}>
                  Nieuwprijs € {item.originalPrice},-
                </div>
                <div style={{ fontSize: '1.4rem', fontWeight: 900, color: 'var(--text-white)' }}>
                  € {item.price},-
                </div>
              </div>

              <button
                onClick={() => {
                  setActiveItem(item);
                  setOrderCompleted(false);
                }}
                className="btn btn-primary"
                style={{ padding: '10px 16px', fontSize: '0.85rem' }}
              >
                Bekijk & Bestel
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Item Inspection & Checkout Drawer Modal */}
      {activeItem && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 1000, background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(12px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
          <div className="glass-panel" style={{ width: '100%', maxWidth: '640px', padding: '32px', position: 'relative', background: '#0a2032', border: '1px solid var(--cyan)' }}>
            <button
              onClick={() => setActiveItem(null)}
              style={{ position: 'absolute', top: '16px', right: '16px', background: 'transparent', border: 'none', color: '#fff', cursor: 'pointer' }}
            >
              <X size={24} />
            </button>

            {!orderCompleted ? (
              <div>
                <div className="badge badge-cyan" style={{ marginBottom: '12px' }}>
                  14-Punts Inspectie Geverifieerd
                </div>
                <h2 style={{ fontSize: '1.4rem', marginBottom: '12px' }}>{activeItem.title}</h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '16px' }}>{activeItem.conditionText}</p>

                <div className="glass-panel-subtle" style={{ padding: '16px', marginBottom: '20px' }}>
                  <h4 style={{ fontSize: '0.9rem', color: 'var(--cyan)', marginBottom: '8px' }}>Inspectie Rapport:</h4>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.85rem' }}>
                    {activeItem.features.map((feat, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Check size={16} color="var(--green)" /> {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>Totaalprijs (Inclusief BTW & Garantie):</span>
                    <div style={{ fontSize: '1.8rem', fontWeight: 900, color: 'var(--green)' }}>€ {activeItem.price},-</div>
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    📦 Afhalen in Eindhoven of Gratis Bezorging
                  </div>
                </div>

                <button
                  onClick={() => setOrderCompleted(true)}
                  className="btn btn-primary"
                  style={{ width: '100%', padding: '16px', fontSize: '1rem' }}
                >
                  Direct Afrekenen via iDEAL / Apple Pay <ShoppingBag size={18} />
                </button>
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '20px 0' }}>
                <Zap size={48} color="var(--green)" style={{ margin: '0 auto 16px auto' }} />
                <h3 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>Bestelling Succesvol Ontvangen!</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '20px' }}>
                  Uw {activeItem.title} is gereserveerd. U ontvangt direct een bevestigingsmail met uw ophaaltijdslot of PostNL track & trace code.
                </p>
                <button onClick={() => setActiveItem(null)} className="btn btn-secondary">
                  Sluiten & Verder Winkelen
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}