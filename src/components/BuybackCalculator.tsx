'use client';

import { useState } from 'react';
import { CATEGORIES } from '../data/techData';
import { Laptop, Smartphone, Cpu, Gamepad2, CheckCircle2, DollarSign, ArrowRight, ShieldCheck, MapPin, Truck, RefreshCw, Upload, Phone, Mail, User, AlertCircle, Sparkles } from 'lucide-react';

export default function BuybackCalculator() {
  const [selectedCatId, setSelectedCatId] = useState<string>('macbook');
  const [selectedModelId, setSelectedModelId] = useState<string>('');
  const [selectedSpecIdx, setSelectedSpecIdx] = useState<number>(0);
  const [serialNumber, setSerialNumber] = useState<string>('');
  const [condition, setCondition] = useState<'pristine' | 'good' | 'fair' | 'flawed'>('pristine');
  
  // User Lead Information
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [photosCount, setPhotosCount] = useState<number>(0);

  // States
  const [deliveryMethod, setDeliveryMethod] = useState<'dropoff' | 'postnl'>('dropoff');
  const [isAiVetting, setIsAiVetting] = useState<boolean>(false);
  const [leadSubmitted, setLeadSubmitted] = useState<boolean>(false);

  // Active Category & Model
  const activeCategory = CATEGORIES.find((c) => c.id === selectedCatId) || CATEGORIES[0];
  const activeModel = activeCategory.popularModels.find((m) => m.id === selectedModelId) || activeCategory.popularModels[0];

  const conditionMultipliers = {
    pristine: 1.0,
    good: 0.88,
    fair: 0.72,
    flawed: 0.45,
  };

  const specMultiplier = activeModel.specsOptions[selectedSpecIdx]?.multiplier || 1.0;
  const estimatedMarketValue = Math.round(activeModel.baseMarketPrice * specMultiplier * conditionMultipliers[condition]);
  const estimatedCashOffer = Math.round(estimatedMarketValue * 0.48);

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'macbook': return <Laptop size={22} />;
      case 'iphone': return <Smartphone size={22} />;
      case 'gpu': return <Cpu size={22} />;
      case 'console': return <Gamepad2 size={22} />;
      default: return <Laptop size={22} />;
    }
  };

  const handleSubmitLead = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !phone) {
      alert('Vul a.u.b. uw naam, e-mailadres en telefoonnummer in voor de telefonische bevestiging.');
      return;
    }
    if (photosCount < 3) {
      alert('Upload a.u.b. minimaal 3 foto\'s (Voorkant, Achterkant, Serienummer/Schade) voor AI keuring.');
      return;
    }

    setIsAiVetting(true);
    setTimeout(() => {
      setIsAiVetting(false);
      setLeadSubmitted(true);
    }, 1500);
  };

  return (
    <div className="glass-panel" style={{ padding: '36px', maxWidth: '880px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '28px' }}>
        <div className="badge badge-cyan" style={{ marginBottom: '12px' }}>
          <Sparkles size={14} /> AI-Assisted Instant Valuation Engine
        </div>
        <h2 style={{ fontSize: '1.8rem' }}>Meld Uw Tech Aan Voor Cash Uitbetaling</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
          Upload 3 tot 10 foto's van uw apparaat. Onze AI analyseert de marktwaarde en u wordt persoonlijk gebeld voor een snelle cash overdracht.
        </p>
      </div>

      <form onSubmit={handleSubmitLead}>
        {/* Step 1: Category Selector */}
        <div style={{ marginBottom: '24px' }}>
          <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--cyan)', textTransform: 'uppercase', marginBottom: '10px' }}>
            1. Kies Categorie
          </label>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '12px' }}>
            {CATEGORIES.map((cat) => (
              <button
                type="button"
                key={cat.id}
                onClick={() => {
                  setSelectedCatId(cat.id);
                  setSelectedModelId(cat.popularModels[0].id);
                  setSelectedSpecIdx(0);
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '14px',
                  borderRadius: '12px',
                  background: selectedCatId === cat.id ? 'rgba(59, 224, 247, 0.18)' : 'rgba(255,255,255,0.04)',
                  border: `1px solid ${selectedCatId === cat.id ? 'var(--cyan)' : 'var(--border-glass-subtle)'}`,
                  color: selectedCatId === cat.id ? 'var(--cyan)' : 'var(--text-white)',
                  cursor: 'pointer',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  transition: 'all 0.2s ease',
                }}
              >
                {getCategoryIcon(cat.id)}
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Model, Specs & Serial Number */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginBottom: '24px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--cyan)', textTransform: 'uppercase', marginBottom: '8px' }}>
              2. Selecteer Model
            </label>
            <select
              value={activeModel.id}
              onChange={(e) => {
                setSelectedModelId(e.target.value);
                setSelectedSpecIdx(0);
              }}
              style={{
                width: '100%',
                padding: '12px 16px',
                borderRadius: '12px',
                background: '#0a2032',
                border: '1px solid var(--border-glass)',
                color: '#fff',
                fontSize: '0.95rem',
                fontWeight: 600,
                outline: 'none',
              }}
            >
              {activeCategory.popularModels.map((m) => (
                <option key={m.id} value={m.id}>
                  {m.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--cyan)', textTransform: 'uppercase', marginBottom: '8px' }}>
              Specificatie / Opslag
            </label>
            <select
              value={selectedSpecIdx}
              onChange={(e) => setSelectedSpecIdx(Number(e.target.value))}
              style={{
                width: '100%',
                padding: '12px 16px',
                borderRadius: '12px',
                background: '#0a2032',
                border: '1px solid var(--border-glass)',
                color: '#fff',
                fontSize: '0.95rem',
                fontWeight: 600,
                outline: 'none',
              }}
            >
              {activeModel.specsOptions.map((spec, idx) => (
                <option key={idx} value={idx}>
                  {spec.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--cyan)', textTransform: 'uppercase', marginBottom: '8px' }}>
              Serienummer (DOR Verificatie)
            </label>
            <input
              type="text"
              placeholder="bijv. C02FX48LMD6M"
              value={serialNumber}
              onChange={(e) => setSerialNumber(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 16px',
                borderRadius: '12px',
                background: '#0a2032',
                border: '1px solid var(--border-glass)',
                color: '#fff',
                fontSize: '0.95rem',
                outline: 'none',
              }}
            />
          </div>
        </div>

        {/* Step 3: Condition Selector */}
        <div style={{ marginBottom: '28px' }}>
          <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--cyan)', textTransform: 'uppercase', marginBottom: '10px' }}>
            3. Conditie & Gezondheid
          </label>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '10px' }}>
            {[
              { key: 'pristine', label: 'Zo Goed Als Nieuw', sub: 'Krasvrij, 100% werkend' },
              { key: 'good', label: 'Licht Gebruikt', sub: 'Minimale sporen, werkend' },
              { key: 'fair', label: 'Zichtbare Sporen', sub: 'Krasjes op scherm/behuizing' },
              { key: 'flawed', label: 'Defect / Schade', sub: 'Accu zwak of barst' },
            ].map((item) => (
              <button
                type="button"
                key={item.key}
                onClick={() => setCondition(item.key as any)}
                style={{
                  padding: '12px',
                  borderRadius: '12px',
                  textAlign: 'left',
                  background: condition === item.key ? 'rgba(16, 185, 129, 0.15)' : 'rgba(255,255,255,0.03)',
                  border: `1px solid ${condition === item.key ? 'var(--green)' : 'var(--border-glass-subtle)'}`,
                  color: condition === item.key ? 'var(--green)' : 'var(--text-white)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                <div style={{ fontWeight: 700, fontSize: '0.85rem' }}>{item.label}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{item.sub}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Step 4: Multi-Photo Upload Dropzone (Min 3, Max 10) */}
        <div style={{ marginBottom: '28px' }}>
          <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--cyan)', textTransform: 'uppercase', marginBottom: '8px' }}>
            4. Upload Duidelijke Foto's (Minimaal 3 tot 10 Foto's)
          </label>
          <div
            onClick={() => setPhotosCount((prev) => (prev < 10 ? prev + 1 : 10))}
            style={{
              padding: '28px',
              borderRadius: '16px',
              border: '2px dashed var(--border-glass)',
              background: 'rgba(59, 224, 247, 0.04)',
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            <Upload size={32} color="var(--cyan)" style={{ margin: '0 auto 10px auto' }} />
            <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>
              Klik om foto's toe te voegen (Voorkant, Achterkant, Zijkanten, Serienummer)
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '4px' }}>
              {photosCount === 0
                ? 'Nog geen foto\'s geselecteerd. (Minimaal 3 verplicht voor AI Keuring)'
                : `✅ ${photosCount} van 10 foto's geüpload`}
            </div>
          </div>
        </div>

        {/* Estimated Offer Box */}
        <div className="glass-panel-subtle" style={{ padding: '20px', textAlign: 'center', background: 'linear-gradient(135deg, rgba(7,30,48,0.9), rgba(16,185,129,0.15))', border: '1px solid var(--green)', marginBottom: '28px' }}>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Indicatieve AI Cash Waarde:
          </div>
          <div style={{ fontSize: '2.6rem', fontWeight: 900, color: 'var(--green)', lineHeight: 1.1 }}>
            € {estimatedCashOffer},-
          </div>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', marginTop: '4px' }}>
            Geschatte Resalewaarde: € {estimatedMarketValue},- • Na fotokeuring belt onze specialist u binnen 15 min.
          </div>
        </div>

        {/* Step 5: Seller Contact Information */}
        <div style={{ marginBottom: '28px' }}>
          <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--cyan)', textTransform: 'uppercase', marginBottom: '10px' }}>
            5. Uw Contactgegevens (Voor Persoonlijk Telefonisch Bod)
          </label>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
            <div style={{ position: 'relative' }}>
              <User size={16} color="var(--text-dim)" style={{ position: 'absolute', top: '14px', left: '14px' }} />
              <input
                type="text"
                placeholder="Uw Volledige Naam *"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                style={{ width: '100%', padding: '12px 16px 12px 40px', borderRadius: '12px', background: '#0a2032', border: '1px solid var(--border-glass)', color: '#fff', fontSize: '0.9rem', outline: 'none' }}
              />
            </div>

            <div style={{ position: 'relative' }}>
              <Mail size={16} color="var(--text-dim)" style={{ position: 'absolute', top: '14px', left: '14px' }} />
              <input
                type="email"
                placeholder="Uw E-mailadres *"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ width: '100%', padding: '12px 16px 12px 40px', borderRadius: '12px', background: '#0a2032', border: '1px solid var(--border-glass)', color: '#fff', fontSize: '0.9rem', outline: 'none' }}
              />
            </div>

            <div style={{ position: 'relative' }}>
              <Phone size={16} color="var(--text-dim)" style={{ position: 'absolute', top: '14px', left: '14px' }} />
              <input
                type="tel"
                placeholder="Telefoonnummer (Mobiel) *"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                style={{ width: '100%', padding: '12px 16px 12px 40px', borderRadius: '12px', background: '#0a2032', border: '1px solid var(--border-glass)', color: '#fff', fontSize: '0.9rem', outline: 'none' }}
              />
            </div>
          </div>
        </div>

        {/* Submit Lead Button */}
        {!leadSubmitted ? (
          <button
            type="submit"
            disabled={isAiVetting}
            className="btn btn-primary"
            style={{ width: '100%', padding: '16px', fontSize: '1.05rem', textTransform: 'uppercase' }}
          >
            {isAiVetting ? '🤖 AI Keuring & Analyse Uitvoeren...' : 'Aanvraag Indienen voor Telefonische Bevestiging ➔'}
          </button>
        ) : (
          <div className="glass-panel" style={{ padding: '24px', background: 'rgba(16,185,129,0.15)', border: '1px solid var(--green)', textAlign: 'center' }}>
            <CheckCircle2 size={40} color="var(--green)" style={{ margin: '0 auto 12px auto' }} />
            <h3 style={{ fontSize: '1.3rem', color: '#fff', marginBottom: '8px' }}>Aanvraag & Foto's Succesvol Ontvangen!</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '14px' }}>
              Bedankt, <strong>{fullName}</strong>. Onze specialist bekijkt uw foto's ({photosCount} stuks) & serienummer. Als uw apparaat voldoet, <strong>bellen of WhatsAppen wij u op {phone}</strong> binnen 15 minuten voor het definitieve bod en cash afspraak in Eindhoven!
            </p>
            <button
              type="button"
              onClick={() => {
                setLeadSubmitted(false);
                setPhotosCount(0);
              }}
              className="btn btn-secondary"
              style={{ padding: '8px 16px', fontSize: '0.8rem' }}
            >
              <RefreshCw size={14} /> Nog een Apparaat Aanmelden
            </button>
          </div>
        )}
      </form>
    </div>
  );
}