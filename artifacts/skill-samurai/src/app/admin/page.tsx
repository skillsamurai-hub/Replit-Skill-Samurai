"use client";

import { useState, useEffect, useCallback } from "react";

type SlotRow = {
  id: number;
  location_id: string;
  day: string;
  time: string;
  spots_left: number;
  waitlist_url: string | null;
};

const LOCATIONS = [
  { id: "north-east", label: "North East" },
  { id: "seven-oaks", label: "Seven Oaks" },
] as const;

const DAY_ORDER = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

function statusBadge(n: number) {
  if (n === 0) return "bg-red-100 text-red-600";
  if (n <= 3) return "bg-orange-100 text-orange-600";
  return "bg-green-100 text-green-700";
}

export default function AdminPage() {
  const [inputPw, setInputPw] = useState("");
  const [password, setPassword] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [verifyError, setVerifyError] = useState("");
  const [verifying, setVerifying] = useState(false);

  const [slots, setSlots] = useState<SlotRow[]>([]);
  const [edits, setEdits] = useState<Record<number, Partial<{ spots_left: number; waitlist_url: string | null }>>>({});
  const [saving, setSaving] = useState<Set<number>>(new Set());
  const [savedIds, setSavedIds] = useState<Set<number>>(new Set());

  const [activeTab, setActiveTab] = useState<"north-east" | "seven-oaks">("north-east");
  const [globalUrl, setGlobalUrl] = useState("");
  const [applyingGlobal, setApplyingGlobal] = useState(false);
  const [seeding, setSeeding] = useState(false);
  const [seedMsg, setSeedMsg] = useState("");

  const loadSlots = useCallback(async () => {
    try {
      const res = await fetch("/api/slots");
      if (res.ok) setSlots(await res.json());
    } catch {}
  }, []);

  const tryVerify = useCallback(
    async (pw: string, silent = false) => {
      if (!silent) setVerifying(true);
      setVerifyError("");
      try {
        const res = await fetch("/api/admin/verify", {
          headers: { "x-admin-password": pw },
        });
        if (res.ok) {
          setPassword(pw);
          sessionStorage.setItem("ss-admin-pw", pw);
          setIsVerified(true);
          loadSlots();
        } else {
          sessionStorage.removeItem("ss-admin-pw");
          if (!silent) setVerifyError("Incorrect password");
        }
      } catch {
        if (!silent) setVerifyError("Connection error — try again");
      } finally {
        if (!silent) setVerifying(false);
      }
    },
    [loadSlots],
  );

  useEffect(() => {
    const saved = sessionStorage.getItem("ss-admin-pw");
    if (saved) tryVerify(saved, true);
  }, [tryVerify]);

  function getVal<K extends keyof SlotRow>(slot: SlotRow, key: K): SlotRow[K] {
    return (edits[slot.id]?.[key as keyof typeof edits[number]] ?? slot[key]) as SlotRow[K];
  }

  function editSlot(id: number, key: "spots_left" | "waitlist_url", value: number | string | null) {
    setEdits((prev) => ({ ...prev, [id]: { ...prev[id], [key]: value } }));
  }

  function isDirty(id: number) {
    return edits[id] !== undefined && Object.keys(edits[id]).length > 0;
  }

  async function saveSlot(slot: SlotRow) {
    const changes = edits[slot.id];
    if (!changes) return;
    setSaving((p) => new Set(p).add(slot.id));
    try {
      const body: Record<string, unknown> = {};
      if (changes.spots_left !== undefined) body.spotsLeft = changes.spots_left;
      if (changes.waitlist_url !== undefined) body.waitlistUrl = changes.waitlist_url;
      const res = await fetch(`/api/slots/${slot.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json", "x-admin-password": password },
        body: JSON.stringify(body),
      });
      if (res.ok) {
        const updated: SlotRow = await res.json();
        setSlots((p) => p.map((s) => (s.id === slot.id ? updated : s)));
        setEdits((p) => { const n = { ...p }; delete n[slot.id]; return n; });
        setSavedIds((p) => new Set(p).add(slot.id));
        setTimeout(() => setSavedIds((p) => { const n = new Set(p); n.delete(slot.id); return n; }), 2000);
      }
    } finally {
      setSaving((p) => { const n = new Set(p); n.delete(slot.id); return n; });
    }
  }

  async function applyGlobalUrl() {
    if (!globalUrl) return;
    setApplyingGlobal(true);
    try {
      await Promise.all(
        slots.map((s) =>
          fetch(`/api/slots/${s.id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json", "x-admin-password": password },
            body: JSON.stringify({ waitlistUrl: globalUrl }),
          }),
        ),
      );
      setGlobalUrl("");
      await loadSlots();
    } finally {
      setApplyingGlobal(false);
    }
  }

  async function seedData() {
    setSeeding(true);
    setSeedMsg("");
    try {
      const res = await fetch("/api/admin/seed", {
        method: "POST",
        headers: { "x-admin-password": password },
      });
      const data = await res.json();
      setSeedMsg(data.message ?? "Done");
      await loadSlots();
      setTimeout(() => setSeedMsg(""), 3000);
    } finally {
      setSeeding(false);
    }
  }

  if (!isVerified) {
    return (
      <div className="min-h-screen bg-[hsl(218_42%_29%)] flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-[hsl(335_84%_59%)] rounded-xl flex items-center justify-center text-white font-black text-base">S</div>
            <div>
              <p className="font-black text-[hsl(218_42%_29%)] text-sm">Skill Samurai Winnipeg</p>
              <p className="text-gray-400 text-xs">Admin Panel</p>
            </div>
          </div>
          <h1 className="text-xl font-black text-[hsl(218_42%_29%)] mb-5">Sign in</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              tryVerify(inputPw);
            }}
          >
            <input
              type="password"
              placeholder="Admin password"
              value={inputPw}
              onChange={(e) => setInputPw(e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-[hsl(335_84%_59%)] mb-3"
              autoFocus
            />
            {verifyError && <p className="text-red-500 text-xs mb-3">{verifyError}</p>}
            <button
              type="submit"
              disabled={verifying || !inputPw}
              className="w-full bg-[hsl(335_84%_59%)] hover:bg-[hsl(335_84%_52%)] disabled:opacity-50 text-white font-bold rounded-xl py-3 text-sm transition-colors"
            >
              {verifying ? "Checking…" : "Sign in"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  const tabSlots = [...slots.filter((s) => s.location_id === activeTab)].sort(
    (a, b) => DAY_ORDER.indexOf(a.day) - DAY_ORDER.indexOf(b.day) || a.time.localeCompare(b.time),
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[hsl(218_42%_29%)] border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[hsl(335_84%_59%)] rounded-lg flex items-center justify-center text-white font-black text-sm">S</div>
            <p className="text-white font-black text-sm">Class Availability Admin</p>
          </div>
          <button
            onClick={() => {
              setIsVerified(false);
              setPassword("");
              sessionStorage.removeItem("ss-admin-pw");
            }}
            className="text-white/50 hover:text-white text-xs transition-colors"
          >
            Sign out
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">

        {/* Global waitlist URL */}
        <div className="bg-white rounded-2xl border border-gray-200 p-5">
          <h2 className="text-sm font-black text-[hsl(218_42%_29%)] mb-1">Waitlist Form URL (GHL or other)</h2>
          <p className="text-gray-400 text-xs mb-3">
            Paste your GHL form link here and click <strong>Apply to All</strong> to set it on every slot at once. You can also override it per row below.
          </p>
          <div className="flex gap-2">
            <input
              type="url"
              placeholder="https://…"
              value={globalUrl}
              onChange={(e) => setGlobalUrl(e.target.value)}
              className="flex-1 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-[hsl(335_84%_59%)]"
            />
            <button
              onClick={applyGlobalUrl}
              disabled={applyingGlobal || !globalUrl}
              className="bg-[hsl(335_84%_59%)] hover:bg-[hsl(335_84%_52%)] disabled:opacity-50 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              {applyingGlobal ? "Applying…" : "Apply to All"}
            </button>
          </div>
        </div>

        {/* Location tabs + seed */}
        <div className="flex items-center gap-2">
          {LOCATIONS.map((loc) => (
            <button
              key={loc.id}
              onClick={() => setActiveTab(loc.id)}
              className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-colors ${
                activeTab === loc.id
                  ? "bg-[hsl(218_42%_29%)] text-white"
                  : "bg-white border border-gray-200 text-gray-500 hover:text-gray-800"
              }`}
            >
              {loc.label}
            </button>
          ))}
          <div className="flex-1" />
          <button
            onClick={() => { void loadSlots(); }}
            className="text-xs text-gray-400 hover:text-gray-600 px-3 py-2 transition-colors"
          >
            ↺ Refresh
          </button>
          <button
            onClick={seedData}
            disabled={seeding}
            className="text-xs text-gray-400 hover:text-gray-600 px-3 py-2 transition-colors disabled:opacity-50"
          >
            {seeding ? "Seeding…" : seedMsg || "Seed default slots"}
          </button>
        </div>

        {/* Slot table */}
        {slots.length === 0 ? (
          <div className="bg-white rounded-2xl border border-gray-200 p-10 text-center">
            <p className="text-gray-400 text-sm mb-4">No slots found. Seed the default data to get started.</p>
            <button
              onClick={seedData}
              disabled={seeding}
              className="bg-[hsl(335_84%_59%)] hover:bg-[hsl(335_84%_52%)] disabled:opacity-50 text-white font-bold px-6 py-3 rounded-xl text-sm"
            >
              {seeding ? "Seeding…" : "Seed Default Slots"}
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
            {/* Table header */}
            <div className="grid grid-cols-[100px_90px_160px_1fr_90px] items-center gap-3 px-5 py-3 border-b border-gray-100 text-xs font-bold text-gray-400 uppercase tracking-widest">
              <span>Day</span>
              <span>Time</span>
              <span>Spots Left</span>
              <span>Waitlist URL</span>
              <span />
            </div>

            <div className="divide-y divide-gray-100">
              {tabSlots.map((slot) => {
                const spotsVal = getVal(slot, "spots_left") as number;
                const urlVal = (getVal(slot, "waitlist_url") as string | null) ?? "";
                const dirty = isDirty(slot.id);
                const isSaving = saving.has(slot.id);
                const isSaved = savedIds.has(slot.id);

                return (
                  <div
                    key={slot.id}
                    className={`grid grid-cols-[100px_90px_160px_1fr_90px] items-center gap-3 px-5 py-3 transition-colors ${dirty ? "bg-[hsl(335_84%_59%)]/5" : ""}`}
                  >
                    <span className="text-sm font-bold text-[hsl(218_42%_29%)]">{slot.day}</span>
                    <span className="text-sm text-gray-500">{slot.time}</span>

                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        min={0}
                        value={spotsVal}
                        onChange={(e) => editSlot(slot.id, "spots_left", parseInt(e.target.value) || 0)}
                        className="w-14 border border-gray-200 rounded-lg px-2 py-1.5 text-sm text-center text-gray-800 focus:outline-none focus:border-[hsl(335_84%_59%)]"
                      />
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full whitespace-nowrap ${statusBadge(spotsVal)}`}>
                        {spotsVal === 0 ? "Full" : `${spotsVal} left`}
                      </span>
                    </div>

                    <input
                      type="text"
                      placeholder="Waitlist URL (optional)"
                      value={urlVal}
                      onChange={(e) => editSlot(slot.id, "waitlist_url", e.target.value || null)}
                      className="w-full border border-gray-200 rounded-lg px-3 py-1.5 text-xs text-gray-700 placeholder:text-gray-300 focus:outline-none focus:border-[hsl(335_84%_59%)] min-w-0"
                    />

                    <button
                      onClick={() => { void saveSlot(slot); }}
                      disabled={!dirty || isSaving}
                      className={`text-xs font-bold px-3 py-1.5 rounded-lg transition-all whitespace-nowrap ${
                        isSaved
                          ? "bg-green-100 text-green-700"
                          : dirty
                          ? "bg-[hsl(335_84%_59%)] text-white hover:bg-[hsl(335_84%_52%)]"
                          : "opacity-0 pointer-events-none"
                      } disabled:opacity-50`}
                    >
                      {isSaving ? "Saving…" : isSaved ? "✓ Saved" : "Save"}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        <p className="text-center text-gray-300 text-xs">
          Changes take effect immediately on the live site.
        </p>
      </div>
    </div>
  );
}
