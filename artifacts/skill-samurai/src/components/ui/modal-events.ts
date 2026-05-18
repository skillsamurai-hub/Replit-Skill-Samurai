export function openCalendarModal() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("skill-samurai:open-calendar"));
  }
}

export function openBookingModal() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("skill-samurai:open-booking"));
  }
}

export function openMakeupModal() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("skill-samurai:open-makeup"));
  }
}
