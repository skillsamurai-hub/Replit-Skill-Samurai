"use client";

import { useState, useEffect, useCallback } from "react";

type CancellationRow = {
  id: number;
  created_at: string;
  parent_name: string;
  child_name: string;
  email: string;
  phone: string;
  request_type: string;
  next_billing_date: string | null;
  days_notice: number | null;
  branch: string | null;
  option_chosen: string | null;
  reason_for_leaving: string | null;
  pause_months: number | null;
  enrollment_initial_date: string;
  welcome_email_date: string;
};

type SortKey = keyof CancellationRow;

function typeBadge(type: string) {
  return type === "pause"
    ? "bg-accent/30 text-secondary font-bold"
    : "bg-primary/10 text-primary font-bold";
}

function branchBadge(branch: string | null) {
  if (!branch) return "";
  return branch === "A"
    ? "bg-secondary/10 text-secondary font-bold"
    : "bg-primary/10 text-primary font-bold";
}

function fmt(dt: string) {
  return new Date(dt).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function CancellationAdminPage() {
  const [inputPw, setInputPw] = useState("");
  const [password, setPassword] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [verifyError, setVerifyError] = useState("");
  const [verifying, setVerifying] = useState(false);

  const [rows, setRows] = useState<CancellationRow[]>([]);
  const [loading, setLoading] = useState(false);
  const [sortKey, setSortKey] = useState<SortKey>("created_at");
  const [sortAsc, setSortAsc] = useState(false);
  const [filterType, setFilterType] = useState<"all" | "cancel" | "pause">("all");
  const [expanded, setExpanded] = useState<number | null>(null);

  const loadRows = useCallback(async (pw: string) => {
    setLoading(true);
    try {
      const res = await fetch("/api/cancellation", {
        headers: { "x-admin-password": pw },
      });
      if (res.ok) setRows((await res.json()) as CancellationRow[]);
    } finally {
      setLoading(false);
    }
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
          loadRows(pw);
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
    [loadRows],
  );

  useEffect(() => {
    const saved = sessionStorage.getItem("ss-admin-pw");
    if (saved) tryVerify(saved, true);
  }, [tryVerify]);

  function toggleSort(key: SortKey) {
    if (sortKey === key) setSortAsc((v) => !v);
    else {
      setSortKey(key);
      setSortAsc(false);
    }
  }

  const displayed = [...rows]
    .filter((r) => filterType === "all" || r.request_type === filterType)
    .sort((a, b) => {
      const av = a[sortKey] ?? "";
      const bv = b[sortKey] ?? "";
      const cmp = String(av).localeCompare(String(bv), undefined, { numeric: true });
      return sortAsc ? cmp : -cmp;
    });

  function SortTh({ label, col }: { label: string; col: SortKey }) {
    const active = sortKey === col;
    return (
      <th
        className="px-4 py-3 text-left text-xs font-bold text-white/40 uppercase tracking-widest cursor-pointer select-none hover:text-white/70 whitespace-nowrap transition-colors"
        onClick={() => toggleSort(col)}
      >
        {label} {active ? (sortAsc ? "↑" : "↓") : ""}
      </th>
    );
  }

  /* ── Sign-in screen ─────────────────────────────────────────────────────── */
  if (!isVerified) {
    return (
      <div className="min-h-screen bg-secondary flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-sm border border-border">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-black font-heading text-base">
              S
            </div>
            <div>
              <p className="font-black font-heading text-foreground text-sm">Skill Samurai Winnipeg</p>
              <p className="text-muted-foreground text-xs">Cancellation Admin</p>
            </div>
          </div>
          <h1 className="text-xl font-black font-heading text-foreground mb-5">Sign in</h1>
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
              className="w-full border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 mb-3 bg-white transition"
              autoFocus
            />
            {verifyError && <p className="text-destructive text-xs mb-3">{verifyError}</p>}
            <button
              type="submit"
              disabled={verifying || !inputPw}
              className="w-full bg-primary hover:bg-primary/90 disabled:opacity-50 text-white font-black font-heading rounded-xl py-3 text-sm transition-colors"
            >
              {verifying ? "Checking…" : "Sign in"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  /* ── Admin dashboard ────────────────────────────────────────────────────── */
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-secondary border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-black font-heading text-sm">
              S
            </div>
            <div>
              <p className="text-white font-black font-heading text-sm">Cancellation &amp; Pause Requests</p>
              <p className="text-white/40 text-xs">Admin</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-white/40 text-xs">{rows.length} total</span>
            <button
              onClick={() => loadRows(password)}
              className="text-white/50 hover:text-white text-xs transition-colors"
            >
              ↺ Refresh
            </button>
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
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 space-y-4">
        {/* Filter bar */}
        <div className="flex items-center gap-2 flex-wrap">
          {(["all", "cancel", "pause"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setFilterType(t)}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-colors ${
                filterType === t
                  ? "bg-secondary text-white"
                  : "bg-white border border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {t === "all"
                ? `All (${rows.length})`
                : t === "cancel"
                ? `Cancellations (${rows.filter((r) => r.request_type === "cancel").length})`
                : `Pauses (${rows.filter((r) => r.request_type === "pause").length})`}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="text-center py-16 text-muted-foreground text-sm">Loading…</div>
        ) : displayed.length === 0 ? (
          <div className="bg-white rounded-2xl border border-border p-12 text-center shadow-sm">
            <p className="text-muted-foreground text-sm">No submissions yet.</p>
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="border-b border-border bg-secondary">
                  <tr>
                    <SortTh label="Date" col="created_at" />
                    <SortTh label="Type" col="request_type" />
                    <SortTh label="Parent" col="parent_name" />
                    <SortTh label="Child" col="child_name" />
                    <SortTh label="Email" col="email" />
                    <SortTh label="Phone" col="phone" />
                    <SortTh label="Branch" col="branch" />
                    <SortTh label="Option" col="option_chosen" />
                    <SortTh label="Days Notice" col="days_notice" />
                    <SortTh label="Reason" col="reason_for_leaving" />
                    <SortTh label="Enrolled" col="enrollment_initial_date" />
                    <SortTh label="Welcome Email" col="welcome_email_date" />
                    <th className="px-4 py-3" />
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {displayed.map((row) => (
                    <>
                      <tr key={row.id} className="hover:bg-muted/30 transition-colors">
                        <td className="px-4 py-3 whitespace-nowrap text-muted-foreground">
                          {fmt(row.created_at)}
                        </td>
                        <td className="px-4 py-3">
                          <span className={`px-2.5 py-0.5 rounded-full text-xs capitalize ${typeBadge(row.request_type)}`}>
                            {row.request_type}
                          </span>
                        </td>
                        <td className="px-4 py-3 font-semibold text-foreground whitespace-nowrap">
                          {row.parent_name}
                        </td>
                        <td className="px-4 py-3 text-muted-foreground whitespace-nowrap">
                          {row.child_name}
                        </td>
                        <td className="px-4 py-3 text-muted-foreground">{row.email}</td>
                        <td className="px-4 py-3 text-muted-foreground whitespace-nowrap">
                          {row.phone}
                        </td>
                        <td className="px-4 py-3">
                          {row.branch ? (
                            <span className={`px-2.5 py-0.5 rounded-full text-xs ${branchBadge(row.branch)}`}>
                              Branch {row.branch}
                            </span>
                          ) : (
                            <span className="text-border">—</span>
                          )}
                        </td>
                        <td className="px-4 py-3 text-muted-foreground capitalize whitespace-nowrap">
                          {row.option_chosen === "extend"
                            ? "Extend 1 Month"
                            : row.option_chosen === "credit"
                            ? "Credit on File"
                            : row.pause_months
                            ? `Pause ${row.pause_months}mo`
                            : <span className="text-border">—</span>}
                        </td>
                        <td className="px-4 py-3 text-muted-foreground">
                          {row.days_notice ?? <span className="text-border">—</span>}
                        </td>
                        <td className="px-4 py-3 text-muted-foreground">
                          {row.reason_for_leaving ?? <span className="text-border">—</span>}
                        </td>
                        <td className="px-4 py-3 text-muted-foreground whitespace-nowrap">
                          {row.enrollment_initial_date}
                        </td>
                        <td className="px-4 py-3 text-muted-foreground whitespace-nowrap">
                          {row.welcome_email_date}
                        </td>
                        <td className="px-4 py-3">
                          <button
                            onClick={() => setExpanded(expanded === row.id ? null : row.id)}
                            className="text-xs text-primary hover:text-primary/70 whitespace-nowrap font-semibold transition-colors"
                          >
                            {expanded === row.id ? "▲ Less" : "▼ More"}
                          </button>
                        </td>
                      </tr>
                      {expanded === row.id && (
                        <tr key={`${row.id}-detail`} className="bg-primary/5">
                          <td colSpan={13} className="px-6 py-4">
                            <div className="grid grid-cols-2 gap-4 text-xs text-foreground">
                              <div>
                                <p className="font-bold text-secondary mb-1 uppercase tracking-wider text-xs">Submission #{row.id}</p>
                                <p className="text-muted-foreground">Next billing date: <span className="font-semibold text-foreground">{row.next_billing_date ?? "—"}</span></p>
                                <p className="text-muted-foreground">Days notice given: <span className="font-semibold text-foreground">{row.days_notice ?? "—"}</span></p>
                                <p className="text-muted-foreground">Pause months: <span className="font-semibold text-foreground">{row.pause_months ?? "—"}</span></p>
                              </div>
                              <div>
                                <p className="font-bold text-secondary mb-1 uppercase tracking-wider text-xs">Enrollment Record</p>
                                <p className="text-muted-foreground">Policy initialed: <span className="font-semibold text-foreground">{row.enrollment_initial_date}</span></p>
                                <p className="text-muted-foreground">Welcome email sent: <span className="font-semibold text-foreground">{row.welcome_email_date}</span></p>
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
