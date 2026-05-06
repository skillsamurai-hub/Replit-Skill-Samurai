"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SchoolsCommunityRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/schools");
  }, [router]);
  return null;
}
