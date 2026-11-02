"use client";

import dynamic from "next/dynamic";
import { MakeupModal } from "./makeup-modal";

const CalendarModal = dynamic(
  () => import("./calendar-modal").then((m) => m.CalendarModal),
  { ssr: false }
);
const BookingModal = dynamic(
  () => import("./booking-modal").then((m) => m.BookingModal),
  { ssr: false }
);
export function ModalProvider() {
  return (
    <>
      <CalendarModal />
      <BookingModal />
      <MakeupModal />
    </>
  );
}
