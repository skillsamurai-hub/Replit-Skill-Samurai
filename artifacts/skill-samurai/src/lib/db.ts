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

const SEED_DATA = [
  { location_id: "north-east", day: "Monday",    time: "5:30 PM", spots_left: 5, waitlist_url: null },
  { location_id: "north-east", day: "Monday",    time: "6:30 PM", spots_left: 5, waitlist_url: null },
  { location_id: "north-east", day: "Tuesday",   time: "5:30 PM", spots_left: 5, waitlist_url: null },
  { location_id: "north-east", day: "Tuesday",   time: "6:30 PM", spots_left: 5, waitlist_url: null },
  { location_id: "seven-oaks", day: "Wednesday", time: "4:30 PM", spots_left: 5, waitlist_url: null },
  { location_id: "seven-oaks", day: "Wednesday", time: "5:30 PM", spots_left: 5, waitlist_url: null },
  { location_id: "seven-oaks", day: "Wednesday", time: "6:30 PM", spots_left: 5, waitlist_url: null },
  { location_id: "seven-oaks", day: "Thursday",  time: "4:30 PM", spots_left: 5, waitlist_url: null },
  { location_id: "seven-oaks", day: "Thursday",  time: "5:30 PM", spots_left: 5, waitlist_url: null },
  { location_id: "seven-oaks", day: "Thursday",  time: "6:30 PM", spots_left: 5, waitlist_url: null },
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
