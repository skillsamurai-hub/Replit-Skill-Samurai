import { NextRequest, NextResponse } from "next/server";
import { insertCancellationRequest, getAllCancellationRequests } from "@/lib/db";

function requireAdmin(request: NextRequest) {
  const pw = request.headers.get("x-admin-password");
  if (!process.env.ADMIN_PASSWORD || pw !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return null;
}

const MOCK_ENROLLMENT_DATE = "January 15, 2025";
const MOCK_WELCOME_EMAIL_DATE = "January 16, 2025";

export async function GET(request: NextRequest) {
  const authError = requireAdmin(request);
  if (authError) return authError;
  try {
    const rows = await getAllCancellationRequests();
    return NextResponse.json(rows);
  } catch {
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as {
      parentName: string;
      childName: string;
      email: string;
      phone: string;
      requestType: string;
      nextBillingDate?: string;
      daysNotice?: number;
      branch?: string;
      optionChosen?: string;
      reasonForLeaving?: string;
      pauseMonths?: number;
    };
    const row = await insertCancellationRequest({
      parent_name: body.parentName,
      child_name: body.childName,
      email: body.email,
      phone: body.phone,
      request_type: body.requestType,
      next_billing_date: body.nextBillingDate ?? null,
      days_notice: body.daysNotice ?? null,
      branch: body.branch ?? null,
      option_chosen: body.optionChosen ?? null,
      reason_for_leaving: body.reasonForLeaving ?? null,
      pause_months: body.pauseMonths ?? null,
      enrollment_initial_date: MOCK_ENROLLMENT_DATE,
      welcome_email_date: MOCK_WELCOME_EMAIL_DATE,
    });
    return NextResponse.json(row);
  } catch {
    return NextResponse.json({ error: "Failed to save request" }, { status: 500 });
  }
}
