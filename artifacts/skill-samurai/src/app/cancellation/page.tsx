"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { CheckCircle2, Lock, DollarSign, BookOpen } from "lucide-react";
import logoUrl from "@assets/SkillSamurai_Logo_Full_(1)_(1)_(1)_1776400767722.png";

const MOCK_ENROLLMENT_DATE = "January 15, 2025";
const MOCK_WELCOME_EMAIL_DATE = "January 16, 2025";

const REASONS = [
  "Moving away",
  "Too expensive",
  "Schedule conflict",
  "Child lost interest",
  "Planning to return / taking a break",
  "Other",
];

type RequestType = "cancel" | "pause";
type Branch = "A" | "B";
type OptionChosen = "extend" | "credit" | null;

interface FormState {
  parentName: string;
  childName: string;
  email: string;
  phone: string;
  nextBillingDate: string;
  reasonForLeaving: string;
  otherNote: string;
  pauseMonths: string;
  pauseNote: string;
  optionChosen: OptionChosen;
}

function computeDaysUntil(dateStr: string): number | null {
  if (!dateStr) return null;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const target = new Date(dateStr + "T00:00:00");
  if (isNaN(target.getTime())) return null;
  return Math.round((target.getTime() - today.getTime()) / 86400000);
}

function formatDate(dateStr: string): string {
  if (!dateStr) return "";
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric" });
}

