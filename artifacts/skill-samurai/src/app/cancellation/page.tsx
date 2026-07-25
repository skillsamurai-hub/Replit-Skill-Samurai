"use client";

import { useState, useMemo } from "react";

const MOCK_ENROLLMENT_DATE = "January 15, 2025";
const MOCK_WELCOME_EMAIL_DATE = "January 16, 2025";

const REASONS = [
  "Moving away",
  "Too expensive",
  "Schedule conflict",
  "Child lost interest",
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
  pauseMonths: string;
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
    <div className="flex flex-col items-center gap-1">
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
          done
            ? "bg-emerald-500 text-white"
            : active
            ? "bg-blue-600 text-white"
            : "bg-gray-200 text-gray-400"
        }`}
      >
        {done ? "✓" : n}
      </div>
      <span className={`text-xs font-medium ${active ? "text-blue-600" : done ? "text-emerald-600" : "text-gray-400"}`}>
        {n === 1 ? "Request Type" : n === 2 ? "Details" : "Done"}
      </span>
    </div>
  );
}

function StepBar({ step }: { step: number }) {
  return (
    <div className="flex items-start gap-0 mb-8">
      <StepDot n={1} current={step} />
      <div className={`flex-1 h-0.5 mt-4 transition-all ${step > 1 ? "bg-emerald-400" : "bg-gray-200"}`} />
      <StepDot n={2} current={step} />
      <div className={`flex-1 h-0.5 mt-4 transition-all ${step > 2 ? "bg-emerald-400" : "bg-gray-200"}`} />
      <StepDot n={3} current={step} />
    </div>
  );
}

function Field({
  label, children, hint,
}: { label: string; children: React.ReactNode; hint?: string }) {
  return (
    <div className="space-y-1.5">
      <label className="block text-sm font-semibold text-gray-700">{label}</label>
      {children}
      {hint && <p className="text-xs text-gray-400">{hint}</p>}
    </div>
  );
}

const inputCls =
  "w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition";

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
    pauseMonths: "1",
    optionChosen: null,
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submittedRow, setSubmittedRow] = useState<Record<string, unknown>>({});

  const daysUntil = useMemo(() => computeDaysUntil(form.nextBillingDate), [form.nextBillingDate]);
  const branch: Branch | null =
    requestType === "cancel" && daysUntil !== null
      ? daysUntil >= 30 ? "A" : "B"
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
          ? { pauseMonths: parseInt(form.pauseMonths) }
          : {
              nextBillingDate: form.nextBillingDate,
              daysNotice: daysUntil,
              branch,
              optionChosen: branch === "B" ? form.optionChosen : "n/a",
              reasonForLeaving: form.reasonForLeaving,
            }),
      };
      const res = await fetch("/api/cancellation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Server error");
      const row = await res.json() as Record<string, unknown>;
      setSubmittedRow(row);
      setSubmitted(true);
      setStep(3);
    } catch {
      setSubmitError("Something went wrong — please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  // ── Step 3: Confirmation ──────────────────────────────────────────────────
  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-lg mx-auto">
          <StepBar step={3} />
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
            <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center text-2xl mb-4 mx-auto">✓</div>
            <h1 className="text-xl font-black text-gray-800 text-center mb-1">Your request has been received.</h1>
            <p className="text-sm text-gray-500 text-center mb-6">
              A confirmation email has been sent to{" "}
              <span className="font-semibold text-gray-700">{form.email}</span>.
              If you have questions, contact us at{" "}
              <a href="tel:4319982155" className="text-blue-600 font-semibold">431-998-2155</a>{" "}
              or{" "}
              <a href="mailto:info@skillsamuraiwinnipeg.com" className="text-blue-600 font-semibold">
                info@skillsamuraiwinnipeg.com
              </a>.
            </p>

            <div className="bg-gray-50 rounded-xl border border-gray-200 p-4 space-y-2 text-sm mb-5">
              <p className="font-bold text-gray-700 mb-1">Request summary</p>
              <p><span className="text-gray-400">Name:</span> {form.parentName} (parent) / {form.childName} (child)</p>
              <p><span className="text-gray-400">Request type:</span> {requestType === "pause" ? "Pause Enrollment" : "Cancel Enrollment"}</p>
              {requestType === "pause" && (
                <p><span className="text-gray-400">Pause duration:</span> {form.pauseMonths} month{form.pauseMonths !== "1" ? "s" : ""}</p>
              )}
              {requestType === "cancel" && (
                <>
                  <p><span className="text-gray-400">Next billing date:</span> {formatDate(form.nextBillingDate)}</p>
                  <p><span className="text-gray-400">Days notice:</span> {daysUntil} days</p>
                  <p>
                    <span className="text-gray-400">Outcome:</span>{" "}
                    {branch === "A"
                      ? "Enrollment ends on next billing date with no additional charges."
                      : form.optionChosen === "extend"
                      ? "One additional month of classes, then enrollment ends."
                      : "Remaining value held as credit on account."}
                  </p>
                </>
              )}
              <p><span className="text-gray-400">Submitted:</span> {new Date().toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric" })}</p>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 text-xs text-blue-700 space-y-1.5">
              <p className="font-bold text-blue-800">For your records — Enrollment record</p>
              <p>✓ Cancellation Policy initialed on <strong>{MOCK_ENROLLMENT_DATE}</strong></p>
              <p>✓ Policy reminder sent via welcome email on <strong>{MOCK_WELCOME_EMAIL_DATE}</strong></p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ── Step 1: Choose type ───────────────────────────────────────────────────
  if (step === 1) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-lg mx-auto">
          <StepBar step={1} />
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-black text-base">S</div>
              <div>
                <p className="font-black text-gray-800 text-sm">Skill Samurai Winnipeg</p>
                <p className="text-gray-400 text-xs">Cancellation &amp; Pause Request</p>
              </div>
            </div>
            <h1 className="text-xl font-black text-gray-800 mb-2">What would you like to do?</h1>
            <p className="text-sm text-gray-500 mb-6">
              Please choose the option that best describes your request. Both are straightforward — we'll guide you through the next steps.
            </p>
            <div className="space-y-3">
              <button
                onClick={() => { setRequestType("pause"); setStep(2); }}
                className="w-full text-left p-5 border-2 border-gray-200 rounded-2xl hover:border-blue-400 hover:bg-blue-50 transition-all group"
              >
                <p className="font-bold text-gray-800 group-hover:text-blue-700 text-base mb-1">⏸ Pause Enrollment</p>
                <p className="text-sm text-gray-500">Hold your child's spot and pause billing for 1–3 months.</p>
              </button>
              <button
                onClick={() => { setRequestType("cancel"); setStep(2); }}
                className="w-full text-left p-5 border-2 border-gray-200 rounded-2xl hover:border-blue-400 hover:bg-blue-50 transition-all group"
              >
                <p className="font-bold text-gray-800 group-hover:text-blue-700 text-base mb-1">✖ Cancel Enrollment</p>
                <p className="text-sm text-gray-500">End your child's enrollment. We'll walk you through the policy steps.</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ── Step 2 ────────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-lg mx-auto">
        <StepBar step={2} />

        {/* Pause form */}
        {requestType === "pause" && (
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 space-y-5">
            <div>
              <button onClick={() => setStep(1)} className="text-xs text-blue-600 hover:underline mb-3 block">← Back</button>
              <h1 className="text-xl font-black text-gray-800 mb-1">Pause Enrollment</h1>
              <p className="text-sm text-gray-500">
                Your child's spot will be held and billing will pause during this time. No further charges will occur until your pause period ends or you choose to restart sooner.
              </p>
            </div>

            <div className="bg-teal-50 border border-teal-100 rounded-xl p-4 text-sm text-teal-700">
              Your child's spot will be held and billing will pause during this time. No further charges will occur until your pause period ends or you choose to restart sooner.
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

            {submitError && <p className="text-red-500 text-sm">{submitError}</p>}

            <button
              onClick={handleSubmit}
              disabled={!pauseStep2Ready() || submitting}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-40 text-white font-bold rounded-xl py-3 text-sm transition-colors"
            >
              {submitting ? "Submitting…" : "Request Pause"}
            </button>
          </div>
        )}

        {/* Cancel form */}
        {requestType === "cancel" && (
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 space-y-5">
            <div>
              <button onClick={() => setStep(1)} className="text-xs text-blue-600 hover:underline mb-3 block">← Back</button>
              <h1 className="text-xl font-black text-gray-800 mb-1">Cancel Enrollment</h1>
              <p className="text-sm text-gray-500">Fill in the details below and we'll guide you through the next steps based on your billing date.</p>
            </div>

            {/* Enrollment record recap */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2 text-sm text-slate-700">
              <p className="font-bold text-slate-800 mb-1">Your Enrollment Record</p>
              <p className="text-slate-600 text-xs mb-2">For reference, here's what's on file for your account:</p>
              <p>✓ You initialed the Cancellation Policy during online enrollment on <strong>{MOCK_ENROLLMENT_DATE}</strong>, which states: <em>"Monthly memberships require 30 days cancellation notice... we are not able to refund you for any classes that you have missed in the months before."</em></p>
              <p>✓ A reminder of this policy was also included in your welcome email on <strong>{MOCK_WELCOME_EMAIL_DATE}</strong>.</p>
              <p className="text-slate-500 text-xs mt-1">This form will walk you through your next steps based on that policy.</p>
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
              <select className={inputCls} value={form.reasonForLeaving} onChange={(e) => set("reasonForLeaving", e.target.value)}>
                <option value="">Select a reason…</option>
                {REASONS.map((r) => <option key={r} value={r}>{r}</option>)}
              </select>
            </Field>
            <Field label="Next Billing Date" hint="Check your email or bank statement for this date.">
              <input className={inputCls} type="date" value={form.nextBillingDate} onChange={(e) => set("nextBillingDate", e.target.value)} />
            </Field>

            {/* Branch logic */}
            {branch === "A" && (
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-sm text-emerald-800">
                <p className="font-bold mb-1">Good news — you're providing enough notice.</p>
                <p>Your enrollment will end on <strong>{formatDate(form.nextBillingDate)}</strong> with no additional charges.</p>
              </div>
            )}

            {branch === "B" && (
              <div className="space-y-3">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-800">
                  <p className="font-bold mb-1">Your request is within 30 days of your next billing date.</p>
                  <p>Per the 30-day notice policy initialed at enrollment (referenced above), please choose one of the following options:</p>
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
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-200 hover:border-blue-300"
                      }`}
                    >
                      <p className={`font-bold text-sm mb-0.5 ${form.optionChosen === opt.val ? "text-blue-700" : "text-gray-800"}`}>
                        {form.optionChosen === opt.val ? "✓ " : ""}{opt.label}
                      </p>
                      <p className="text-xs text-gray-500">{opt.desc}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {submitError && <p className="text-red-500 text-sm">{submitError}</p>}

            <button
              onClick={handleSubmit}
              disabled={!cancelStep2Ready() || submitting}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-40 text-white font-bold rounded-xl py-3 text-sm transition-colors"
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
    </div>
  );
}
