"use client";

import React from "react";
import { openBookingModal } from "@/components/ui/modal-events";

export default function AboutHeroCta() {
  return (
    <button
      type="button"
      onClick={openBookingModal}
      className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-bold text-white shadow-lg hover:bg-primary/90 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
    >
      Book a Free Trial Class
    </button>
  );
}
