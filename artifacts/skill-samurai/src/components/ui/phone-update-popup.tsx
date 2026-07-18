'use client';

import { useEffect, useRef, useState } from 'react';
import { X, Phone, ExternalLink, CheckCircle2, Mail, UserPlus } from 'lucide-react';

const STORAGE_KEY = 'ss_phone_popup_dismissed';
const DISMISS_DAYS = 7;

export default function PhoneUpdatePopup() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const dismissed = localStorage.getItem(STORAGE_KEY);
    if (dismissed) {
      const ts = Number(dismissed);
      if (Date.now() - ts < DISMISS_DAYS * 24 * 60 * 60 * 1000) return;
    }
    const t = setTimeout(() => {
      setMounted(true);
      requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
    }, 1500);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close(); };
    document.addEventListener('keydown', onKey);
    if (visible) document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [mounted, visible]);

  useEffect(() => {
    if (visible) closeBtnRef.current?.focus();
  }, [visible]);

  function close() {
    setVisible(false);
    document.body.style.overflow = '';
    localStorage.setItem(STORAGE_KEY, String(Date.now()));
    setTimeout(() => setMounted(false), 350);
  }

  if (!mounted) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="ss-phone-popup-title"
      aria-describedby="ss-phone-popup-desc"
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 transition-opacity duration-300"
      style={{ opacity: visible ? 1 : 0 }}
      onClick={(e) => { if (e.target === e.currentTarget) close(); }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={close} aria-hidden="true" />

      {/* Panel */}
      <div
        className="relative z-10 w-full max-w-lg rounded-3xl bg-white shadow-2xl overflow-hidden transition-all duration-300"
        style={{
          transform: visible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.97)',
          opacity: visible ? 1 : 0,
        }}
      >
        {/* Pink top accent bar */}
        <div className="h-1 bg-primary w-full" />

        {/* ── Header (navy) ── */}
        <div className="bg-secondary px-6 pt-5 pb-6">
          {/* Close button */}
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/20">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-0.5">
                  Important Update
                </p>
                <h2
                  id="ss-phone-popup-title"
                  className="text-lg font-extrabold text-white leading-tight font-heading"
                >
                  We&apos;ve Updated Our Direct Phone Number
                </h2>
              </div>
            </div>
            <button
              ref={closeBtnRef}
              type="button"
              onClick={close}
              aria-label="Close"
              className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <p id="ss-phone-popup-desc" className="text-sm text-white/70 leading-relaxed">
            To better serve our Skill Samurai families, we&apos;ve updated our direct phone number.
          </p>
        </div>

        {/* ── Body (white) ── */}
        <div className="px-6 py-6 flex flex-col gap-5">

          {/* Phone number card */}
          <div className="rounded-2xl border-2 border-border bg-muted/40 px-5 py-4">
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">
              Our New Direct Number
            </p>
            <p className="text-4xl font-black text-primary font-heading tracking-tight">
              (431) 998-2155
            </p>
          </div>

          {/* Save contact CTA */}
          <a
            href="/skill-samurai-winnipeg.vcf"
            download="Skill Samurai Winnipeg.vcf"
            aria-label="Save Skill Samurai Winnipeg as a contact"
            className="flex items-center justify-center gap-2 rounded-xl border-2 border-primary/30 bg-primary/5 px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/10 hover:border-primary/50"
          >
            <UserPlus className="h-4 w-4" />
            Save Contact to Your Phone
          </a>

          {/* Previous number note */}
          <p className="text-sm text-muted-foreground leading-relaxed">
            If you have our previous number{' '}
            <span className="font-semibold text-foreground">(204) 818-2155</span>{' '}
            saved, please take a moment to update your contacts.
          </p>

          {/* Caller ID reassurance */}
          <div className="flex items-start gap-3 rounded-2xl border border-primary/20 bg-primary/5 px-4 py-3">
            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <p className="text-sm text-foreground leading-relaxed">
              When we call, your caller ID will now display{' '}
              <strong className="font-bold text-secondary">&quot;Skill Samurai Winnipeg&quot;</strong>
              , making it easier to recognize our calls.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="tel:+14319982155"
              aria-label="Call Skill Samurai Winnipeg at 431-998-2155"
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-primary/90 font-heading"
            >
              <Phone className="h-4 w-4" />
              Call Us
            </a>
            <a
              href="mailto:winnipeg@skillsamurai.com"
              aria-label="Email Skill Samurai Winnipeg"
              className="flex flex-1 items-center justify-center gap-2 rounded-xl border-2 border-border px-5 py-3 text-sm font-semibold text-secondary transition-colors hover:border-primary hover:text-primary"
            >
              <Mail className="h-4 w-4" />
              Email Us
            </a>
          </div>
          <a
            href="https://conta.cc/45a9Mqh"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View the announcement email we sent to all families, opens in new tab"
            className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            View the Email We Sent to All Families
          </a>

          {/* Footer note */}
          <p className="text-center text-xs text-muted-foreground leading-relaxed">
            We&apos;re still the same Skill Samurai Winnipeg team — just with a new direct phone number to make it easier to stay connected.
          </p>
        </div>
      </div>
    </div>
  );
}
