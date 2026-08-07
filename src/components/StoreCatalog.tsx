'use client';

import { useState } from 'react';
import { REFURBISHED_STORE, RefurbishedItem } from '../data/techData';
import { ShieldCheck, BatteryCharging, Check, ShoppingBag, X, Zap, Camera, Eye } from 'lucide-react';

export default function StoreCatalog() {
  const [selectedCat, setSelectedCat] = useState<string>('all');
  const [activeItem, setActiveItem] = useState<RefurbishedItem | null>(null);
  const [activePhotoIdx, setActivePhotoIdx] = useState<number>(0);
  const [orderCompleted, setOrderCompleted] = useState<boolean>(false);

  const filteredItems = selectedCat === 'all' 
    ? REFURBISHED_STORE 
    : REFURBISHED_STORE.filter((item) => item.category === selectedCat);

  return (
    <div>
      {/* Category Tabs */}
      <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '36px' }}>
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
              padding: '12px 24px',
              borderRadius: '14px',
              background: selectedCat === tab.id ? 'var(--cyan)' : 'rgba(255,255,255,0.04)',
              color: selectedCat === tab.id ? '#040d16' : 'var(--text-white)',
              border: `1px solid ${selectedCat === tab.id ? 'var(--cyan)' : 'var(--border-glass-subtle)'}`,
              fontWeight: 800,
              fontSize: '0.9rem',
              cursor: 'pointer',
              transition: 'all 0.22s ease',
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
            className="glass-panel glass-panel-hover"
            style={{
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              {/* Image Container */}
              <div style={{ position: 'relative', height: '230px', background: '#000', overflow: 'hidden' }}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9, transition: 'transform 0.3s ease' }}
                />
                {item.badge && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      background: 'rgba(59, 224, 247, 0.95)',
                      color: '#040d16',
                      padding: '4px 12px',
                      borderRadius: '8px',
                      fontWeight: 900,
                      fontSize: '0.75rem',
                      boxShadow: '0 4px 12px rgba(59,224,247,0.4)',
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
                    background: 'rgba(4, 13, 22, 0.9)',
                    backdropFilter: 'blur(8px)',
                    color: 'var(--green)',
                    padding: '4px 12px',
                    borderRadius: '8px',
                    fontWeight: 800,
                    fontSize: '0.78rem',
                    border: '1px solid var(--green)',
                  }}
                >
                  Grade {item.conditionGrade}
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '24px' }}>
                <h3 style={{ fontSize: '1.15rem', marginBottom: '8px', lineHeight: 1.3, fontWeight: 800 }}>{item.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.84rem', marginBottom: '16px' }}>{item.specs}</p>

                {item.batteryHealth && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: 'var(--cyan)', fontWeight: 700, marginBottom: '12px' }}>
                    <BatteryCharging size={16} /> {item.batteryHealth}
                  </div>
                )}

                <div style={{ fontSize: '0.82rem', color: 'var(--green)', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600 }}>
                  <ShieldCheck size={16} /> {item.warranty}
                </div>
              </div>
            </div>

            {/* Footer Pricing & CTA */}
            <div style={{ padding: '18px 24px 24px 24px', borderTop: '1px solid var(--border-glass-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textDecoration: 'line-through' }}>
                  Nieuwprijs € {item.originalPrice},-
                </div>
                <div style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--text-white)' }}>
                  € {item.price},-
                </div>
              </div>

              <button
                onClick={() => {
                  setActiveItem(item);
                  setActivePhotoIdx(0);
                  setOrderCompleted(false);
                }}
                className="btn btn-primary"
                style={{ padding: '10px 18px', fontSize: '0.88rem' }}
              >
                <Eye size={16} /> Bekijk & Foto's
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Product Inspection & Photo Gallery Modal */}
      {activeItem && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 1000, background: 'rgba(0,0,0,0.88)', backdropFilter: 'blur(16px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', overflowY: 'auto' }}>
          <div className="glass-panel" style={{ width: '100%', maxWidth: '740px', padding: '32px', position: 'relative', background: '#071826', border: '1px solid var(--cyan)', maxHeight: '90vh', overflowY: 'auto' }}>
            <button
              onClick={() => setActiveItem(null)}
              style={{ position: 'absolute', top: '20px', right: '20px', background: 'rgba(255,255,255,0.08)', border: 'none', color: '#fff', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
            >
              <X size={20} />
            </button>

            {!orderCompleted ? (
              <div>
                <div className="badge badge-cyan" style={{ marginBottom: '14px' }}>
                  14-Punts Inspectie & Foto Rapport
                </div>

                <h2 style={{ fontSize: '1.5rem', marginBottom: '8px', paddingRight: '40px' }}>{activeItem.title}</h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '20px' }}>{activeItem.conditionText}</p>

                {/* Photo Gallery Viewer */}
                <div style={{ marginBottom: '24px' }}>
                  <div style={{ position: 'relative', width: '100%', height: '320px', borderRadius: '16px', overflow: 'hidden', background: '#000', marginBottom: '12px', border: '1px solid var(--border-glass)' }}>
                    <img
                      src={activeItem.galleryImages[activePhotoIdx] || activeItem.image}
                      alt={activeItem.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div style={{ position: 'absolute', bottom: '12px', right: '12px', background: 'rgba(0,0,0,0.75)', color: 'var(--cyan)', padding: '4px 10px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Camera size={14} /> Foto {activePhotoIdx + 1} van {activeItem.galleryImages.length}
                    </div>
                  </div>

                  {/* Thumbnail Bar */}
                  <div style={{ display: 'flex', gap: '10px', overflowX: 'auto' }}>
                    {activeItem.galleryImages.map((imgUrl, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActivePhotoIdx(idx)}
                        style={{
                          width: '72px',
                          height: '54px',
                          borderRadius: '8px',
                          overflow: 'hidden',
                          border: `2px solid ${activePhotoIdx === idx ? 'var(--cyan)' : 'var(--border-glass-subtle)'}`,
                          cursor: 'pointer',
                          padding: 0,
                          background: '#000',
                          opacity: activePhotoIdx === idx ? 1 : 0.6,
                        }}
                      >
                        <img src={imgUrl} alt={`Thumb ${idx}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Cosmetic Damage & Condition Notes */}
                <div className="glass-panel-subtle" style={{ padding: '16px', marginBottom: '20px', borderLeft: '4px solid var(--cyan)' }}>
                  <div style={{ fontSize: '0.88rem', color: 'var(--text-white)', fontWeight: 600 }}>
                    {activeItem.cosmeticNotes}
                  </div>
                </div>

                {/* Inspection Report Specs Checklist */}
                <div className="glass-panel-subtle" style={{ padding: '20px', marginBottom: '24px' }}>
                  <h4 style={{ fontSize: '0.95rem', color: 'var(--cyan)', marginBottom: '10px', fontWeight: 800 }}>
                    Inspectie & Kwaliteitsgarantie:
                  </h4>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem' }}>
                    {activeItem.features.map((feat, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <Check size={18} color="var(--green)" /> {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
                  <div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>Totaalprijs (Inclusief BTW & 6 Maanden Garantie):</span>
                    <div style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--green)' }}>€ {activeItem.price},-</div>
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--cyan)', fontWeight: 700 }}>
                    📦 Ophalen in Eindhoven of Gratis PostNL Bezorging
                  </div>
                </div>

                <button
                  onClick={() => setOrderCompleted(true)}
                  className="btn btn-primary"
                  style={{ width: '100%', padding: '18px', fontSize: '1.05rem', textTransform: 'uppercase' }}
                >
                  Direct Afrekenen via iDEAL / Apple Pay <ShoppingBag size={20} />
                </button>
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '24px 0' }}>
                <Zap size={56} color="var(--green)" style={{ margin: '0 auto 16px auto' }} />
                <h3 style={{ fontSize: '1.6rem', marginBottom: '10px' }}>Bestelling Succesvol Ontvangen!</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '24px' }}>
                  Uw {activeItem.title} is gereserveerd. U ontvangt direct een bevestigingsmail met uw ophaaltijdslot in Eindhoven of PostNL track & trace code.
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