function StepDot({ n, current }: { n: number; current: number }) {
  const done = current > n;
  const active = current === n;
  return (
    <div className="flex flex-col items-center gap-1.5">
      <div
        className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-black font-heading transition-all ${
          done
            ? "bg-secondary text-white"
            : active
            ? "bg-primary text-white"
            : "bg-muted text-muted-foreground"
        }`}
      >
        {done ? "✓" : n}
      </div>
      <span
        className={`text-xs font-semibold ${
          active ? "text-primary" : done ? "text-secondary" : "text-muted-foreground"
        }`}
      >
        {n === 1 ? "Request Type" : n === 2 ? "Details" : "Done"}
      </span>
    </div>
  );
}

function StepBar({ step }: { step: number }) {
  return (
    <div className="flex items-start gap-0 mb-8">
      <StepDot n={1} current={step} />
      <div className={`flex-1 h-0.5 mt-4 transition-all ${step > 1 ? "bg-secondary" : "bg-border"}`} />
      <StepDot n={2} current={step} />
      <div className={`flex-1 h-0.5 mt-4 transition-all ${step > 2 ? "bg-secondary" : "bg-border"}`} />
      <StepDot n={3} current={step} />
    </div>
  );
}

function Field({
  label,
  children,
  hint,
}: {
  label: string;
  children: React.ReactNode;
  hint?: string;
}) {
  return (
    <div className="space-y-1.5">
      <label className="block text-sm font-bold text-foreground">{label}</label>
      {children}
      {hint && <p className="text-xs text-muted-foreground">{hint}</p>}
    </div>
  );
}

const inputCls =
  "w-full border border-border rounded-xl px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 bg-white transition";

export default function CancellationPage() {
  const [step, setStep] = useState(1);
  const [requestType, setRequestType] = useState<RequestType | null>(null);
  const [form, setForm] = useState<FormState>({
    parentName: "",
    childName: "",
    email: "",
    phone: "",
    nextBillingDate: "",
    reasonForLeaving: "",
    otherNote: "",
    pauseMonths: "1",
    pauseNote: "",
    optionChosen: null,
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const daysUntil = useMemo(() => computeDaysUntil(form.nextBillingDate), [form.nextBillingDate]);
  const branch: Branch | null =
    requestType === "cancel" && daysUntil !== null
      ? daysUntil >= 30
        ? "A"
        : "B"
      : null;

  function set(key: keyof FormState, val: string | OptionChosen) {
    setForm((p) => ({ ...p, [key]: val }));
  }

  function commonFieldsFilled() {
    return (
      form.parentName.trim() &&
      form.childName.trim() &&
      form.email.trim() &&
      form.phone.trim()
    );
  }

  function cancelStep2Ready() {
    if (!commonFieldsFilled()) return false;
    if (!form.nextBillingDate || !form.reasonForLeaving) return false;
    if (form.reasonForLeaving === "Other" && !form.otherNote.trim()) return false;
    if (daysUntil === null) return false;
    if (branch === "B" && !form.optionChosen) return false;
    return true;
  }

  function pauseStep2Ready() {
    return !!commonFieldsFilled();
  }

  async function handleSubmit() {
    setSubmitting(true);
    setSubmitError("");
    try {
      const payload = {
        parentName: form.parentName,
        childName: form.childName,
        email: form.email,
        phone: form.phone,
        requestType,
        ...(requestType === "pause"
          ? {
              pauseMonths: parseInt(form.pauseMonths),
              ...(form.pauseNote.trim() ? { notes: form.pauseNote } : {}),
            }
          : {
              nextBillingDate: form.nextBillingDate,
              daysNotice: daysUntil,
              branch,
              optionChosen: branch === "B" ? form.optionChosen : "n/a",
              reasonForLeaving: form.reasonForLeaving,
              ...(form.otherNote.trim() ? { otherNote: form.otherNote } : {}),
            }),
      };
      const res = await fetch("/api/cancellation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Server error");
      setSubmitted(true);
      setStep(3);
    } catch {
      setSubmitError("Something went wrong — please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  // ── Page shell ────────────────────────────────────────────────────────────
  return (
    <>
      {/* Page header — matches site pattern */}
      <section className="bg-secondary py-12 sm:py-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-3">
            Member Services
          </p>
          <h1 className="text-3xl sm:text-4xl font-black font-heading text-white leading-tight tracking-tight">
            {submitted
              ? "Request Received"
              : requestType === "pause"
              ? "Pause Your Enrollment"
              : requestType === "cancel"
              ? "Cancel Your Enrollment"
              : "Cancellation & Pause Request"}
          </h1>
          <p className="mt-3 text-white/70 text-sm sm:text-base max-w-lg mx-auto font-medium">
            {submitted
              ? "We've got your request and will be in touch shortly."
              : "A simple, guided process. We'll walk you through every step."}
          </p>
        </div>
      </section>

      {/* Form area */}
      <section className="bg-background py-12 sm:py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <StepBar step={step} />

          {/* ── Step 3: Confirmation ─────────────────────────────────────── */}
          {submitted && (
            <div className="bg-white rounded-2xl border border-border shadow-sm p-8 space-y-5">
              <div className="flex items-center gap-3 pb-5 border-b border-border">
                <Image src={logoUrl} alt="Skill Samurai Winnipeg" width={140} height={48} className="h-10 w-auto" />
              </div>
              <div className="flex flex-col items-center text-center mb-2">
                <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center text-2xl mb-3">
                  <span className="text-secondary font-black text-xl">✓</span>
                </div>
                <h2 className="text-lg font-black font-heading text-foreground">Your request has been received.</h2>
                <p className="text-sm text-muted-foreground mt-1">
                  A confirmation email has been sent to{" "}
                  <span className="font-semibold text-foreground">{form.email}</span>.
                </p>
              </div>

              <div className="bg-muted rounded-xl p-4 space-y-2 text-sm">
                <p className="font-bold text-foreground mb-1">Request summary</p>
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">{form.parentName}</span> (parent) /{" "}
                  <span className="font-semibold text-foreground">{form.childName}</span> (child)
                </p>
                <p className="text-muted-foreground">
                  Type:{" "}
                  <span className="font-semibold text-foreground">
                    {requestType === "pause" ? "Pause Enrollment" : "Cancel Enrollment"}
                  </span>
                </p>
                {requestType === "pause" && (
                  <p className="text-muted-foreground">
                    Duration:{" "}
                    <span className="font-semibold text-foreground">
                      {form.pauseMonths} month{form.pauseMonths !== "1" ? "s" : ""}
                    </span>
                  </p>
                )}
                {requestType === "cancel" && (
                  <>
                    <p className="text-muted-foreground">
                      Next billing date:{" "}
                      <span className="font-semibold text-foreground">{formatDate(form.nextBillingDate)}</span>
                    </p>
                    <p className="text-muted-foreground">
                      Outcome:{" "}
                      <span className="font-semibold text-foreground">
                        {branch === "A"
                          ? "Enrollment ends on next billing date — no additional charges."
                          : form.optionChosen === "extend"
                          ? "One additional month of classes, then enrollment ends."
                          : "Remaining value held as credit on account."}
                      </span>
                    </p>
                  </>
                )}
                <p className="text-muted-foreground">
                  Submitted:{" "}
                  <span className="font-semibold text-foreground">
                    {new Date().toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric" })}
                  </span>
                </p>
              </div>

              <div className="bg-secondary/5 border border-secondary/20 rounded-xl p-4 text-sm space-y-1.5">
                <p className="font-bold text-secondary text-xs uppercase tracking-wider mb-2">Enrollment record — for your files</p>
                <p className="text-muted-foreground">✓ Cancellation policy initialed on <span className="font-semibold text-foreground">{MOCK_ENROLLMENT_DATE}</span></p>
                <p className="text-muted-foreground">✓ Policy reminder sent via welcome email on <span className="font-semibold text-foreground">{MOCK_WELCOME_EMAIL_DATE}</span></p>
              </div>

              <p className="text-center text-sm text-muted-foreground">
                Questions?{" "}
                <a href="tel:4319982155" className="text-primary font-semibold hover:underline">
                  431-998-2155
                </a>{" "}
                or{" "}
                <a href="mailto:info@skillsamuraiwinnipeg.com" className="text-primary font-semibold hover:underline">
                  info@skillsamuraiwinnipeg.com
                </a>
              </p>
            </div>
          )}

          {/* ── Step 1: Choose type ──────────────────────────────────────── */}
          {!submitted && step === 1 && (
            <div className="bg-white rounded-2xl border border-border shadow-sm p-8 space-y-6">
              <div className="flex items-center gap-3 pb-5 border-b border-border">
                <Image src={logoUrl} alt="Skill Samurai Winnipeg" width={140} height={48} className="h-10 w-auto" />
              </div>
              <div>
                <h2 className="text-xl font-black font-heading text-foreground mb-1">What would you like to do?</h2>
                <p className="text-sm text-muted-foreground">
                  Choose the option that best describes your request. We'll guide you through the next steps.
                </p>
              </div>
              <div className="space-y-3">
                <button
                  onClick={() => { setRequestType("pause"); setStep(2); }}
                  className="w-full text-left p-5 border-2 border-border rounded-2xl hover:border-primary hover:bg-primary/5 transition-all group"
                >
                  <p className="font-black font-heading text-foreground group-hover:text-primary text-base mb-1">
                    Pause Enrollment
                  </p>
                  <p className="text-sm text-muted-foreground mb-3">
                    Hold your child's spot &amp; pause billing for 1–3 months.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary text-xs font-bold rounded-full px-3 py-1"><CheckCircle2 size={12} />No cost to pause</span>
                    <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary text-xs font-bold rounded-full px-3 py-1"><Lock size={12} />Rate locked in</span>
                    <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary text-xs font-bold rounded-full px-3 py-1"><DollarSign size={12} />$99 fee waived</span>
                    <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary text-xs font-bold rounded-full px-3 py-1"><BookOpen size={12} />Progress saved</span>
                  </div>
                </button>
                <button
                  onClick={() => { setRequestType("cancel"); setStep(2); }}
                  className="w-full text-left p-5 border-2 border-border rounded-2xl hover:border-primary hover:bg-primary/5 transition-all group"
                >
                  <p className="font-black font-heading text-foreground group-hover:text-primary text-base mb-1">
                    Cancel Enrollment
                  </p>
                  <p className="text-sm text-muted-foreground">
                    End your child's enrollment. We'll walk you through the policy steps.
                  </p>
                </button>
              </div>
            </div>
          )}

          {/* ── Step 2: Pause ────────────────────────────────────────────── */}
          {!submitted && step === 2 && requestType === "pause" && (
            <div className="bg-white rounded-2xl border border-border shadow-sm p-8 space-y-5">
              <div className="flex items-center gap-3 pb-5 border-b border-border">
                <Image src={logoUrl} alt="Skill Samurai Winnipeg" width={140} height={48} className="h-10 w-auto" />
              </div>
              <div>
                <button
                  onClick={() => setStep(1)}
                  className="text-xs font-semibold text-primary hover:underline mb-3 block"
                >
                  ← Back
                </button>
                <h2 className="text-xl font-black font-heading text-foreground mb-1">Pause Your Enrollment</h2>
              </div>

              <div className="bg-secondary/5 border border-secondary/20 rounded-xl p-4">
                <p className="text-xs font-bold text-secondary uppercase tracking-wider mb-3">What's included with your pause</p>
                <div className="grid grid-cols-4 gap-2 text-center">
                  <div className="bg-white rounded-xl p-3 border border-border flex flex-col items-center gap-1.5">
                    <CheckCircle2 size={18} className="text-secondary" />
                    <p className="text-xs font-bold text-foreground leading-tight">No cost to pause</p>
                  </div>
                  <div className="bg-white rounded-xl p-3 border border-border flex flex-col items-center gap-1.5">
                    <Lock size={18} className="text-secondary" />
                    <p className="text-xs font-bold text-foreground leading-tight">Rate locked in</p>
                  </div>
                  <div className="bg-white rounded-xl p-3 border border-border flex flex-col items-center gap-1.5">
                    <DollarSign size={18} className="text-secondary" />
                    <p className="text-xs font-bold text-foreground leading-tight">$99 fee waived</p>
                  </div>
                  <div className="bg-white rounded-xl p-3 border border-border flex flex-col items-center gap-1.5">
                    <BookOpen size={18} className="text-secondary" />
                    <p className="text-xs font-bold text-foreground leading-tight">Progress saved</p>
                  </div>
                </div>
              </div>

              <Field label="Parent Name">
                <input className={inputCls} placeholder="Full name" value={form.parentName} onChange={(e) => set("parentName", e.target.value)} />
              </Field>
              <Field label="Child Name">
                <input className={inputCls} placeholder="Child's full name" value={form.childName} onChange={(e) => set("childName", e.target.value)} />
              </Field>
              <Field label="Email">
                <input className={inputCls} type="email" placeholder="your@email.com" value={form.email} onChange={(e) => set("email", e.target.value)} />
              </Field>
              <Field label="Phone">
                <input className={inputCls} type="tel" placeholder="204-555-0100" value={form.phone} onChange={(e) => set("phone", e.target.value)} />
              </Field>
              <Field label="How many months would you like to pause?">
                <select className={inputCls} value={form.pauseMonths} onChange={(e) => set("pauseMonths", e.target.value)}>
                  <option value="1">1 month</option>
                  <option value="2">2 months</option>
                  <option value="3">3 months</option>
                </select>
              </Field>
              <Field label="Anything else you'd like us to know? (optional)">
                <textarea
                  className={`${inputCls} resize-none`}
                  rows={3}
                  placeholder="e.g. travel dates, specific restart date, scheduling notes…"
                  value={form.pauseNote}
                  onChange={(e) => set("pauseNote", e.target.value)}
                />
              </Field>

              {submitError && <p className="text-destructive text-sm">{submitError}</p>}

              <button
                onClick={handleSubmit}
                disabled={!pauseStep2Ready() || submitting}
                className="w-full bg-primary hover:bg-primary/90 disabled:opacity-40 text-white font-black font-heading rounded-xl py-3 text-sm transition-colors"
              >
                {submitting ? "Submitting…" : "Request Pause"}
              </button>
            </div>
          )}

          {/* ── Step 2: Cancel ───────────────────────────────────────────── */}
          {!submitted && step === 2 && requestType === "cancel" && (
            <div className="bg-white rounded-2xl border border-border shadow-sm p-8 space-y-5">
              <div className="flex items-center gap-3 pb-5 border-b border-border">
                <Image src={logoUrl} alt="Skill Samurai Winnipeg" width={140} height={48} className="h-10 w-auto" />
              </div>
              <div>
                <button
                  onClick={() => setStep(1)}
                  className="text-xs font-semibold text-primary hover:underline mb-3 block"
                >
                  ← Back
                </button>
                <h2 className="text-xl font-black font-heading text-foreground mb-1">Cancel Your Enrollment</h2>
                <p className="text-sm text-muted-foreground">
                  Fill in the details below and we'll guide you through the next steps based on your billing date.
                </p>
              </div>

              {/* Enrollment record recap */}
              <div className="bg-secondary/5 border border-secondary/20 rounded-xl p-4 space-y-3 text-sm">
                <p className="font-bold text-secondary text-xs uppercase tracking-wider">Cancellation Policy — initialed at enrollment</p>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  Monthly memberships require <strong className="text-foreground">30 days notice</strong> to cancel. We are not able to refund classes missed in prior months. You may cancel by submitting this form or emailing us with the date you'd like to stop.
                </p>
                <p className="text-muted-foreground text-xs">✓ You initialed this policy at registration &nbsp;·&nbsp; ✓ Reminder included in your welcome email</p>
              </div>

              <Field label="Parent Name">
                <input className={inputCls} placeholder="Full name" value={form.parentName} onChange={(e) => set("parentName", e.target.value)} />
              </Field>
              <Field label="Child Name">
                <input className={inputCls} placeholder="Child's full name" value={form.childName} onChange={(e) => set("childName", e.target.value)} />
              </Field>
              <Field label="Email">
                <input className={inputCls} type="email" placeholder="your@email.com" value={form.email} onChange={(e) => set("email", e.target.value)} />
              </Field>
              <Field label="Phone">
                <input className={inputCls} type="tel" placeholder="204-555-0100" value={form.phone} onChange={(e) => set("phone", e.target.value)} />
              </Field>
              <Field label="Reason for Leaving">
                <select className={inputCls} value={form.reasonForLeaving} onChange={(e) => { set("reasonForLeaving", e.target.value); set("otherNote", ""); }}>
                  <option value="">Select a reason…</option>
                  {REASONS.map((r) => <option key={r} value={r}>{r}</option>)}
                </select>
              </Field>

              {/* Nudge: planning to return → suggest pause */}
              {form.reasonForLeaving === "Planning to return / taking a break" && (
                <div className="bg-primary/5 border border-primary/30 rounded-xl p-4 space-y-3">
                  <p className="font-black font-heading text-primary text-sm">Consider pausing instead — it's free and protects your membership.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1.5 bg-white border border-primary/20 text-foreground text-xs font-bold rounded-full px-3 py-1"><CheckCircle2 size={12} className="text-primary" />No cost to pause</span>
                    <span className="inline-flex items-center gap-1.5 bg-white border border-primary/20 text-foreground text-xs font-bold rounded-full px-3 py-1"><Lock size={12} className="text-primary" />Rate locked in</span>
                    <span className="inline-flex items-center gap-1.5 bg-white border border-primary/20 text-foreground text-xs font-bold rounded-full px-3 py-1"><DollarSign size={12} className="text-primary" />$99 fee waived</span>
                    <span className="inline-flex items-center gap-1.5 bg-white border border-primary/20 text-foreground text-xs font-bold rounded-full px-3 py-1"><BookOpen size={12} className="text-primary" />Progress saved</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => { setRequestType("pause"); set("reasonForLeaving", ""); }}
                    className="text-sm font-black font-heading text-white bg-primary hover:bg-primary/90 rounded-xl px-4 py-2 transition-colors"
                  >
                    Switch to Pause Instead →
                  </button>
                </div>
              )}

              {/* Other: free-text note */}
              {form.reasonForLeaving === "Other" && (
                <Field label="Please tell us more">
                  <textarea
                    className={`${inputCls} resize-none`}
                    rows={3}
                    placeholder="Let us know what's going on — we appreciate the feedback."
                    value={form.otherNote}
                    onChange={(e) => set("otherNote", e.target.value)}
                  />
                </Field>
              )}

              <Field label="Next Billing Date" hint="Check your email or bank statement for this date.">
                <input className={inputCls} type="date" value={form.nextBillingDate} onChange={(e) => set("nextBillingDate", e.target.value)} />
              </Field>

              {/* Branch A */}
              {branch === "A" && (
                <div className="bg-secondary/5 border border-secondary/20 rounded-xl p-4 text-sm">
                  <p className="font-bold text-secondary mb-1">Good news — you're providing enough notice.</p>
                  <p className="text-muted-foreground">
                    Your enrollment will end on{" "}
                    <span className="font-semibold text-foreground">{formatDate(form.nextBillingDate)}</span>{" "}
                    with no additional charges.
                  </p>
                </div>
              )}

              {/* Branch B */}
              {branch === "B" && (
                <div className="space-y-3">
                  <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 text-sm">
                    <p className="font-bold text-primary mb-1">Your request is within 30 days of your next billing date.</p>
                    <p className="text-muted-foreground">
                      Per the 30-day notice policy initialed at enrollment (referenced above), please choose one of the following options:
                    </p>
                  </div>
                  <div className="space-y-2">
                    {[
                      {
                        val: "extend" as OptionChosen,
                        label: "Extend One More Month",
                        desc: "Your child continues attending classes for one more billing cycle. No further charges after this final month.",
                      },
                      {
                        val: "credit" as OptionChosen,
                        label: "Credit on File",
                        desc: "The remaining value is held as a credit on your account for future use (re-enrollment or another program). No further charges will occur.",
                      },
                    ].map((opt) => (
                      <button
                        key={opt.val}
                        onClick={() => set("optionChosen", opt.val)}
                        className={`w-full text-left p-4 border-2 rounded-xl transition-all ${
                          form.optionChosen === opt.val
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/40"
                        }`}
                      >
                        <p className={`font-black font-heading text-sm mb-0.5 ${form.optionChosen === opt.val ? "text-primary" : "text-foreground"}`}>
                          {form.optionChosen === opt.val ? "✓ " : ""}{opt.label}
                        </p>
                        <p className="text-xs text-muted-foreground">{opt.desc}</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {submitError && <p className="text-destructive text-sm">{submitError}</p>}

              <button
                onClick={handleSubmit}
                disabled={!cancelStep2Ready() || submitting}
                className="w-full bg-primary hover:bg-primary/90 disabled:opacity-40 text-white font-black font-heading rounded-xl py-3 text-sm transition-colors"
              >
                {submitting
                  ? "Submitting…"
                  : branch === "B"
                  ? "Confirm Selection"
                  : "Confirm Cancellation"}
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
