'use client';

import { useState } from 'react';
import { REFURBISHED_STORE, RefurbishedItem } from '../data/techData';
import { ShieldCheck, BatteryCharging, Check, ShoppingBag, X, Zap, Camera, Eye, Tag, Flame } from 'lucide-react';

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
      {/* Category Filter Tabs */}
      <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '36px' }}>
        {[
          { id: 'all', label: '🔥 Alle Opruiming Deals' },
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
              background: selectedCat === tab.id ? '#dc2626' : '#ffffff',
              color: selectedCat === tab.id ? '#ffffff' : '#0f172a',
              border: `2px solid ${selectedCat === tab.id ? '#dc2626' : '#e2e8f0'}`,
              fontWeight: 900,
              fontSize: '0.92rem',
              cursor: 'pointer',
              boxShadow: selectedCat === tab.id ? '0 6px 16px rgba(220,38,38,0.3)' : '0 4px 10px rgba(0,0,0,0.03)',
              transition: 'all 0.22s ease',
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Commercial Product Grid */}
      <div className="grid-3">
        {filteredItems.map((item) => {
          const discountPercent = Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100);

          return (
            <div
              key={item.id}
              className="commercial-card commercial-card-hover"
              style={{
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                {/* Image Container with Hot Discount Badge */}
                <div style={{ position: 'relative', height: '220px', background: '#f8fafc', overflow: 'hidden' }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  
                  {/* Hot Discount Badge */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      background: '#dc2626',
                      color: '#ffffff',
                      padding: '6px 14px',
                      borderRadius: '10px',
                      fontWeight: 900,
                      fontSize: '0.82rem',
                      boxShadow: '0 4px 14px rgba(220,38,38,0.4)',
                    }}
                  >
                    -{discountPercent}% KORTING
                  </div>

                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      right: '12px',
                      background: '#ffffff',
                      color: '#16a34a',
                      padding: '4px 12px',
                      borderRadius: '8px',
                      fontWeight: 900,
                      fontSize: '0.8rem',
                      border: '2px solid #16a34a',
                    }}
                  >
                    Grade {item.conditionGrade}
                  </div>
                </div>

                {/* Card Body */}
                <div style={{ padding: '24px' }}>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '8px', lineHeight: 1.3, fontWeight: 900, color: '#0f172a' }}>
                    {item.title}
                  </h3>
                  <p style={{ color: '#64748b', fontSize: '0.86rem', marginBottom: '16px', fontWeight: 600 }}>
                    {item.specs}
                  </p>

                  {item.batteryHealth && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#16a34a', fontWeight: 800, marginBottom: '12px' }}>
                      <BatteryCharging size={18} /> {item.batteryHealth}
                    </div>
                  )}

                  <div style={{ fontSize: '0.85rem', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700 }}>
                    <ShieldCheck size={18} color="#16a34a" /> {item.warranty}
                  </div>
                </div>
              </div>

              {/* Pricing & Call-to-action */}
              <div style={{ padding: '20px 24px', borderTop: '2px solid #f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#fafafa' }}>
                <div>
                  <div style={{ fontSize: '0.78rem', color: '#94a3b8', textDecoration: 'line-through', fontWeight: 700 }}>
                    Nieuwprijs € {item.originalPrice},-
                  </div>
                  <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#dc2626' }}>
                    € {item.price},-
                  </div>
                </div>

                <button
                  onClick={() => {
                    setActiveItem(item);
                    setActivePhotoIdx(0);
                    setOrderCompleted(false);
                  }}
                  className="btn btn-red"
                  style={{ padding: '10px 16px', fontSize: '0.88rem' }}
                >
                  <Eye size={16} /> Bekijk Deals & Foto's
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Product Detail Modal */}
      {activeItem && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 1000, background: 'rgba(15,23,42,0.75)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', overflowY: 'auto' }}>
          <div className="commercial-card" style={{ width: '100%', maxWidth: '740px', padding: '36px', position: 'relative', background: '#ffffff', maxHeight: '90vh', overflowY: 'auto', border: '3px solid #dc2626' }}>
            <button
              onClick={() => setActiveItem(null)}
              style={{ position: 'absolute', top: '20px', right: '20px', background: '#f1f5f9', border: 'none', color: '#0f172a', borderRadius: '50%', width: '38px', height: '38px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontWeight: 900 }}
            >
              <X size={20} />
            </button>

            {!orderCompleted ? (
              <div>
                <div className="badge badge-red" style={{ marginBottom: '14px' }}>
                  14-Punts Inspectie & Foto Rapport
                </div>

                <h2 style={{ fontSize: '1.6rem', marginBottom: '8px', paddingRight: '40px', fontWeight: 900, color: '#0f172a' }}>{activeItem.title}</h2>
                <p style={{ color: '#475569', fontSize: '0.95rem', marginBottom: '20px', fontWeight: 600 }}>{activeItem.conditionText}</p>

                {/* Photo Viewer */}
                <div style={{ marginBottom: '24px' }}>
                  <div style={{ position: 'relative', width: '100%', height: '320px', borderRadius: '16px', overflow: 'hidden', background: '#f1f5f9', marginBottom: '12px', border: '2px solid #e2e8f0' }}>
                    <img
                      src={activeItem.galleryImages[activePhotoIdx] || activeItem.image}
                      alt={activeItem.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div style={{ position: 'absolute', bottom: '12px', right: '12px', background: '#0f172a', color: '#ffffff', padding: '6px 12px', borderRadius: '8px', fontSize: '0.78rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Camera size={14} /> Foto {activePhotoIdx + 1} van {activeItem.galleryImages.length}
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '10px', overflowX: 'auto' }}>
                    {activeItem.galleryImages.map((imgUrl, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActivePhotoIdx(idx)}
                        style={{
                          width: '74px',
                          height: '56px',
                          borderRadius: '10px',
                          overflow: 'hidden',
                          border: `3px solid ${activePhotoIdx === idx ? '#dc2626' : '#cbd5e1'}`,
                          cursor: 'pointer',
                          padding: 0,
                          background: '#fff',
                        }}
                      >
                        <img src={imgUrl} alt={`Thumb ${idx}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Cosmetic Damage Notes Box */}
                <div style={{ padding: '18px', background: '#fef2f2', borderLeft: '5px solid #dc2626', borderRadius: '12px', marginBottom: '20px' }}>
                  <div style={{ fontSize: '0.9rem', color: '#991b1b', fontWeight: 800 }}>
                    {activeItem.cosmeticNotes}
                  </div>
                </div>

                <div style={{ padding: '20px', background: '#f8fafc', borderRadius: '14px', marginBottom: '24px', border: '1px solid #e2e8f0' }}>
                  <h4 style={{ fontSize: '1rem', color: '#0f172a', marginBottom: '12px', fontWeight: 900 }}>
                    14-Punts Technische Inspectie:
                  </h4>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem', fontWeight: 600 }}>
                    {activeItem.features.map((feat, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <Check size={18} color="#16a34a" /> {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
                  <div>
                    <span style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 700 }}>Totaalprijs (Inclusief BTW & 6 Maanden Garantie):</span>
                    <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#dc2626' }}>€ {activeItem.price},-</div>
                  </div>
                  <div style={{ fontSize: '0.88rem', color: '#16a34a', fontWeight: 800 }}>
                    📦 Ophalen in Eindhoven of Gratis PostNL Bezorging
                  </div>
                </div>

                <button
                  onClick={() => setOrderCompleted(true)}
                  className="btn btn-green"
                  style={{ width: '100%', padding: '18px', fontSize: '1.1rem' }}
                >
                  Direct Afrekenen via iDEAL / Apple Pay <ShoppingBag size={20} />
                </button>
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '24px 0' }}>
                <Zap size={56} color="#16a34a" style={{ margin: '0 auto 16px auto' }} />
                <h3 style={{ fontSize: '1.6rem', marginBottom: '10px', fontWeight: 900 }}>Bestelling Succesvol Ontvangen!</h3>
                <p style={{ color: '#475569', fontSize: '0.98rem', marginBottom: '24px', fontWeight: 600 }}>
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