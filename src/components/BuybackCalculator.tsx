'use client';

import { useState } from 'react';
import { CATEGORIES } from '../data/techData';
import { Laptop, Smartphone, Cpu, Gamepad2, CheckCircle2, DollarSign, ArrowRight, ShieldCheck, MapPin, Truck, RefreshCw, Upload, Phone, Mail, User, AlertCircle, Sparkles, FileText, Package, Battery, Lock, Zap, Banknote, Flame, XCircle } from 'lucide-react';

export default function BuybackCalculator() {
  const [selectedCatId, setSelectedCatId] = useState<string>('macbook');
  const [selectedModelId, setSelectedModelId] = useState<string>('');
  const [selectedSpecIdx, setSelectedSpecIdx] = useState<number>(0);
  const [serialNumber, setSerialNumber] = useState<string>('');
  const [condition, setCondition] = useState<'pristine' | 'good' | 'fair' | 'flawed'>('pristine');
  
  // Advanced Vetting Fields
  const [hasReceipt, setHasReceipt] = useState<boolean>(true);
  const [hasOriginalBox, setHasOriginalBox] = useState<boolean>(true);
  const [hasCharger, setHasCharger] = useState<boolean>(true);
  const [isIcloudUnlocked, setIsIcloudUnlocked] = useState<boolean>(true);
  const [batteryHealth, setBatteryHealth] = useState<string>('95');
  const [pickupPoint, setPickupPoint] = useState<string>('eindhoven-cs');

  // User Lead Information
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [photosCount, setPhotosCount] = useState<number>(0);

  // States
  const [isAiVetting, setIsAiVetting] = useState<boolean>(false);
  const [leadStatus, setLeadStatus] = useState<'idle' | 'approved' | 'rejected'>('idle');
  const [rejectReason, setRejectReason] = useState<string>('');

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
  
  let bonusMultiplier = 1.0;
  if (hasReceipt) bonusMultiplier += 0.04;
  if (hasOriginalBox) bonusMultiplier += 0.03;
  if (hasCharger) bonusMultiplier += 0.03;

  let batteryDeduction = 0;
  const batVal = parseInt(batteryHealth) || 100;
  if (batVal < 82 && (selectedCatId === 'macbook' || selectedCatId === 'iphone')) {
    batteryDeduction = 40;
  }

  const estimatedMarketValue = Math.round(activeModel.baseMarketPrice * specMultiplier * conditionMultipliers[condition] * bonusMultiplier);
  const rawCashOffer = Math.round(estimatedMarketValue * 0.48) - batteryDeduction;
  const estimatedCashOffer = Math.max(rawCashOffer, 35);

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
      alert('Vul a.u.b. uw naam, e-mailadres en mobiele nummer in voor uw cash uitbetaling.');
      return;
    }

    setIsAiVetting(true);

    setTimeout(() => {
      setIsAiVetting(false);

      // AI Vetting Criteria Evaluation
      if (!isIcloudUnlocked) {
        setRejectReason('Apparaat staat nog als ingelogd geregistreerd. Voor uitbetaling dient het apparaat 100% afgemeld te zijn van iCloud / Google / Find My.');
        setLeadStatus('rejected');
      } else if (photosCount < 3) {
        setRejectReason('Onvoldoende foto\'s geüpload. Er zijn minimaal 3 duidelijke foto\'s vereist voor AI-inspectie.');
        setLeadStatus('rejected');
      } else if (condition === 'flawed' && estimatedCashOffer < 50) {
        setRejectReason('De marktwaarde van dit specifieke onderdeel met schade valt buiten onze actieve cash inkoopcriteria.');
        setLeadStatus('rejected');
      } else {
        setLeadStatus('approved');
      }
    }, 1600);
  };

  return (
    <div className="commercial-card" style={{ padding: '40px', maxWidth: '920px', margin: '0 auto', border: '2px solid #dc2626', boxShadow: '0 20px 50px rgba(220,38,38,0.12)' }}>
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <div className="badge badge-red" style={{ marginBottom: '12px' }}>
          <Flame size={14} /> DIRECT CASH VALUATION ENGINE
        </div>
        <h2 style={{ fontSize: '2.2rem', fontWeight: 900, color: '#0f172a' }}>Meld Je Tech Aan Voor Direct Geld</h2>
        <p style={{ color: '#475569', fontSize: '1.02rem', maxWidth: '680px', margin: '0 auto', fontWeight: 600 }}>
          Upload foto's en zie direct jouw gegarandeerde cash bod. Je wordt binnen 15 minuten gebeld voor je geld!
        </p>
      </div>

      <form onSubmit={handleSubmitLead}>
        {/* Step 1: Category Selector */}
        <div style={{ marginBottom: '28px' }}>
          <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 900, color: '#dc2626', textTransform: 'uppercase', marginBottom: '10px' }}>
            1. Kies Categorie
          </label>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '12px' }}>
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
                  padding: '16px',
                  borderRadius: '14px',
                  background: selectedCatId === cat.id ? '#fef2f2' : '#f8fafc',
                  border: `2px solid ${selectedCatId === cat.id ? '#dc2626' : '#e2e8f0'}`,
                  color: selectedCatId === cat.id ? '#dc2626' : '#0f172a',
                  cursor: 'pointer',
                  fontWeight: 800,
                  fontSize: '0.92rem',
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
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginBottom: '28px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 900, color: '#0f172a', textTransform: 'uppercase', marginBottom: '8px' }}>
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
                padding: '14px 16px',
                borderRadius: '14px',
                background: '#ffffff',
                border: '2px solid #cbd5e1',
                color: '#0f172a',
                fontSize: '0.98rem',
                fontWeight: 700,
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
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 900, color: '#0f172a', textTransform: 'uppercase', marginBottom: '8px' }}>
              Specificatie / Opslag
            </label>
            <select
              value={selectedSpecIdx}
              onChange={(e) => setSelectedSpecIdx(Number(e.target.value))}
              style={{
                width: '100%',
                padding: '14px 16px',
                borderRadius: '14px',
                background: '#ffffff',
                border: '2px solid #cbd5e1',
                color: '#0f172a',
                fontSize: '0.98rem',
                fontWeight: 700,
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
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 900, color: '#0f172a', textTransform: 'uppercase', marginBottom: '8px' }}>
              Serienummer (DOR Verificatie)
            </label>
            <input
              type="text"
              placeholder="bijv. C02FX48LMD6M"
              value={serialNumber}
              onChange={(e) => setSerialNumber(e.target.value)}
              style={{
                width: '100%',
                padding: '14px 16px',
                borderRadius: '14px',
                background: '#ffffff',
                border: '2px solid #cbd5e1',
                color: '#0f172a',
                fontSize: '0.95rem',
                fontWeight: 600,
                outline: 'none',
              }}
            />
          </div>
        </div>

        {/* Step 3: Vetting Checklist */}
        <div style={{ marginBottom: '28px' }}>
          <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 900, color: '#dc2626', textTransform: 'uppercase', marginBottom: '12px' }}>
            3. Extra Cash Bonussen & Staat
          </label>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '14px', marginBottom: '16px' }}>
            <div
              onClick={() => setHasReceipt(!hasReceipt)}
              style={{
                padding: '14px',
                borderRadius: '14px',
                background: hasReceipt ? '#f0fdf4' : '#f8fafc',
                border: `2px solid ${hasReceipt ? '#16a34a' : '#cbd5e1'}`,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              <FileText size={22} color={hasReceipt ? '#16a34a' : '#64748b'} />
              <div>
                <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#0f172a' }}>Originele Aankoopbon</div>
                <div style={{ fontSize: '0.78rem', color: hasReceipt ? '#16a34a' : '#64748b', fontWeight: 700 }}>{hasReceipt ? '💰 Aanwezig (+4% Cash)' : '❌ Geen bon'}</div>
              </div>
            </div>

            <div
              onClick={() => setHasOriginalBox(!hasOriginalBox)}
              style={{
                padding: '14px',
                borderRadius: '14px',
                background: hasOriginalBox ? '#f0fdf4' : '#f8fafc',
                border: `2px solid ${hasOriginalBox ? '#16a34a' : '#cbd5e1'}`,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              <Package size={22} color={hasOriginalBox ? '#16a34a' : '#64748b'} />
              <div>
                <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#0f172a' }}>Originele Doos</div>
                <div style={{ fontSize: '0.78rem', color: hasOriginalBox ? '#16a34a' : '#64748b', fontWeight: 700 }}>{hasOriginalBox ? '💰 Aanwezig (+3% Cash)' : '❌ Geen doos'}</div>
              </div>
            </div>

            <div
              onClick={() => setHasCharger(!hasCharger)}
              style={{
                padding: '14px',
                borderRadius: '14px',
                background: hasCharger ? '#f0fdf4' : '#f8fafc',
                border: `2px solid ${hasCharger ? '#16a34a' : '#cbd5e1'}`,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              <Zap size={22} color={hasCharger ? '#16a34a' : '#64748b'} />
              <div>
                <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#0f172a' }}>Originele Oplader</div>
                <div style={{ fontSize: '0.78rem', color: hasCharger ? '#16a34a' : '#64748b', fontWeight: 700 }}>{hasCharger ? '💰 Aanwezig (+3% Cash)' : '❌ Geen lader'}</div>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px' }}>
            {(selectedCatId === 'macbook' || selectedCatId === 'iphone') && (
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 800, color: '#0f172a', marginBottom: '6px' }}>
                  🔋 Batterijconditie % (in Instellingen)
                </label>
                <input
                  type="number"
                  placeholder="bijv. 92"
                  value={batteryHealth}
                  onChange={(e) => setBatteryHealth(e.target.value)}
                  style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', background: '#ffffff', border: '2px solid #cbd5e1', color: '#0f172a', fontSize: '0.95rem', fontWeight: 700, outline: 'none' }}
                />
              </div>
            )}

            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 800, color: '#0f172a', marginBottom: '6px' }}>
                🔒 iCloud / Google Status
              </label>
              <select
                value={isIcloudUnlocked ? 'yes' : 'no'}
                onChange={(e) => setIsIcloudUnlocked(e.target.value === 'yes')}
                style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', background: '#ffffff', border: '2px solid #cbd5e1', color: '#0f172a', fontSize: '0.95rem', fontWeight: 700, outline: 'none' }}
              >
                <option value="yes">✅ 100% Volledig Uitgelogd (Klaar voor cash)</option>
                <option value="no">⚠️ Nog ingelogd (Hulp nodig bij afmelden)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Step 4: Condition Selector */}
        <div style={{ marginBottom: '28px' }}>
          <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 900, color: '#dc2626', textTransform: 'uppercase', marginBottom: '10px' }}>
            4. Cosmetische Staat
          </label>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '10px' }}>
            {[
              { key: 'pristine', label: 'Zo Goed Als Nieuw', sub: 'Krasvrij, 100% top' },
              { key: 'good', label: 'Licht Gebruikt', sub: 'Minimale sporen, werkend' },
              { key: 'fair', label: 'Zichtbare Sporen', sub: 'Krasjes op scherm/behuizing' },
              { key: 'flawed', label: 'Defect / Schade', sub: 'Accu zwak of barst' },
            ].map((item) => (
              <button
                type="button"
                key={item.key}
                onClick={() => setCondition(item.key as any)}
                style={{
                  padding: '14px',
                  borderRadius: '14px',
                  textAlign: 'left',
                  background: condition === item.key ? '#f0fdf4' : '#f8fafc',
                  border: `2px solid ${condition === item.key ? '#16a34a' : '#cbd5e1'}`,
                  color: condition === item.key ? '#16a34a' : '#0f172a',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                <div style={{ fontWeight: 800, fontSize: '0.9rem' }}>{item.label}</div>
                <div style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 600 }}>{item.sub}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Step 5: Multi-Photo Upload Dropzone */}
        <div style={{ marginBottom: '28px' }}>
          <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 900, color: '#dc2626', textTransform: 'uppercase', marginBottom: '8px' }}>
            5. Upload Foto's Van Het Apparaat (Minimaal 3 tot 10 Foto's)
          </label>
          <div
            onClick={() => setPhotosCount((prev) => (prev < 10 ? prev + 1 : 10))}
            style={{
              padding: '30px',
              borderRadius: '16px',
              border: '2px dashed #dc2626',
              background: '#fef2f2',
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            <Upload size={36} color="#dc2626" style={{ margin: '0 auto 10px auto' }} />
            <div style={{ fontWeight: 900, fontSize: '1rem', color: '#0f172a' }}>
              Klik om foto's toe te voegen (Voorkant, Achterkant, Serienummer)
            </div>
            <div style={{ fontSize: '0.82rem', color: '#dc2626', marginTop: '4px', fontWeight: 800 }}>
              {photosCount === 0
                ? 'Nog geen foto\'s geselecteerd. (Minimaal 3 verplicht voor AI Keuring)'
                : `✅ ${photosCount} van 10 foto's geüpload`}
            </div>
          </div>
        </div>

        {/* Cash Offer Display Box */}
        <div style={{ padding: '28px', textAlign: 'center', background: '#f0fdf4', border: '3px solid #16a34a', borderRadius: '20px', marginBottom: '28px', boxShadow: '0 10px 30px rgba(22,163,74,0.15)' }}>
          <div style={{ fontSize: '0.85rem', color: '#16a34a', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 900 }}>
            💰 JOUW GEGARANDEERDE CASH UITBETALING VANDAAG:
          </div>
          <div style={{ fontSize: '3.4rem', fontWeight: 900, color: '#16a34a', lineHeight: 1.1 }}>
            € {estimatedCashOffer},-
          </div>
          <div style={{ fontSize: '0.85rem', color: '#475569', marginTop: '8px', fontWeight: 700 }}>
            Geschatte Resalewaarde: € {estimatedMarketValue},- • Geld direct contant of op je bankrekening!
          </div>
        </div>

        {/* Step 6: Overdracht Locatie & Contact */}
        <div style={{ marginBottom: '28px' }}>
          <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 900, color: '#dc2626', textTransform: 'uppercase', marginBottom: '10px' }}>
            6. Voorkeur Geld Overdracht & Contactgegevens
          </label>

          <div style={{ marginBottom: '14px' }}>
            <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 800, color: '#0f172a', marginBottom: '6px' }}>
              📍 Waar wil je je geld ontvangen?
            </label>
            <select
              value={pickupPoint}
              onChange={(e) => setPickupPoint(e.target.value)}
              style={{ width: '100%', padding: '14px 16px', borderRadius: '14px', background: '#ffffff', border: '2px solid #cbd5e1', color: '#0f172a', fontSize: '0.95rem', fontWeight: 700, outline: 'none' }}
            >
              <option value="eindhoven-cs">📍 Eindhoven Central Station (Contant of Tikkie)</option>
              <option value="tue-campus">🎓 TU/e Campus Pick-up Point</option>
              <option value="strijp-s">🏢 Strijp-S / High Tech Campus</option>
              <option value="postnl">📦 Gratis PostNL Verzekerde Verzending (Geld binnen 1 uur na ontvangst)</option>
            </select>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
            <div style={{ position: 'relative' }}>
              <User size={18} color="#64748b" style={{ position: 'absolute', top: '16px', left: '14px' }} />
              <input
                type="text"
                placeholder="Uw Volledige Naam *"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                style={{ width: '100%', padding: '14px 16px 14px 44px', borderRadius: '14px', background: '#ffffff', border: '2px solid #cbd5e1', color: '#0f172a', fontSize: '0.95rem', fontWeight: 700, outline: 'none' }}
              />
            </div>

            <div style={{ position: 'relative' }}>
              <Mail size={18} color="#64748b" style={{ position: 'absolute', top: '16px', left: '14px' }} />
              <input
                type="email"
                placeholder="Uw E-mailadres *"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ width: '100%', padding: '14px 16px 14px 44px', borderRadius: '14px', background: '#ffffff', border: '2px solid #cbd5e1', color: '#0f172a', fontSize: '0.95rem', fontWeight: 700, outline: 'none' }}
              />
            </div>

            <div style={{ position: 'relative' }}>
              <Phone size={18} color="#64748b" style={{ position: 'absolute', top: '16px', left: '14px' }} />
              <input
                type="tel"
                placeholder="Telefoonnummer (Mobiel) *"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                style={{ width: '100%', padding: '14px 16px 14px 44px', borderRadius: '14px', background: '#ffffff', border: '2px solid #cbd5e1', color: '#0f172a', fontSize: '0.95rem', fontWeight: 700, outline: 'none' }}
              />
            </div>
          </div>
        </div>

        {/* Submit Lead Button & Vetting Result Feedback */}
        {leadStatus === 'idle' && (
          <button
            type="submit"
            disabled={isAiVetting}
            className="btn btn-red"
            style={{ width: '100%', padding: '20px', fontSize: '1.15rem' }}
          >
            {isAiVetting ? '🤖 AI Keuring & Analyse Uitvoeren...' : '💶 CLAIM JE CASH BOD & ONTVANG GELD ➔'}
          </button>
        )}

        {/* Status Screen 1: APPROVED VETTING */}
        {leadStatus === 'approved' && (
          <div style={{ padding: '32px', background: '#f0fdf4', border: '3px solid #16a34a', borderRadius: '20px', textAlign: 'center' }}>
            <div className="badge badge-cash" style={{ marginBottom: '12px', fontSize: '0.85rem' }}>
              ✅ AI KEURING GOEDGEKEURD
            </div>
            <CheckCircle2 size={52} color="#16a34a" style={{ margin: '0 auto 12px auto' }} />
            <h3 style={{ fontSize: '1.7rem', color: '#0f172a', marginBottom: '8px', fontWeight: 900 }}>Gefeliciteerd, {fullName}!</h3>
            <p style={{ color: '#334155', fontSize: '1.02rem', marginBottom: '20px', fontWeight: 600, maxWidth: '640px', margin: '0 auto 20px auto' }}>
              Uw aanvraag voor <strong>{activeModel.name} (€ {estimatedCashOffer},- Cash)</strong> is door de eerste AI-keuring goedgekeurd. Onze specialist bekijkt uw {photosCount} foto's en <strong>zoekt persoonlijk telefonisch / via WhatsApp contact op {phone}</strong> binnen 15 minuten voor de definitieve afhaalafspraak in Eindhoven!
            </p>
            <button
              type="button"
              onClick={() => {
                setLeadStatus('idle');
                setPhotosCount(0);
              }}
              className="btn btn-secondary"
              style={{ padding: '10px 22px', fontSize: '0.9rem' }}
            >
              <RefreshCw size={16} /> Nog Een Apparaat Aanmelden
            </button>
          </div>
        )}

        {/* Status Screen 2: REJECTED / NOT APPROVED VETTING */}
        {leadStatus === 'rejected' && (
          <div style={{ padding: '32px', background: '#fef2f2', border: '3px solid #dc2626', borderRadius: '20px', textAlign: 'center' }}>
            <div style={{ background: '#dc2626', color: '#fff', padding: '6px 14px', borderRadius: '999px', fontSize: '0.82rem', fontWeight: 900, display: 'inline-block', marginBottom: '12px' }}>
              ⚠️ AANVRAAG NIET GOEDGEKEURD
            </div>
            <XCircle size={52} color="#dc2626" style={{ margin: '0 auto 12px auto' }} />
            <h3 style={{ fontSize: '1.6rem', color: '#0f172a', marginBottom: '8px', fontWeight: 900 }}>Aanvraag Niet Voldoen Aan Inkoopcriteria</h3>
            <p style={{ color: '#991b1b', fontSize: '0.98rem', marginBottom: '16px', fontWeight: 700, maxWidth: '640px', margin: '0 auto 16px auto' }}>
              {rejectReason}
            </p>
            <p style={{ color: '#475569', fontSize: '0.92rem', marginBottom: '20px', fontWeight: 600, maxWidth: '640px', margin: '0 auto 20px auto' }}>
              Uw account en gegevens (<strong>{email}</strong>) blijven gewoon actief in ons systeem. Heeft u andere apparaten (bijv. MacBooks, iPhones, videokaarten of consoles)? Probeer het gerust opnieuw met een ander apparaat!
            </p>
            <button
              type="button"
              onClick={() => {
                setLeadStatus('idle');
                setPhotosCount(0);
              }}
              className="btn btn-red"
              style={{ padding: '12px 24px', fontSize: '0.92rem' }}
            >
              <RefreshCw size={16} /> Ander Apparaat Aanmelden
            </button>
          </div>
        )}
      </form>
    </div>
  );
}