'use client';

import { useEffect, useRef, useState } from 'react';
import { X, Phone, ExternalLink, CheckCircle } from 'lucide-react';

const STORAGE_KEY = 'ss_phone_popup_dismissed';
const DISMISS_DAYS = 7;

export default function PhoneUpdatePopup() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const dismissed = localStorage.getItem(STORAGE_KEY);
    if (dismissed) {
      const ts = Number(dismissed);
      if (Date.now() - ts < DISMISS_DAYS * 24 * 60 * 60 * 1000) return;
    }
    const t = setTimeout(() => {
      setMounted(true);
      requestAnimationFrame(() => setVisible(true));
    }, 1500);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [mounted]);

  useEffect(() => {
    if (visible) {
      closeBtnRef.current?.focus();
    }
  }, [visible]);

  function close() {
    setVisible(false);
    localStorage.setItem(STORAGE_KEY, String(Date.now()));
    setTimeout(() => setMounted(false), 350);
  }

  function handleOverlayClick(e: React.MouseEvent) {
    if (e.target === overlayRef.current) close();
  }

  if (!mounted) return null;

  return (
    <div
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="ss-popup-title"
      aria-describedby="ss-popup-desc"
      onClick={handleOverlayClick}
      className="ss-popup-overlay"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        backgroundColor: 'rgba(10, 20, 50, 0.65)',
        backdropFilter: 'blur(4px)',
        transition: 'opacity 0.35s ease',
        opacity: visible ? 1 : 0,
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '560px',
          maxHeight: '90dvh',
          overflowY: 'auto',
          background: 'hsl(218 42% 15%)',
          borderRadius: '20px',
          boxShadow: '0 24px 64px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.07)',
          padding: '0',
          transition: 'transform 0.35s cubic-bezier(0.34,1.56,0.64,1), opacity 0.35s ease',
          transform: visible ? 'translateY(0) scale(1)' : 'translateY(24px) scale(0.97)',
          opacity: visible ? 1 : 0,
          position: 'relative',
        }}
      >
        {/* Top accent bar */}
        <div style={{
          height: '4px',
          borderRadius: '20px 20px 0 0',
          background: 'linear-gradient(90deg, hsl(335 84% 59%), hsl(218 42% 50%), hsl(335 84% 59%))',
        }} />

        {/* Close button */}
        <button
          ref={closeBtnRef}
          onClick={close}
          aria-label="Close popup"
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            border: '1px solid rgba(255,255,255,0.15)',
            background: 'rgba(255,255,255,0.08)',
            color: 'rgba(255,255,255,0.7)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background 0.2s, color 0.2s',
            zIndex: 1,
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.18)';
            (e.currentTarget as HTMLButtonElement).style.color = '#fff';
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.08)';
            (e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.7)';
          }}
        >
          <X size={16} />
        </button>

        <div style={{ padding: '28px 28px 32px' }}>
          {/* Headline */}
          <div style={{ marginBottom: '20px', paddingRight: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
              <span style={{ fontSize: '24px', lineHeight: 1 }}>📞</span>
              <h2
                id="ss-popup-title"
                style={{
                  margin: 0,
                  fontSize: 'clamp(1.1rem, 4vw, 1.35rem)',
                  fontWeight: 800,
                  color: '#fff',
                  lineHeight: 1.25,
                  fontFamily: 'var(--app-font-heading, sans-serif)',
                }}
              >
                We&apos;ve Updated Our Direct Phone Number
              </h2>
            </div>
            <p
              id="ss-popup-desc"
              style={{
                margin: 0,
                fontSize: '0.9rem',
                color: 'rgba(255,255,255,0.65)',
                lineHeight: 1.5,
              }}
            >
              To better serve our Skill Samurai families, we&apos;ve updated our direct phone number.
            </p>
          </div>

          {/* Phone number card */}
          <div style={{
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '14px',
            padding: '16px 20px',
            marginBottom: '16px',
          }}>
            <p style={{
              margin: '0 0 4px',
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.45)',
            }}>
              Our New Direct Number
            </p>
            <p style={{
              margin: 0,
              fontSize: 'clamp(1.6rem, 6vw, 2rem)',
              fontWeight: 900,
              color: 'hsl(335 84% 72%)',
              letterSpacing: '-0.01em',
              fontFamily: 'var(--app-font-heading, sans-serif)',
            }}>
              (431) 998-2155
            </p>
          </div>

          {/* Previous number note */}
          <p style={{
            margin: '0 0 16px',
            fontSize: '0.875rem',
            color: 'rgba(255,255,255,0.6)',
            lineHeight: 1.55,
          }}>
            If you have our previous number{' '}
            <span style={{ color: 'rgba(255,255,255,0.8)', fontWeight: 600 }}>(204) 818-2155</span>{' '}
            saved, please take a moment to update your contacts.
          </p>

          {/* Reassurance banner */}
          <div style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '10px',
            background: 'rgba(255,255,255,0.07)',
            border: '1px solid rgba(255,255,255,0.12)',
            borderLeft: '3px solid hsl(335 84% 59%)',
            borderRadius: '10px',
            padding: '12px 14px',
            marginBottom: '24px',
          }}>
            <CheckCircle size={16} style={{ color: 'hsl(335 84% 65%)', flexShrink: 0, marginTop: '2px' }} />
            <p style={{
              margin: 0,
              fontSize: '0.85rem',
              color: 'rgba(255,255,255,0.8)',
              lineHeight: 1.5,
            }}>
              When we call, your caller ID will now display{' '}
              <strong style={{ color: '#fff' }}>&quot;Skill Samurai Winnipeg&quot;</strong>
              , making it easier to recognize our calls.
            </p>
          </div>

          {/* Buttons */}
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a
              href="tel:+14319982155"
              aria-label="Call or text Skill Samurai Winnipeg at 431-998-2155"
              style={{
                flex: '1 1 auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '13px 20px',
                borderRadius: '10px',
                background: 'hsl(335 84% 59%)',
                color: '#fff',
                fontWeight: 700,
                fontSize: '0.95rem',
                textDecoration: 'none',
                transition: 'background 0.2s, transform 0.15s',
                fontFamily: 'var(--app-font-heading, sans-serif)',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'hsl(335 84% 52%)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'hsl(335 84% 59%)')}
            >
              <Phone size={15} />
              Call or Text Us
            </a>
            <a
              href="https://conta.cc/45a9Mqh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Read our parent update (opens in new tab)"
              style={{
                flex: '1 1 auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '13px 20px',
                borderRadius: '10px',
                background: 'transparent',
                border: '1.5px solid rgba(255,255,255,0.2)',
                color: 'rgba(255,255,255,0.85)',
                fontWeight: 600,
                fontSize: '0.9rem',
                textDecoration: 'none',
                transition: 'border-color 0.2s, color 0.2s',
                fontFamily: 'var(--app-font-heading, sans-serif)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.45)';
                e.currentTarget.style.color = '#fff';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                e.currentTarget.style.color = 'rgba(255,255,255,0.85)';
              }}
            >
              <ExternalLink size={14} />
              Read Our Parent Update
            </a>
          </div>

          {/* Footer note */}
          <p style={{
            margin: '18px 0 0',
            fontSize: '0.78rem',
            color: 'rgba(255,255,255,0.35)',
            textAlign: 'center',
            lineHeight: 1.5,
          }}>
            We&apos;re still the same Skill Samurai Winnipeg team — just with a new direct phone number to make it easier to stay connected.
          </p>
        </div>
      </div>
    </div>
  );
}
