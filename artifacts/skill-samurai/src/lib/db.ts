import { Pool } from "pg";

const getPool = (() => {
  let pool: Pool | null = null;
  return () => {
    if (!pool) {
      if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL not set");
      pool = new Pool({ connectionString: process.env.DATABASE_URL });
    }
    return pool;
  };
})();

export type SlotRow = {
  id: number;
  location_id: string;
  day: string;
  time: string;
  spots_left: number;
  waitlist_url: string | null;
  updated_at: Date;
};

export async function getAllSlots(locationId?: string): Promise<SlotRow[]> {
  const pool = getPool();
  const result = locationId
    ? await pool.query<SlotRow>(
        "SELECT * FROM slot_availability WHERE location_id = $1 ORDER BY id",
        [locationId],
      )
    : await pool.query<SlotRow>("SELECT * FROM slot_availability ORDER BY id");
  return result.rows;
}

export async function updateSlot(
  id: number,
  data: { spotsLeft?: number; waitlistUrl?: string | null },
): Promise<SlotRow | null> {
  const pool = getPool();
  const sets: string[] = [];
  const values: unknown[] = [];
  let idx = 1;
  if (data.spotsLeft !== undefined) {
    sets.push(`spots_left = $${idx++}`);
    values.push(data.spotsLeft);
  }
  if (data.waitlistUrl !== undefined) {
    sets.push(`waitlist_url = $${idx++}`);
    values.push(data.waitlistUrl);
  }
  if (sets.length === 0) return null;
  sets.push(`updated_at = NOW()`);
  values.push(id);
  const result = await pool.query<SlotRow>(
    `UPDATE slot_availability SET ${sets.join(", ")} WHERE id = $${idx} RETURNING *`,
    values,
  );
  return result.rows[0] ?? null;
}

const NE_WAITLIST  = "https://book.skillsamuraiwinnipeg.com/widget/form/JKoCjgAhRxcyySexZMhq";
const SO_WAITLIST  = "https://book.skillsamuraiwinnipeg.com/widget/form/7XZ4NFi0bH4aYHux9FRh";

const SEED_DATA = [
  { location_id: "north-east", day: "Monday",    time: "5:30 PM", spots_left: 5, waitlist_url: NE_WAITLIST },
  { location_id: "north-east", day: "Monday",    time: "6:30 PM", spots_left: 5, waitlist_url: NE_WAITLIST },
  { location_id: "north-east", day: "Tuesday",   time: "5:30 PM", spots_left: 5, waitlist_url: NE_WAITLIST },
  { location_id: "north-east", day: "Tuesday",   time: "6:30 PM", spots_left: 5, waitlist_url: NE_WAITLIST },
  { location_id: "seven-oaks", day: "Wednesday", time: "4:30 PM", spots_left: 5, waitlist_url: SO_WAITLIST },
  { location_id: "seven-oaks", day: "Wednesday", time: "5:30 PM", spots_left: 5, waitlist_url: SO_WAITLIST },
  { location_id: "seven-oaks", day: "Wednesday", time: "6:30 PM", spots_left: 5, waitlist_url: SO_WAITLIST },
  { location_id: "seven-oaks", day: "Thursday",  time: "4:30 PM", spots_left: 5, waitlist_url: SO_WAITLIST },
  { location_id: "seven-oaks", day: "Thursday",  time: "5:30 PM", spots_left: 5, waitlist_url: SO_WAITLIST },
  { location_id: "seven-oaks", day: "Thursday",  time: "6:30 PM", spots_left: 5, waitlist_url: SO_WAITLIST },
];

export async function seedSlots(): Promise<SlotRow[]> {
  const pool = getPool();
  await pool.query("DELETE FROM slot_availability");
  const inserted: SlotRow[] = [];
  for (const row of SEED_DATA) {
    const result = await pool.query<SlotRow>(
      "INSERT INTO slot_availability (location_id, day, time, spots_left, waitlist_url) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [row.location_id, row.day, row.time, row.spots_left, row.waitlist_url],
    );
    inserted.push(result.rows[0]);
  }
  return inserted;
}

// ─── Cancellation / Pause Requests ───────────────────────────────────────────

export type CancellationRow = {
  id: number;
  created_at: Date;
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

async function ensureCancellationTable(): Promise<void> {
  const pool = getPool();
  await pool.query(`
    CREATE TABLE IF NOT EXISTS cancellation_requests (
      id                    SERIAL PRIMARY KEY,
      created_at            TIMESTAMP DEFAULT NOW(),
      parent_name           TEXT NOT NULL,
      child_name            TEXT NOT NULL,
      email                 TEXT NOT NULL,
      phone                 TEXT NOT NULL,
      request_type          TEXT NOT NULL,
      next_billing_date     TEXT,
      days_notice           INTEGER,
      branch                TEXT,
      option_chosen         TEXT,
      reason_for_leaving    TEXT,
      pause_months          INTEGER,
      enrollment_initial_date TEXT NOT NULL,
      welcome_email_date    TEXT NOT NULL
    )
  `);
}

export async function insertCancellationRequest(
  data: Omit<CancellationRow, "id" | "created_at">,
): Promise<CancellationRow> {
  const pool = getPool();
  await ensureCancellationTable();
  const result = await pool.query<CancellationRow>(
    `INSERT INTO cancellation_requests
       (parent_name, child_name, email, phone, request_type,
        next_billing_date, days_notice, branch, option_chosen,
        reason_for_leaving, pause_months, enrollment_initial_date, welcome_email_date)
     VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)
     RETURNING *`,
    [
      data.parent_name, data.child_name, data.email, data.phone,
      data.request_type, data.next_billing_date, data.days_notice,
      data.branch, data.option_chosen, data.reason_for_leaving,
      data.pause_months, data.enrollment_initial_date, data.welcome_email_date,
    ],
  );
  return result.rows[0];
}

export async function getAllCancellationRequests(): Promise<CancellationRow[]> {
  const pool = getPool();
  await ensureCancellationTable();
  const result = await pool.query<CancellationRow>(
    "SELECT * FROM cancellation_requests ORDER BY created_at DESC",
  );
  return result.rows;
}
