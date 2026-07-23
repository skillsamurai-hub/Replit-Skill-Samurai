import { NextRequest, NextResponse } from "next/server";
import { getAllSlots } from "@/lib/db";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const location = searchParams.get("location") ?? undefined;
    const slots = await getAllSlots(location);
    return NextResponse.json(slots);
  } catch {
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}
