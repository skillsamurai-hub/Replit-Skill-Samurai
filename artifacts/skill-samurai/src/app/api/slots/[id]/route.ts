import { NextRequest, NextResponse } from "next/server";
import { updateSlot } from "@/lib/db";
import { z } from "zod/v4";

function isAdmin(request: NextRequest): boolean {
  const pw = request.headers.get("x-admin-password");
  return !!process.env.ADMIN_PASSWORD && pw === process.env.ADMIN_PASSWORD;
}

const patchSchema = z.object({
  spotsLeft: z.number().int().min(0).optional(),
  waitlistUrl: z.string().nullable().optional(),
});

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  if (!isAdmin(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    const { id } = await params;
    const body = await request.json();
    const parsed = patchSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid body" }, { status: 400 });
    }
    const updated = await updateSlot(parseInt(id), {
      spotsLeft: parsed.data.spotsLeft,
      waitlistUrl: parsed.data.waitlistUrl,
    });
    if (!updated) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
    return NextResponse.json(updated);
  } catch {
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}
