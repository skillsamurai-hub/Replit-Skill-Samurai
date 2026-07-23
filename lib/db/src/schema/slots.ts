import { pgTable, serial, text, integer, timestamp } from "drizzle-orm/pg-core";

export const slotAvailability = pgTable("slot_availability", {
  id: serial("id").primaryKey(),
  locationId: text("location_id").notNull(),
  day: text("day").notNull(),
  time: text("time").notNull(),
  spotsLeft: integer("spots_left").notNull().default(5),
  waitlistUrl: text("waitlist_url"),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export type SlotAvailability = typeof slotAvailability.$inferSelect;
