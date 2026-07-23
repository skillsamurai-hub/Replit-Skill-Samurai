import { NextRequest, NextResponse } from "next/server";
import { seedSlots } from "@/lib/db";

export async function POST(request: NextRequest) {
  const pw = request.headers.get("x-admin-password");
  if (!process.env.ADMIN_PASSWORD || pw !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    const slots = await seedSlots();
    return NextResponse.json({ message: "Seeded", slots });
  } catch {
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}
