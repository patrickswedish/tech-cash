'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShieldCheck, Zap, ShoppingBag, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link href="/" className="nav-logo">
          <div style={{ background: 'linear-gradient(135deg, #3be0f7, #10b981)', padding: '10px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Zap size={22} color="#051421" />
          </div>
          <div>
            <span>TechCash</span>
            <span style={{ fontSize: '0.75rem', color: 'var(--cyan)', display: 'block', fontWeight: 600, marginTop: '-4px' }}>EINDHOVEN</span>
          </div>
        </Link>

        <nav>
          <ul className="nav-links">
            <li>
              <Link href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/verkopen" className={`nav-link ${pathname === '/verkopen' ? 'active' : ''}`}>
                Tech Verkopen (Cash)
              </Link>
            </li>
            <li>
              <Link href="/winkel" className={`nav-link ${pathname === '/winkel' ? 'active' : ''}`}>
                Refurbished Shop
              </Link>
            </li>
          </ul>
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div className="badge badge-cyan">
            <ShieldCheck size={14} /> DOR Geverifieerd
          </div>
          <Link href="/verkopen" className="btn btn-primary" style={{ padding: '10px 20px', fontSize: '0.9rem' }}>
            Direct Cash Aanvragen <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </header>
  );
}